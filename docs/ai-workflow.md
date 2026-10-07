# AI Workflow & Development Log

## Project setup (Oct 7, 2026)
- Cloned the GitHub repo to ~/Desktop/adventist-health-redesign
- Set up the local environment on this Mac
- Matched the Anthem project shape: Vite, React, and a `/docs` folder
- Wrote the problem statement, the existing-experience audit, and the first hours decision before building UI

## Implementation session (Oct 7, 2026)
Cursor built the mobile prototype from the redesign brief in one working session. The sequence was:

1. **Mock data.** One facility object holds name, address, phone, hours pattern, insurance, providers, services, logistics, and nearby sites. Components read that object so a fact cannot be typed twice.
2. **Contact card.** Hours render as a pattern. Holiday hours are a disclosure. Call uses `tel:`. Directions open a maps link. A short action bar appears only after the card scrolls off.
3. **Critical info.** New-patient status, insurance, four providers, and sample visit times. Choosing a time is local React state. The prototype does not send an appointment.
4. **Services.** A "most common" line, then the nine services, then an optional longer explanation.
5. **Logistics.** Five rows. The summary is visible closed.
6. **Photo and nearby sites.** Illustration after the facts. Three related locations with distance and a reason.
7. **Browser pass.** Checked the 375px layout, holiday disclosure, booking list, service details, parking row, and the scroll bar. Two visual bugs came out of that pass: "Get directions" wrapped inside a narrow button, and the scroll bar was translucent so text showed through it.

Times were not stopwatched. The audit docs existed before the build. The component pass, browser check, and this write-up were the same morning.

## How the tool was used
- The brief named the components, the facts, and the hours decision. Cursor turned that into React and CSS rather than inventing a different information architecture.
- Design changes during the build (the scroll bar, one-line buttons, summary-first logistics) were written back into `design-decisions.md` and `iteration.md` in the same session.
- Commits follow the component milestones so the GitHub history reads in build order.

## What to run
```bash
npm install
npm run dev
```
Vite is set to port 5174. If that port is taken, it will pick the next free one.
