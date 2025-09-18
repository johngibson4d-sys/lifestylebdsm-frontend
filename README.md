# Lifestyle BDSM Hotel Booking Website

A modern, responsive hotel booking website built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse hotel rooms, view galleries, and make reservations with hourly pricing.

## Features

- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Room Gallery**: Showcase of hotel rooms and amenities
- **Hourly Booking System**: Flexible reservation system with hourly rates
- **Payment Integration**: Secure payment processing for room reservations
- **Contact Form**: Easy communication with hotel staff
- **Dark Theme**: Elegant black, red, and army green color scheme

## Pages

- **Homepage**: Hero section with hotel overview and features
- **Rooms**: Detailed room information with booking functionality
- **Gallery**: Photo gallery of hotel rooms and facilities
- **Contact**: Contact information and inquiry form

## Room Types & Pricing

- **Standard Room**: $30/hour
- **Executive Room**: $40/hour  
- **Deluxe Suite**: $50/hour
- **Premium Suite**: $75/hour

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Heroicons (SVG)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── gallery/
│   │   └── page.tsx          # Gallery page
│   ├── rooms/
│   │   └── page.tsx          # Rooms and booking page
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Homepage
├── components/
│   ├── Footer.tsx            # Site footer component
│   ├── Navigation.tsx        # Main navigation component
│   └── PaymentForm.tsx       # Payment processing form
```

## Customization

### Colors
The color scheme is defined in `src/app/globals.css`:
- **Primary**: Red (#dc2626)
- **Secondary**: Army Green (#4b5320)
- **Background**: Black (#000000)
- **Accent**: Dark Gray (#1f2937)

### Room Data
Room information is stored in `src/app/rooms/page.tsx` and can be easily modified to add new rooms or update pricing.

## Deployment

This project is ready for deployment on Vercel, Netlify, or any other Next.js-compatible hosting platform.

```bash
npm run build
npm start
```

## Features in Detail

### Booking System
- Hourly reservation system (1-24 hours)
- Real-time pricing calculation
- Form validation and error handling
- Payment processing simulation

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes
- Fast loading and smooth animations

### User Experience
- Intuitive navigation
- Clear pricing information
- Easy-to-use booking forms
- Professional design aesthetic

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.
