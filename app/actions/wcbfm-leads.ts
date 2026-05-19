"use server";

import { supabase } from "@/lib/supabase";

export type LeadFormState = {
  success: boolean;
  error: string | null;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const firstName = (formData.get("first_name") as string | null)?.trim();
  const company   = (formData.get("company")    as string | null)?.trim();
  const email     = (formData.get("email")      as string | null)?.trim();
  const phone     = (formData.get("phone")      as string | null)?.trim();

  if (!firstName) return { success: false, error: "First name is required." };
  if (!company)   return { success: false, error: "Company is required." };
  if (!email)     return { success: false, error: "Email is required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { success: false, error: "Please enter a valid email address." };
  if (!phone) return { success: false, error: "Phone number is required." };

  const { error } = await supabase.from("wcbfm_leads").insert({
    first_name: firstName,
    company,
    email,
    phone,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true, error: null };
}
