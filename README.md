# 30-day frontend challenge

This project is my solo frontend build log. It exists to show progress, skill growth, and completed UI work across 30 days of building, one component at a time.

## What This Is

- A personal challenge repo.
- A place to prove consistent frontend progress.
- A gallery of day-by-day component work.

## How I Use It

```bash
npm install
npm run dev
```

I use `npm run build` before marking a day complete to make sure the work still compiles cleanly.

## Folder Strategy

The app shell stays in [src/app](src/app), and each day lives in [src/days](src/days) with its own component, demo data, images, icons, and fonts.

## Asset Rule

- Put images and icons for a specific day inside that day folder's `assets` directory.
- Put fonts for a specific day inside that day folder's `fonts` directory.
- Keep shared assets only when I actually reuse them across multiple days.

## Current Snapshot

- [src/app/App.tsx](src/app/App.tsx) renders the current day.
- [src/days/day-03/PropertyCard.tsx](src/days/day-03/PropertyCard.tsx) is the current challenge component.
- [src/days/day-03/demo.ts](src/days/day-03/demo.ts) holds the sample data for the card.
- [src/days/day-03/index.ts](src/days/day-03/index.ts) exports the day cleanly.

## Progress Notes

This README is intentionally written as a showcase note, not a collaboration guide. The goal is to present the work clearly as mine and make the challenge easy to follow as it grows.
