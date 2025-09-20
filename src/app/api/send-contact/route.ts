import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('🚀 CONTACT API ROUTE CALLED - /api/send-contact');
  
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('📝 Received contact request:', { name, email, subject });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Missing required fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration (using your current setup)
    const ZOHO_EMAIL = "info@lifestylebdsm.org";
    const ADMIN_EMAIL = "info@lifestylebdsm.org";

    console.log('📧 Sending contact email to:', ADMIN_EMAIL);

    // Create transporter for Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: ZOHO_EMAIL,
        pass: "Lifestyle123#",
      },
    });

    console.log('✅ Transporter created successfully');
    console.log('🔐 Testing authentication...');

    // Email content for admin
    const adminEmailContent = `
      <h2>New Contact Message - Lifestyle BDSM Dungeon</h2>
      
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Subject:</strong> ${subject}</li>
      </ul>
      
      <h3>Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <hr>
    
    `;

    // Email content for client confirmation
    const clientEmailContent = `
      <h2>Message Received - Lifestyle BDSM Dungeon</h2>
      
      <p>Dear ${name},</p>
      
      <p>Thank you for contacting us! We have received your message and will get back to you as soon as possible.</p>
      
      <h3>Your Message Details:</h3>
      <ul>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
        <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
      </ul>
      
      <p>We appreciate your interest in Lifestyle BDSM Dungeon and look forward to assisting you.</p>
      
      <p>Best regards,<br>
      Lifestyle BDSM Dungeon Team</p>
      
      <hr>
      <p><em>This is an automated confirmation email. Please do not reply to this email.</em></p>
    `;

    // Send email to admin
    console.log('Sending admin email...');
    await transporter.sendMail({
      from: ZOHO_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Message - ${subject} - ${name}`,
      html: adminEmailContent,
    });
    console.log('✅ Admin email sent successfully');

    // Send confirmation email to client
    console.log('Sending client confirmation email...');
    await transporter.sendMail({
      from: ZOHO_EMAIL,
      to: email,
      subject: 'Message Received - Lifestyle BDSM Dungeon',
      html: clientEmailContent,
    });
    console.log('✅ Client email sent successfully');

    return NextResponse.json(
      { message: 'Contact message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send contact message';
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
