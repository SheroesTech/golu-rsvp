import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hasAdminAccess } from "../../../lib/admin-auth";
import { addGuest, getGuests, updateGuest } from "../../../lib/guest-store";

async function authorized() { return hasAdminAccess((await cookies()).get("golu-admin")?.value); }
export async function GET() { if (!(await authorized())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 }); try { return NextResponse.json(await getGuests()); } catch { return NextResponse.json({ error: "Guest database is not configured yet." }, { status: 503 }); } }
export async function POST(request: Request) { if (!(await authorized())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 }); const { name, email, date } = await request.json() as { name?: string; email?: string; date?: string }; if (!name || !email || !date) return NextResponse.json({ error: "Name, email, and date are required." }, { status: 400 }); try { return NextResponse.json(await addGuest({ name, email, date, guests: 1, rsvp: "Pending", invited: false }), { status: 201 }); } catch { return NextResponse.json({ error: "Guest database is not configured yet." }, { status: 503 }); } }
export async function PATCH(request: Request) { if (!(await authorized())) return NextResponse.json({ error: "Unauthorized." }, { status: 401 }); const { id, invited } = await request.json() as { id?: string; invited?: boolean }; if (!id || invited !== true) return NextResponse.json({ error: "Invalid guest update." }, { status: 400 }); try { return NextResponse.json(await updateGuest(id, { invited }), { status: 200 }); } catch { return NextResponse.json({ error: "Guest update failed." }, { status: 503 }); } }
