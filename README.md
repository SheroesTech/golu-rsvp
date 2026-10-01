# Golu RSVP

A colorful, responsive Next.js site for a Navarathri Golu celebration. It includes a home page with RSVP controls plus About, Stories, and Through the years pages.

## Photo album

The About and Through the years pages link to the [shared Google Photos album](https://photos.app.goo.gl/m3B7RaYJcruuyr8Y9). Google Photos share pages do not expose stable, embeddable image URLs, so the gallery remains ready for local images. Download the selected album images into `public/` and replace the gallery `src` values with paths such as `/golu-2024.jpg` when you are ready to embed them.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel detects Next.js from `vercel.json`; retain the default build settings and select **Deploy**.

The current RSVP form demonstrates the interaction in the browser. Connect `submit` in `app/page.tsx` to your preferred RSVP storage or email service before collecting real submissions.

## Host invitations

The `/admin` page provides a server-backed guest list and invitation controls. To enable delivery, add `RESEND_API_KEY`, `INVITE_FROM_EMAIL` (a verified Resend sender), and `NEXT_PUBLIC_SITE_URL` as Vercel environment variables. The invitation endpoint is `app/api/invitations/route.ts`.

## Guest database

RSVPs and admin guest records are stored in Vercel KV using `KV_REST_API_URL` and `KV_REST_API_TOKEN`. Add a Vercel KV/Upstash store to the project, then add both variables to Vercel before accepting RSVPs. The public RSVP form writes attendance records to the backend, and `/admin` reads those same records.

## Admin password

The `/admin` page and invitation endpoint require the server-side password stored in `ADMIN_PASSWORD.txt`. Change the file contents to rotate the password, then restart or redeploy the server. Do not expose this file through a public/static directory or share it in screenshots.
