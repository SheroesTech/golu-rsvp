# Golu RSVP

A colorful, responsive Next.js site for a Navarathri Golu celebration. It includes a home page with RSVP controls plus About, Stories, and Through the years pages.

## Photo album

The About and Through the years pages link to the [shared Google Photos album](https://photos.app.goo.gl/m3B7RaYJcruuyr8Y9). Google Photos share pages do not expose stable, embeddable image URLs, so the gallery remains ready for local images. Download the selected album images into `public/` and replace the gallery `src` values with paths such as `/golu-2024.jpg` when you are ready to embed them.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel detects Next.js from `vercel.json`; retain the default build settings and select **Deploy**.

The current RSVP form demonstrates the interaction in the browser. Connect `submit` in `app/page.tsx` to your preferred RSVP storage or email service before collecting real submissions.
