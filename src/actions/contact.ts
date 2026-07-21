"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email("Invalid email"),

  message: z.string().min(10, "Message is too short"),
});

export async function sendContactMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const validated = contactSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      message: "Invalid input",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: process.env.CONTACT_EMAIL!,

      subject: `New Portfolio Message from ${data.name}`,

      html: `

      <h2>New Contact Message</h2>


      <p>
      <b>Name:</b>
      ${data.name}
      </p>


      <p>
      <b>Email:</b>
      ${data.email}
      </p>


      <p>
      <b>Message:</b>
      </p>


      <p>
      ${data.message}
      </p>

      `,
    });

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
