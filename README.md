# 30-day frontend challenge

This repo is set up for a one-component-per-day frontend challenge. The app shell stays in one place, and each day lives in its own folder with its own demo data and static assets.

## Quick Start

```bash
npm install
npm run dev
```

Use `npm run build` to verify the project still compiles before you move on to the next day.

## How To Add A New Day

1. Create a new folder under [src/days](src/days) such as [src/days/day-04](src/days/day-04).
2. Put the component file for that day in the same folder.
3. Keep the demo data for that component in a small local file like `demo.ts`.
4. Place related images, icons, and fonts inside `assets` and `fonts` inside that day folder.
5. Export the day from an `index.ts` file so the app can import it cleanly.

## Asset Placement

Follow this rule of thumb:

- Use [src/days/day-03/assets](src/days/day-03/assets) for images and icons that belong only to day 03.
- Use [src/days/day-03/fonts](src/days/day-03/fonts) for fonts used only by that component or day.
- Create a shared assets folder only when multiple days truly reuse the same file.

## Current Folder Structure

- [src/app/App.tsx](src/app/App.tsx) renders the active day.
- [src/days/day-03/PropertyCard.tsx](src/days/day-03/PropertyCard.tsx) contains the day 03 component.
- [src/days/day-03/demo.ts](src/days/day-03/demo.ts) owns the sample data and images.
- [src/days/day-03/index.ts](src/days/day-03/index.ts) exports the day cleanly.

## Template Notes

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
