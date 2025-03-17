import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or AWS SES

    // For this example, we'll just log the data and return a success response
    console.log("Contact form submission:", data);

    // Simulate sending an email
    const emailContent = `
      New contact form submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || "Not provided"}
      Subject: ${data.subject || "Not provided"}
      
      Message:
      ${data.message}
    `;

    console.log("Email that would be sent:", emailContent);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form submission" },
      { status: 500 }
    );
  }
}
