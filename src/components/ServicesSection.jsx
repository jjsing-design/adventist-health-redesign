export default function ServicesSection({ facility }) {
  return (
    <section id="services" className="panel" aria-labelledby="services-title">
      <h2 id="services-title">Our services</h2>
      <p className="lede">{facility.intro}</p>
      <ul className="services">
        {facility.services.map((service) => (
          <li key={service.name} className={service.isPopular ? "is-popular" : undefined}>
            <svg viewBox="0 0 20 20" aria-hidden="true" className="check">
              <circle cx="10" cy="10" r="9" fill="currentColor" />
              <path fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M6 10.2 8.7 13l5.3-6.2" />
            </svg>
            <span>
              {service.isPopular && <span className="sr-only">Most common: </span>}
              {service.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
