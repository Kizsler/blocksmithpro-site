"use client";

import { useActionState } from "react";
import { wcbfmLogin } from "@/app/actions/wcbfm-auth";

const INITIAL_STATE = { error: null };

export default function WCBFMLoginPage() {
  const [state, action, pending] = useActionState(wcbfmLogin, INITIAL_STATE);

  return (
    <main
      className="flex min-h-screen items-center justify-center px-6"
      style={{ backgroundColor: "#08080A" }}
    >
      <div className="w-full max-w-sm">
        <span
          className="block text-[10px] uppercase tracking-[0.35em] mb-2"
          style={{ fontFamily: "var(--f-mono)", color: "#ffffff44" }}
        >
          B&B Admin
        </span>
        <h1
          className="text-3xl uppercase leading-none tracking-[-0.01em] mb-8"
          style={{ fontFamily: "var(--f-display)", color: "#F4F0E6" }}
        >
          WCBFM Admin
        </h1>

        <form action={action} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-[10px] uppercase tracking-[0.25em]"
              style={{ fontFamily: "var(--f-mono)", color: "#ffffff66" }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="border bg-transparent px-4 py-3 text-sm outline-none focus:border-[#E63946] transition-colors"
              style={{
                borderColor: "#ffffff22",
                color: "#F4F0E6",
                fontFamily: "var(--f-body)",
              }}
            />
          </div>

          {state.error && (
            <p
              className="text-xs"
              style={{ color: "#E63946", fontFamily: "var(--f-mono)" }}
            >
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 px-6 py-3 text-[11px] uppercase tracking-[0.3em] transition-opacity disabled:opacity-50"
            style={{
              backgroundColor: "#E63946",
              color: "#ffffff",
              fontFamily: "var(--f-mono)",
            }}
          >
            {pending ? "Checking…" : "Enter →"}
          </button>
        </form>
      </div>
    </main>
  );
}
