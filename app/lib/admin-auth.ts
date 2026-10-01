import { createHmac, timingSafeEqual } from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";

const passwordPath = join(process.cwd(), "ADMIN_PASSWORD.txt");

export async function getAdminPassword() {
  return (await readFile(passwordPath, "utf8")).trim();
}

export async function verifyAdminPassword(candidate: string) {
  const password = await getAdminPassword();
  const candidateBuffer = Buffer.from(candidate);
  const passwordBuffer = Buffer.from(password);
  return candidateBuffer.length === passwordBuffer.length && timingSafeEqual(candidateBuffer, passwordBuffer);
}

export async function getAdminToken() {
  return createHmac("sha256", await getAdminPassword()).update("golu-admin").digest("hex");
}

export async function hasAdminAccess(token?: string) {
  if (!token) return false;
  const expected = await getAdminToken();
  const tokenBuffer = Buffer.from(token);
  const expectedBuffer = Buffer.from(expected);
  return tokenBuffer.length === expectedBuffer.length && timingSafeEqual(tokenBuffer, expectedBuffer);
}
