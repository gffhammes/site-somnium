import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Novo contato do site! - SOMNIUM CONSULTORIA`,
    text: `
Uma pessoa deixou seu contato no site da SOMNIUM CONSULTORIA!

Nome: ${name}
Email: ${email}
Telefone: ${phone}
Mensagem: ${message}

---
Isso é uma mensagem automática. Não responda.
    `,
  };

  try {
    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
