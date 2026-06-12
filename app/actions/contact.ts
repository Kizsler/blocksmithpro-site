"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  error: string | null;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "Office@blocksmithpro.com";
const FROM_EMAIL = "B&B Locksmith <noreply@blocksmithpro.com>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true, error: null };
  }

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string | null;
  const company = formData.get("company") as string | null;
  const serviceType = formData.get("serviceType") as string | null;

  // Validation
  if (!name || !name.trim()) {
    return { success: false, error: "Name is required." };
  }
  if (!email || !email.trim()) {
    return { success: false, error: "Email is required." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!phone || !phone.trim()) {
    return { success: false, error: "Phone number is required." };
  }
  if (!message || !message.trim()) {
    return { success: false, error: "Message is required." };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCompany = company ? escapeHtml(company) : "";
  const safeService = serviceType ? escapeHtml(serviceType) : "";
  const safeMessage = escapeHtml(message);
  const telDigits = phone.replace(/[^0-9+]/g, "");

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${safeName}${safeService ? ` — ${safeService}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 24px;font-size:20px;color:#1A1A1A">New Contact Form Submission</h2>

          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;width:130px">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#1A1A1A">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#1A1A1A"><a href="mailto:${safeEmail}" style="color:#E63946">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#1A1A1A"><a href="tel:${telDigits}" style="color:#E63946">${safePhone}</a></td>
            </tr>
            ${safeCompany ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">Company</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#1A1A1A">${safeCompany}</td>
            </tr>` : ""}
            ${safeService ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px">Service</td>
              <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#1A1A1A">${safeService}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;color:#666;font-size:13px;vertical-align:top">Message</td>
              <td style="padding:10px 0;font-size:13px;color:#1A1A1A;white-space:pre-wrap">${safeMessage}</td>
            </tr>
          </table>

          <p style="margin:32px 0 0;font-size:11px;color:#999">
            Sent via blocksmithpro.com contact form
          </p>
        </div>
      `,
    });

    return { success: true, error: null };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      success: false,
      error: "Failed to send message. Please call us directly or try again.",
    };
  }
}
