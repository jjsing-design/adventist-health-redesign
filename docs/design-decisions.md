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

## Decision 7: Services list — visual hierarchy without a second list

**Observation:** A “Most common” box repeated three services that also appeared in the full list.

**Problem:** The repeat made it unclear which services were the core offering.

**Solution:** One list. Preventive care, routine check-ups, and immunizations are marked `isPopular` and shown with a blue circle. The other six keep the green check.

**Benefit:** One source of truth, a clear hierarchy, and less clutter.

**Trade-off:** Popularity is read from the icon while scanning the list, not from a separate label.

## Decision 8: Emergency guidance and scope of care

**Observation:** Earlier copy told people with chest pain or trouble breathing to drive to Adventist Health Twin Cities in Templeton, and it mixed that advice with what this clinic treats.

**Problem:** That is unsafe, points Atascadero patients at the wrong place, and blurs primary care with emergency care.

**Solution:** A “When you need care” section. Medical emergencies say to call 911 and not to drive. Scope of care lists what this office handles, including specialist referrals.

**Benefit:** The emergency instruction is direct. Expectations for this clinic are separate from 911.

**Trade-off:** The section is longer. Bullets and two headings keep it scannable.

## Decision 9: Heading names the place, then the service

The logo already says Adventist Health. The heading is “Atascadero” with “PRIMARY CARE” under it, and the line below is “A service of Adventist Health Physicians Network.” Related locations can then read as other places, not another copy of this title.
