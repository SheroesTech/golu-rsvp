import { cookies } from "next/headers";
import { hasAdminAccess } from "../lib/admin-auth";
import { GuestAdmin } from "./guest-admin";
import { LoginForm } from "./login-form";

export default async function AdminPage() {
  const cookieStore = await cookies();
  return (await hasAdminAccess(cookieStore.get("golu-admin")?.value)) ? <GuestAdmin /> : <LoginForm />;
}
