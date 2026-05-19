"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PASSWORD = "Reiddrinksbeer";
const COOKIE_NAME = "wcbfm_admin_auth";
const COOKIE_VALUE = "granted";

export async function wcbfmLogin(
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  const password = (formData.get("password") as string | null)?.trim();

  if (password !== PASSWORD) {
    return { error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  redirect("/wcbfm-admin");
}
