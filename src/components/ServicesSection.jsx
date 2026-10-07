import { useState } from "react";

export default function ServicesSection({ facility }) {
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="panel" aria-labelledby="services-title">
      <p className="eyebrow">What this clinic treats</p>
      <h2 id="services-title">Services</h2>
      <p className="common">
        <span>Most common</span>
        {facility.commonServices.join(", ")}
      </p>
      <ul className="services">
        {facility.services.map((service) => (
          <li key={service}>
            <svg viewBox="0 0 16 16" aria-hidden="true" className="check">
              <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M3.5 8.2 6.4 11l6.1-6.2" />
            </svg>
            {service}
          </li>
        ))}
      </ul>
      <button type="button" className="text-link" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? "Hide service details" : "Learn more about our services"}
      </button>
      {open && <p className="support detail">{facility.serviceDetail}</p>}
    </section>
  );
}
