import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golu | Navarathri celebration",
  description: "Stories, memories, and an RSVP for a joyful Golu celebration."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
