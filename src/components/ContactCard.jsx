import { useEffect, useRef, useState } from "react";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="currentColor"
        d="M7.2 3.6h2.1c.4 0 .8.3.9.7l.8 2.5c.1.4 0 .8-.3 1.1l-1.4 1.4a12.2 12.2 0 0 0 5.4 5.4l1.4-1.4c.3-.3.7-.4 1.1-.3l2.5.8c.4.1.7.5.7.9v2.1c0 .6-.5 1.1-1.1 1.1C9.8 17.9 6.1 14.2 6.1 4.7c0-.6.5-1.1 1.1-1.1Z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="currentColor"
        d="M12 2.8a6.2 6.2 0 0 0-6.2 6.2c0 4.6 6.2 12.2 6.2 12.2s6.2-7.6 6.2-12.2A6.2 6.2 0 0 0 12 2.8Zm0 8.4a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon clock">
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="M12 7.5V12l3 2" />
    </svg>
  );
}

function Actions({ facility, compact = false }) {
  return (
    <div className={compact ? "actions actions-compact" : "actions"}>
      <a className="btn btn-primary" href={facility.phoneHref} aria-label={`Call ${facility.phone}`}>
        <PhoneIcon />
        <span>{facility.phone}</span>
      </a>
      <a className="btn btn-secondary" href={facility.directionsHref} target="_blank" rel="noreferrer">
        <PinIcon />
        <span>Get directions</span>
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

  const hoursCopy = (
    <p className="hours">
      <span className={`status-label ${status.open ? "is-open" : "is-closed"}`}>{status.label}</span>{" "}
      <span className="status-detail">{status.detail}</span>
      <span className="pattern">{facility.hoursPattern}</span>
    </p>
  );

  return (
    <>
      {dockOn && (
        <div className="dock show">
          <div className="dock-bar">
            <p className="hours hours-dock">
              <span className={`status-label ${status.open ? "is-open" : "is-closed"}`}>{status.label}</span>{" "}
              <span className="status-detail">{status.detail}</span>
            </p>
            <Actions facility={facility} compact />
          </div>
        </div>
      )}

      <header className="contact" ref={cardRef}>
        <div className="contact-inner">
          <img className="logo" src="/ah-logo.svg" alt="Adventist Health" />
          <h1>
            {facility.place}
            <span className="service-line">{facility.service}</span>
          </h1>
          <p className="network">{facility.network}</p>
          <Actions facility={facility} />
        </div>

        <div className="hours-bar">
          <div className="hours-row">
            <ClockIcon />
            {hoursCopy}
            {hasHolidays && (
              <button
                type="button"
                className="holiday-toggle"
                aria-expanded={holidaysOpen}
                onClick={() => setHolidaysOpen((open) => !open)}
              >
                <span className="sr-only">Holiday hours</span>
                <svg className="holiday-chev" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3.5 6 8 10.5 12.5 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          {holidaysOpen && (
            <ul className="holidays">
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
      </header>
    </>
  );
}
