# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Folder structure

This repo is organized around one root app shell and one folder per day under [src/days](src/days). Each day owns its component, its demo data, and its colocated static assets.

### Suggested pattern

- Put the root application shell in [src/app](src/app).
- Put each challenge component in [src/days/day-XX](src/days/day-03).
- Keep component-specific images, icons, and fonts inside that same day folder under `assets` and `fonts`.
- Put shared assets only in a shared folder if they are reused across multiple days.

### Current example

- [src/app/App.tsx](src/app/App.tsx) renders the active challenge.
- [src/days/day-03/PropertyCard.tsx](src/days/day-03/PropertyCard.tsx) contains the card UI.
- [src/days/day-03/demo.ts](src/days/day-03/demo.ts) owns the sample data and images for that card.
- [src/days/day-03/assets](src/days/day-03/assets) and [src/days/day-03/fonts](src/days/day-03/fonts) hold the related static files.

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
