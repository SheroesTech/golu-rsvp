export type GuestRecord = { id: string; name: string; email: string; date: string; guests: number; rsvp: "Pending" | "Attending" | "Declined"; invited: boolean; submittedAt: string };

const key = "golu-guests";

function config() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error("Guest database is not configured.");
  return { url, token };
}

async function command(path: string) {
  const { url, token } = config();
  const response = await fetch(`${url}/${path}`, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
  if (!response.ok) throw new Error("Guest database request failed.");
  return response.json() as Promise<{ result?: string | null }>;
}

export async function getGuests() {
  const { result } = await command(`get/${key}`);
  return result ? JSON.parse(result) as GuestRecord[] : [];
}

export async function saveGuests(guests: GuestRecord[]) {
  await command(`set/${key}/${encodeURIComponent(JSON.stringify(guests))}`);
}

export async function addGuest(guest: Omit<GuestRecord, "id" | "submittedAt">) {
  const guests = await getGuests();
  const record: GuestRecord = { ...guest, id: crypto.randomUUID(), submittedAt: new Date().toISOString() };
  guests.unshift(record);
  await saveGuests(guests);
  return record;
}

export async function updateGuest(id: string, patch: Partial<Pick<GuestRecord, "invited" | "rsvp" | "guests">>) {
  const guests = await getGuests();
  const index = guests.findIndex((guest) => guest.id === id);
  if (index === -1) throw new Error("Guest not found.");
  guests[index] = { ...guests[index], ...patch };
  await saveGuests(guests);
  return guests[index];
}
