export default function RelatedLocations({ locations }) {
  return (
    <section id="nearby" className="panel" aria-labelledby="nearby-title">
      <p className="eyebrow">If this is not the right stop</p>
      <h2 id="nearby-title">Nearby Adventist Health</h2>
      <ul className="locations">
        {locations.map((location) => (
          <li key={location.id}>
            <a href={location.href} target="_blank" rel="noreferrer">
              <span className="loc-top">
                <strong>{location.city}</strong>
                <span>{location.distance}</span>
              </span>
              <span className="loc-name">{location.name}</span>
              <span className="loc-why">{location.why}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
