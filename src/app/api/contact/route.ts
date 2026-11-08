import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: "Please check the form fields." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !pass) {
    return Response.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const { firstname, email, message } = result.data;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  try {
    const delivery = await transporter.sendMail({
      from: { name: "Vercent Technologies", address: user },
      to: "athul.developer.official@gmail.com",
      replyTo: email,
      subject: "New website enquiry | Vercent Technologies",
      text: [
        "New enquiry from the Vercent Technologies website",
        "",
        `Name: ${firstname}`,
        `Email: ${email}`,
        "",
        "What would you like to build or integrate?",
        message,
      ].join("\n"),
    });

    if (!delivery.accepted.includes("athul.developer.official@gmail.com")) {
      throw new Error("Enquiry was not accepted by the mail server.");
    }
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to send your enquiry. Please try again." }, { status: 502 });
  }
}
