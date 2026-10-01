import { NextResponse } from "next/server";
import { addGuest } from "../../lib/guest-store";

export async function POST(request: Request) {
  const { name, email, date, guests } = await request.json() as { name?: string; email?: string; date?: string; guests?: number };
  if (!name || !email || !date || typeof guests !== "number" || !Number.isInteger(guests) || guests < 1 || guests > 10) return NextResponse.json({ error: "Please complete your name, email, date, and guest count." }, { status: 400 });
  try { return NextResponse.json(await addGuest({ name, email, date, guests, rsvp: "Attending", invited: false }), { status: 201 }); }
  catch { return NextResponse.json({ error: "RSVP storage is not configured yet." }, { status: 503 }); }
}
