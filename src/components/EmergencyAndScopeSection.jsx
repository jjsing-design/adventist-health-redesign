export default function EmergencyAndScopeSection({ facility }) {
  const { emergency, scope } = facility;

  return (
    <section id="care" className="panel" aria-labelledby="care-title">
      <h2 id="care-title">When you need care</h2>

      <div className="emergency">
        <h3>{emergency.title}</h3>
        <p className="care-lead">{emergency.lead}</p>
        <ul>
          {emergency.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="emergency-note">{emergency.note}</p>
      </div>

      <h3>{scope.title}</h3>
      <p className="care-lead">{scope.lead}</p>
      <ul className="scope-list">
        {scope.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="support">{scope.note}</p>
      <a className="btn btn-secondary care-cta" href="#book">
        Need a specialist? Ask about referrals.
      </a>
    </section>
  );
}
