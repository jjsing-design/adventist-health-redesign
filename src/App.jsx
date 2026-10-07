import { useRef } from "react";
import { facility, getOpenStatus, prototypeNow } from "./mockData";
import ContactCard from "./components/ContactCard";

const jumps = [
  ["#book", "Book"],
  ["#services", "Services"],
  ["#visit", "Visit details"],
  ["#nearby", "Nearby"],
];

export default function App() {
  const scrollerRef = useRef(null);
  const status = getOpenStatus(prototypeNow);

  return (
    <div className="stage">
      <p className="stage-label">Primary care location · mobile</p>
      <div className="device" ref={scrollerRef}>
        <a className="skip" href="#book">Skip to booking</a>
        <ContactCard facility={facility} status={status} scrollerRef={scrollerRef} />
        <nav className="jumps" aria-label="On this page">
          {jumps.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}
