"use server";

export type ContactFormState = {
  success: boolean;
  error: string | null;
};

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

  // Form is currently disconnected — submissions are not delivered.
  return { success: true, error: null };
}
