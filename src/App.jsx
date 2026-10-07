import { useRef, useState } from "react";
import { facility, getOpenStatus, prototypeNow } from "./mockData";
import ContactCard from "./components/ContactCard";
import CriticalInfoSection from "./components/CriticalInfoSection";
import ServicesSection from "./components/ServicesSection";
import LogisticsSection from "./components/LogisticsSection";
import BuildingPhoto from "./components/BuildingPhoto";
import RelatedLocations from "./components/RelatedLocations";

const jumps = [
  ["#book", "Book"],
  ["#services", "Services"],
  ["#visit", "Visit details"],
  ["#nearby", "Nearby"],
];

export default function App() {
  const scrollerRef = useRef(null);
  const status = getOpenStatus(prototypeNow);
  const [visitId, setVisitId] = useState(null);
  const visit = facility.slots.find((slot) => slot.id === visitId);
  const provider = facility.providers.find((person) => person.id === visit?.providerId);

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
        {visit && provider && (
          <p className="banner" role="status">
            Visit requested for {visit.when} with {provider.name}. Nothing is sent from this prototype.
          </p>
        )}
        <main>
          <CriticalInfoSection facility={facility} visitId={visitId} onBook={setVisitId} />
          <ServicesSection facility={facility} />
          <LogisticsSection items={facility.logistics} />
          <BuildingPhoto />
          <RelatedLocations locations={facility.related} />
        </main>
        <footer className="fineprint">
          Sample location page. Office status is pinned to Wednesday, Oct 7, 2026, 10:30 a.m.
        </footer>
      </div>
    </div>
  );
}
