// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Send email
    const email = await resend.emails.send({
      from: process.env.EMAIL_FROM || `hello@nyutech.ca`,
      to: [process.env.EMAIL_TO || "nyutech@hotmail.com"],
      subject: "Media Audit / Enquiry Request from NYUtech Website",
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone}
        Message: ${body.message}

        Submitted via NYUtech digital signage website.
      `,
      html: `
        <h2>Media Audit / Enquiry Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        <hr>
        <small>Submitted via NYUtech digital signage website.</small>
      `,
    });

    if (email.error) {
      console.error("Resend error:", email.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Media audit request received and email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status:500 }
    );
  }
}
