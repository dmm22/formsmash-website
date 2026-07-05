# TODO

## Footer

- [ ] Restore commented-out branding block in `Footer.tsx`
- [ ] External footer URLs needed:
  - Install The Extension
  - Getting Started
  - Custom GPT
  - Privacy Policy
  - Terms of Service

## Refactors

- [ ] HomePage JSX title refactor (intentionally left as `ReactNode` for flexible accent placement)
- [ ] Navbar invisible logo spacing hack
- [ ] PageShell extraction for About/Contact shared layout

## Performance

- [ ] GIF optimization (WebM/MP4 or WebP)
- [ ] Lazy-load below-the-fold media
- [ ] Route code splitting (`React.lazy`)
- [ ] Intersection Observer for navbar background sync

## Tooling

- [ ] Tests and CI

---

- get rid of && (render) and use render/getXClasses functions instead. no logic in jsx

getXClasses functions define baseClasses at the top of the function
