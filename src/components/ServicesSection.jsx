import { useState } from "react";

export default function ServicesSection({ facility }) {
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="panel" aria-labelledby="services-title">
      <h2 id="services-title">Our services</h2>
      <p className="lede">{facility.intro}</p>
      <p className="common">
        <span>Most common</span>
        {facility.commonServices.join(", ")}
      </p>
      <ul className="services">
        {facility.services.map((service) => (
          <li key={service}>
            <svg viewBox="0 0 20 20" aria-hidden="true" className="check">
              <circle cx="10" cy="10" r="9" fill="currentColor" />
              <path fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M6 10.2 8.7 13l5.3-6.2" />
            </svg>
            {service}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary learn-more" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? "Hide service details" : "Learn more about our services"}
      </button>
      {open && <p className="support detail">{facility.serviceDetail}</p>}
    </section>
  );
}
