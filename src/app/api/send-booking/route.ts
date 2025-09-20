import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('🚀 API ROUTE CALLED - /api/send-booking');
  
  try {
    const body = await request.json();
    const { name, email, mistressName, hours, minutes, date, time, specialRequests } = body;

    console.log('📝 Received booking request:', { name, email, mistressName, hours, minutes, date, time });

    // Validate required fields
    if (!name || !email || !mistressName || !hours || !date || !time) {
      console.log('Missing required fields:', { name: !!name, email: !!email, mistressName: !!mistressName, hours: !!hours, date: !!date, time: !!time });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

 

    // Calculate total price
    const totalMinutes = (parseFloat(hours) * 60) + parseFloat(minutes);
    const totalHours = totalMinutes / 60;
    const totalPrice = totalHours >= 24 ? 500 : Math.ceil(totalHours * 200);

    console.log('Calculated price:', { totalMinutes, totalHours, totalPrice });

    // Create transporter for Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "info@lifestylebdsm.org",
        pass: "Lifestyle123#",
      },
    });
 

    console.log('Transporter created successfully');    

    // Email content for admin
    const adminEmailContent = `
      <h2>New Booking Request - Lifestyle BDSM Dungeon</h2>
      
      <h3>Client Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Preferred Mistress:</strong> ${mistressName}</li>
      </ul>
      
      <h3>Session Details:</h3>
      <ul>
        <li><strong>Duration:</strong> ${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Total Price:</strong> $${totalPrice}</li>
      </ul>
      
      <h3>Special Requests:</h3>
      <p>${specialRequests || 'No special requests'}</p>
      
      <hr>
      <p><em>This booking request was submitted through the Lifestyle BDSM Dungeon website.</em></p>
    `;

    // Email content for client confirmation
    const clientEmailContent = `
      <h2>Booking Confirmation - Lifestyle BDSM Dungeon</h2>
      
      <p>Dear ${name},</p>
      
      <p>Thank you for your booking request. We have received your session details and will contact you within 24 hours to confirm your appointment.</p>
      
      <h3>Your Booking Details:</h3>
      <ul>
        <li><strong>Preferred Mistress:</strong> ${mistressName}</li>
        <li><strong>Duration:</strong> ${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Total Price:</strong> $${totalPrice}</li>
      </ul>
      
      <h3>Special Requests:</h3>
      <p>${specialRequests || 'No special requests'}</p>
      
      <p>We will review your request and contact you shortly to finalize your session.</p>
      
      <p>Best regards,<br>
      Lifestyle BDSM Dungeon Team</p>
      
      <hr>

    `;

    // Email configuration
    const ZOHO_EMAIL = "info@lifestylebdsm.org";
    const ADMIN_EMAIL = "info@lifestylebdsm.org";

    // Send email to admin
    console.log('Sending admin email...');
    await transporter.sendMail({
      from: ZOHO_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Booking Request - ${name} - ${date}`,
      html: adminEmailContent,
    });
    console.log('Admin email sent successfully');

    // Send confirmation email to client
    console.log('Sending client confirmation email...');
    await transporter.sendMail({
      from: ZOHO_EMAIL,
      to: email,
      subject: 'Booking Confirmation - Lifestyle BDSM Dungeon',
      html: clientEmailContent,
    });
    console.log('Client email sent successfully');

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending booking email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send booking request';
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check email credentials.';
      } else if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Unable to connect to email server. Please try again later.';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'Email server not found. Please check configuration.';
      } else {
        errorMessage = `Email error: ${error.message}`;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
