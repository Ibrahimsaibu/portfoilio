import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      )
    }

    const host = process.env.SMTP_HOST || "smtp.hostinger.com"
    const port = Number(process.env.SMTP_PORT) || 465
    const secure = port === 465
    const user = process.env.SMTP_USER || "info@ibrahimsaibu.dev"
    const pass = process.env.SMTP_PASS
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "info@ibrahimsaibu.dev"

    if (!pass) {
      console.warn("SMTP_PASS is not defined in environment variables. Email simulation mode.")
      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message: "Message received (SMTP credentials pending in .env.local).",
        },
        { status: 200 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    })

    const mailOptions = {
      from: `"Portfolio Contact Form" <${user}>`,
      to: receiver,
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio Contact] ${subject || "New Message"} - from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">New Message from Portfolio Website</h2>
          <p style="margin: 12px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 12px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 12px 0;"><strong>Subject:</strong> ${subject || "No Subject"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #4f46e5; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6;">${message}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">This email was sent from your portfolio website contact form (ibrahimsaibu.dev).</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Error sending contact email:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to send email. Please try again later.",
      },
      { status: 500 }
    )
  }
}
