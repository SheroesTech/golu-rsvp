import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hasAdminAccess } from "../../lib/admin-auth";

type Invitation = { email?: string; name?: string; date?: string };
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" })[character] ?? character);

export async function POST(request: Request) {
  if (!(await hasAdminAccess((await cookies()).get("golu-admin")?.value))) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  const { email, name, date } = await request.json() as Invitation;
  if (!email || !name || !date) return NextResponse.json({ error: "Name, email, and date are required." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INVITE_FROM_EMAIL;
  const safeName = escapeHtml(name);
  const safeDate = escapeHtml(date);
  if (!apiKey || !from) return NextResponse.json({ error: "Email sending is not configured. Add RESEND_API_KEY and INVITE_FROM_EMAIL in Vercel." }, { status: 503 });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "You’re invited to our Golu celebration",
      html: `<main style="font-family:Georgia,serif;color:#062d55;max-width:560px;margin:auto"><p style="color:#a72d29;letter-spacing:2px">GOLU NAVARATHRI</p><h1>Hello ${safeName},</h1><p>We would love to celebrate Golu with you on <strong>${safeDate}</strong> at our home.</p><p>16090 Ridgecrest Ave<br/>408 693 6153</p><p><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/#rsvp">RSVP here</a></p></main>`
    })
  });
  if (!response.ok) return NextResponse.json({ error: "The invitation could not be sent." }, { status: 502 });
  return NextResponse.json({ success: true });
}
