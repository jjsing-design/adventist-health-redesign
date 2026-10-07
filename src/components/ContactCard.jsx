import { useEffect, useRef, useState } from "react";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M8 4.5h2.2l1.2 3-1.7 1.1a12 12 0 0 0 5.7 5.7l1.1-1.7 3 1.2V16a1.5 1.5 0 0 1-1.5 1.5A12.5 12.5 0 0 1 6.5 6 1.5 1.5 0 0 1 8 4.5Z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M12 21s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z"
      />
      <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function Actions({ facility, compact = false }) {
  return (
    <div className={compact ? "actions actions-compact" : "actions"}>
      <a className="btn btn-primary" href={facility.phoneHref}>
        <PhoneIcon />
        <span>{compact ? "Call" : `Call ${facility.phone}`}</span>
      </a>
      <a className="btn btn-secondary" href={facility.directionsHref} target="_blank" rel="noreferrer">
        <PinIcon />
        <span>{compact ? "Directions" : "Get directions"}</span>
      </a>
    </div>
  );
}

export default function ContactCard({ facility, status, scrollerRef }) {
  const cardRef = useRef(null);
  const [holidaysOpen, setHolidaysOpen] = useState(false);
  const [dockOn, setDockOn] = useState(false);
  const hasHolidays = facility.specialHours.length > 0;

  useEffect(() => {
    const scroller = scrollerRef.current;
    const card = cardRef.current;
    if (!scroller || !card) return undefined;

    const update = () => {
      const top = scroller.scrollTop > 0 ? scroller.scrollTop : window.scrollY;
      setDockOn(top > card.offsetHeight - 12);
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
    };
  }, [scrollerRef]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;
    if (dockOn) card.setAttribute("inert", "");
    else card.removeAttribute("inert");
    return () => card.removeAttribute("inert");
  }, [dockOn]);

  return (
    <>
      {dockOn && (
        <div className="dock show">
          <div className="dock-bar">
            <p className={`status ${status.open ? "is-open" : "is-closed"}`}>
              <span className="dot" aria-hidden="true" />
              {status.text}
            </p>
            <Actions facility={facility} compact />
          </div>
        </div>
      )}

      <header className="contact" ref={cardRef}>
        <p className="brand">
          <span className="mark" aria-hidden="true">+</span>
          Adventist Health
        </p>
        <h1>{facility.name}</h1>
        <p className="network">{facility.network}</p>
        <p className="address">
          {facility.street}
          <br />
          {facility.locality}
        </p>
        <p className="hours">
          <span className={`status ${status.open ? "is-open" : "is-closed"}`}>
            <span className="dot" aria-hidden="true" />
            {status.text}
          </span>
          <span className="pattern">{facility.hoursPattern}</span>
        </p>

        {hasHolidays && (
          <div className="holidays">
            <button
              type="button"
              className="holiday-toggle"
              aria-expanded={holidaysOpen}
              onClick={() => setHolidaysOpen((open) => !open)}
            >
              Holiday hours
              <span aria-hidden="true">{holidaysOpen ? "–" : "+"}</span>
            </button>
            {holidaysOpen && (
              <ul>
                {facility.specialHours.map((item) => (
                  <li key={item.id}>
                    <span>
                      {item.when} · {item.name}
                    </span>
                    <strong>{item.detail}</strong>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <Actions facility={facility} />
      </header>
    </>
  );
}
