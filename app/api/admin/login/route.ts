import { NextResponse } from "next/server";
import { getAdminToken, verifyAdminPassword } from "../../../lib/admin-auth";

export async function POST(request: Request) {
  const { password } = await request.json() as { password?: string };
  if (!password || !(await verifyAdminPassword(password))) return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  const response = NextResponse.json({ success: true });
  response.cookies.set("golu-admin", await getAdminToken(), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 12 });
  return response;
}
