# Iteration log

## Pivot 1: Do not keep the whole card stuck

The brief asked for a sticky contact card. Built that way, the card is most of the first screen, which is what we want at rest. Once someone scrolls, a stuck card that tall covers insurance, providers, and visit details — the same scroll friction the redesign is trying to remove.

**Change:** The full card scrolls away. A short bar (open status, Call, Directions) sticks after it leaves. The phone number is printed once, on the card. The bar's Call button still dials.

## Pivot 2: Both actions on one line

Side-by-side buttons with a 40/60 split wrapped "Get directions" onto two lines. That made the secondary action look broken next to the phone button.

**Change:** The row sizes to the label. Call keeps the full number. Get directions stays on one line. Under 340px the buttons stack.

## Pivot 3: Solid scroll bar

The first scroll bar used a slightly transparent white fill. Section headings showed through the status line and made the bar look unfinished.

**Change:** Solid white bar, hairline border, and a shadow. Off-screen card controls are marked `inert` so keyboard focus does not land on the call button that has already scrolled away.

## What stayed
- Weekly hours never became a 7-row list.
- Holiday hours stay behind one disclosure, because those days actually differ.
- Logistics rows keep their summary visible when closed.
- The building image stays below the facts someone needs in order to call or go.
