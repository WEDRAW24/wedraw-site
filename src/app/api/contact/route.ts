import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit (3 submissions per week)
    const rateLimit = checkRateLimit(ip, 3, 7 * 24 * 60 * 60 * 1000);
    
    if (!rateLimit.allowed) {
      const resetDate = new Date(rateLimit.resetTime);
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          message: `You've reached the maximum number of submissions. Please try again after ${resetDate.toLocaleDateString()}.`
        },
        { status: 429 }
      );
    }

    // Parse form data
    const body = await request.json();
    const { formType, honeypot } = body;

    // Honeypot check (bot detection)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let emailSubject = '';
    let emailText = '';
    let emailHtml = '';

    // Handle different form types
    if (formType === 'project-enquiry') {
      const {
        name,
        email,
        phone,
        projectDescription,
        location,
        sizeCapacity,
        startDate,
        endDate,
        services,
        profession,
        howDidYouHear,
      } = body;

      // Basic validation
      if (!name || !email || !phone) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        );
      }

      // Format services
      const selectedServices = Object.entries(services || {})
        .filter(([_, value]) => value)
        .map(([key]) => {
          // Convert camelCase to readable format
          return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        })
        .join(', ') || 'None selected';

      // Format dates
      const formattedStartDate = startDate ? new Date(startDate).toLocaleDateString('en-GB') : 'Not specified';
      const formattedEndDate = endDate ? new Date(endDate).toLocaleDateString('en-GB') : 'Not specified';

      emailSubject = `Project Enquiry from ${name}`;
      emailText = `
PROJECT ENQUIRY

CONTACT INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone}
${profession ? `Profession: ${profession}` : ''}

PROJECT DETAILS:
${projectDescription}

Location: ${location}
Size/Capacity: ${sizeCapacity}
Event Dates: ${formattedStartDate} - ${formattedEndDate}

SERVICES INTERESTED IN:
${selectedServices}

${howDidYouHear ? `HOW THEY HEARD ABOUT US:\n${howDidYouHear}` : ''}
      `;

      emailHtml = `
        <h2 style="color: #0066CC;">Project Enquiry</h2>
        
        <h3 style="color: #0066CC;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${profession ? `<p><strong>Profession:</strong> ${profession}</p>` : ''}
        
        <h3 style="color: #0066CC;">Project Details</h3>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
        
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Size/Capacity:</strong> ${sizeCapacity}</p>
        <p><strong>Event Dates:</strong> ${formattedStartDate} - ${formattedEndDate}</p>
        
        <h3 style="color: #0066CC;">Services Interested In</h3>
        <p>${selectedServices}</p>
        
        ${howDidYouHear ? `<h3 style="color: #0066CC;">How They Heard About Us</h3><p>${howDidYouHear.replace(/\n/g, '<br>')}</p>` : ''}
      `;
    } else if (formType === 'general-contact') {
      const { name, email, phone, message, services } = body;

      // Basic validation
      if (!name || !email || !phone || !message) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        );
      }

      // Format services
      const selectedServices = Object.entries(services || {})
        .filter(([_, value]) => value)
        .map(([key]) => {
          return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        })
        .join(', ') || 'None selected';

      emailSubject = `General Contact from ${name}`;
      emailText = `
GENERAL CONTACT

CONTACT INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone}

MESSAGE:
${message}

SERVICES INTERESTED IN:
${selectedServices}
      `;

      emailHtml = `
        <h2 style="color: #0066CC;">General Contact</h2>
        
        <h3 style="color: #0066CC;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3 style="color: #0066CC;">Message</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <h3 style="color: #0066CC;">Services Interested In</h3>
        <p>${selectedServices}</p>
      `;
    } else {
      // Default simple contact form
      const { name, email, message } = body;

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        );
      }

      emailSubject = `Contact Form Submission from ${name}`;
      emailText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      emailHtml = `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: 'theo@hatchastudios.co.uk',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: body.email,
    });

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully!',
        remaining: rateLimit.remaining
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

