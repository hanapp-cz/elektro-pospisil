import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();
  const getFieldValue = parseValue(formData);

  const email = getFieldValue("email");
  const message = getFieldValue("message");
  const firstName = getFieldValue("firstName");
  const lastName = getFieldValue("lastName");

  // Verify reCAPTCHA
  const recaptcha = formData.get("g-recaptcha-response")?.toString();
  const captchaRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
    }
  );

  const captchaData = await captchaRes.json();

  if (!captchaData.success) {
    return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 });
  }

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.forpsi.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const fullName = `${firstName} ${lastName}`.trim() || "Neznámý odesílatel";

    // Send email
    await transporter.sendMail({
      from: `"Web formulář" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nová zpráva od ${fullName}`,
      text: `${message}\n\nEmail: ${email}`,
    });

    // Auto-respond
    await transporter.sendMail({
      from: `"Jiří Pospíšil" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: "Děkujeme za zprávu",
      text: `
    Dobrý den,
    děkujeme za Vaši zprávu. Ozveme se co nejdříve.

    S pozdravem,
    Jiří Pospíšil
    `,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}

// * HELPERS

const parseValue = (formData: FormData) => (key: string) => {
  return formData.get(key)?.toString().trim() ?? "";
};
