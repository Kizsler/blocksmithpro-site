"use server";

import { Resend } from "resend";
import { JOBS } from "@/lib/careers-data";

export type ApplicationFormState = {
  success: boolean;
  error: string | null;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "Office@blocksmithpro.com";
const FROM_EMAIL = "B&B Locksmith Careers <noreply@blocksmithpro.com>";

const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4 MB
const RESUME_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

const ALLOWED_POSITIONS = new Set<string>([
  "Not sure / general",
  ...JOBS.map((job) => job.title),
]);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function row(label: string, valueHtml: string) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;color:#666;font-size:13px;width:160px;vertical-align:top">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#1A1A1A;white-space:pre-wrap">${valueHtml}</td>
    </tr>`;
}

export async function submitApplication(
  _prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  // Honeypot: bots fill every field, people never see this one.
  if (field(formData, "website")) {
    return { success: true, error: null };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const position = field(formData, "position");
  const experience = field(formData, "experience");
  const source = field(formData, "source");
  const message = field(formData, "message");
  const portfolio = field(formData, "portfolio");
  const biggestAccount = field(formData, "biggestAccount");

  if (!name) return { success: false, error: "Name is required." };
  if (!phone) return { success: false, error: "Phone number is required." };
  if (!email) return { success: false, error: "Email is required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (!ALLOWED_POSITIONS.has(position)) {
    return { success: false, error: "Please choose a position." };
  }

  const job = JOBS.find((j) => j.title === position);
  if (job?.extraQuestion?.required) {
    const answer = field(formData, job.extraQuestion.name);
    if (!answer) {
      return { success: false, error: `${job.extraQuestion.label} is required.` };
    }
  }

  // Optional resume
  const attachments: { filename: string; content: Buffer }[] = [];
  const resume = formData.get("resume");
  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return { success: false, error: "Resume must be 4 MB or smaller." };
    }
    const ext = RESUME_TYPES[resume.type];
    if (!ext) {
      return { success: false, error: "Resume must be a PDF or Word document." };
    }
    const safeBase = name.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "") || "applicant";
    attachments.push({
      filename: `Resume-${safeBase}.${ext}`,
      content: Buffer.from(await resume.arrayBuffer()),
    });
  }

  const telDigits = phone.replace(/[^0-9+]/g, "");
  const rows = [
    row("Position", `<strong>${escapeHtml(position)}</strong>`),
    row("Name", escapeHtml(name)),
    row("Phone", `<a href="tel:${escapeHtml(telDigits)}" style="color:#E63946">${escapeHtml(phone)}</a>`),
    row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#E63946">${escapeHtml(email)}</a>`),
    experience ? row("Experience", escapeHtml(experience)) : "",
    portfolio ? row("Portfolio", escapeHtml(portfolio)) : "",
    biggestAccount ? row("Biggest account they found and closed", escapeHtml(biggestAccount)) : "",
    source ? row("Heard about us", escapeHtml(source)) : "",
    message ? row("Message", escapeHtml(message)) : "",
    row("Resume", attachments.length ? "Attached" : "Not provided"),
  ].join("");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Job application: ${position} from ${name}`,
      attachments,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 24px;font-size:20px;color:#1A1A1A">New Job Application</h2>
          <table style="width:100%;border-collapse:collapse">${rows}</table>
          <p style="margin:32px 0 0;font-size:11px;color:#999">Sent via the blocksmithpro.com careers page. Reply to this email to reach the applicant.</p>
        </div>
      `,
    });
    if (error) throw error;
    return { success: true, error: null };
  } catch (err) {
    console.error("Resend error (careers):", err);
    return {
      success: false,
      error: "Your application didn't go through. Please try again, or call us at 415-423-0182.",
    };
  }
}
