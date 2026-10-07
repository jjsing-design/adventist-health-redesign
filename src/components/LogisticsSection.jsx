import { useState } from "react";

export default function LogisticsSection({ items }) {
  const [open, setOpen] = useState({});

  function toggle(id) {
    setOpen((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <section id="visit" className="panel" aria-labelledby="visit-title">
      <p className="eyebrow">Getting here</p>
      <h2 id="visit-title">Visit details</h2>
      <div className="logistics">
        {items.map((item) => {
          const expanded = Boolean(open[item.id]);
          return (
            <div key={item.id} className="logistics-item">
              <button
                type="button"
                className="logistics-trigger"
                aria-expanded={expanded}
                aria-controls={`logistics-${item.id}`}
                id={`logistics-trigger-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.summary}</em>
                </span>
                <span className="chev" aria-hidden="true" />
              </button>
              {expanded && (
                <p id={`logistics-${item.id}`} role="region" aria-labelledby={`logistics-trigger-${item.id}`}>
                  {item.body}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
