"use client";

import { FormEvent, useState } from "react";

export function LoginForm() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitting(true); setError(""); const password = String(new FormData(event.currentTarget).get("password")); const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) }); if (response.ok) window.location.reload(); else { const result = await response.json() as { error?: string }; setError(result.error ?? "Unable to sign in."); setSubmitting(false); } }
  return <main className="admin-login"><section><p className="eyebrow">GOLU HOST DESK</p><h1>Welcome<br /><em>back.</em></h1><p>This private area is for the hosts managing guests and invitations.</p><form onSubmit={submit}><label>Password<input name="password" type="password" autoComplete="current-password" required autoFocus /></label>{error && <p className="login-error">{error}</p>}<button className="button" disabled={submitting}>{submitting ? "Opening…" : "Open host desk"} <span>→</span></button></form></section></main>;
}
