# Design Decisions

## Decision 1: Hours Display — Pattern Over List

**Observation:**
Current design shows collapsible weekly schedule with identical entries (Mon–Fri 8a–5p, Sat–Sun closed). Users must tap to see predictable info.

**Solution:**
Display hours as condensed pattern inline: "Monday – Friday, 8 a.m. – 5 p.m. | Closed weekends"

**Benefit:**
- No tap required
- Instantly scannable
- Saves mobile real estate

**Trade-off:**
- Exceptions require expandable section (rare)

**Shipped as:** "Mon–Fri 8 a.m. – 5 p.m. | Closed weekends", with status in front: "Open • Closes at 5 p.m."

Holiday closures (Thanksgiving, Christmas, New Year's Day) are the only expandable hours block. The weekly list is never rendered.

## Decision 2: One contact card

Name, network line, address, hours, phone, and directions live in a single card. The phone number and street address are not repeated lower on the page. Booking says to use the call button instead of printing the number again.

## Decision 3: Full card above the fold, short bar after scroll

A fully sticky card is tall enough to cover the next section while someone reads. The full card stays in normal flow so the first screen still shows name, address, hours, call, and directions. After the card scrolls away, a short bar sticks to the top with open status, Call, and Directions.

## Decision 4: Logistics answers before the tap

Parking, accessibility, telehealth, what to bring, and appointment availability each show a one-line summary. The longer directions open only on request. People who only need "free lot, south lobby" never have to expand the row.

## Decision 5: Pinned prototype clock

Office status is computed from hours, but "now" is fixed at Wednesday, Oct 7, 2026, 10:30 a.m. Pacific. The open state stays reproducible in a portfolio review instead of flipping to closed in the evening.

## Decision 6: Photo and nearby sites stay secondary

The building illustration sits after visit details. Nearby clinics (Templeton, Paso Robles, San Luis Obispo) include distance and why you would go there, so they do not bury the Atascadero office.
