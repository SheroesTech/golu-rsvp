# Golu RSVP

A colorful, responsive Next.js site for a Navarathri Golu celebration. It includes a home page with RSVP controls plus About, Stories, and Through the years pages.

## Replace the gallery images

All temporary images are regular `<img>` elements with remote Unsplash URLs. Replace the `src` values in the route files with your own image URLs, or place images in `public/` and refer to them with a path such as `/golu-2024.jpg`.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, select **Add New → Project** and import the repository.
3. Vercel detects Next.js from `vercel.json`; retain the default build settings and select **Deploy**.

The current RSVP form demonstrates the interaction in the browser. Connect `submit` in `app/page.tsx` to your preferred RSVP storage or email service before collecting real submissions.
