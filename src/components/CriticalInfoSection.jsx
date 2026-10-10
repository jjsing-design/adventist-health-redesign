import { useState } from "react";

export default function CriticalInfoSection({ facility, visitId, onBook }) {
  const [chooserOpen, setChooserOpen] = useState(false);
  const showSlots = chooserOpen || Boolean(visitId);

  return (
    <section id="book" className="panel" aria-labelledby="book-title">
      <p className="eyebrow">Before you go</p>
      <h2 id="book-title">New patients, insurance, and booking</h2>

      <p className="yesno">
        <span>Accepting new patients</span>
        <strong className={facility.acceptingNewPatients ? "badge yes" : "badge no"}>
          {facility.acceptingNewPatients ? "Yes" : "No"}
        </strong>
      </p>
      <p className="support">{facility.newPatientNote}</p>

      <h3>Insurance accepted</h3>
      <ul className="chips">
        {facility.insurance.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p className="support">{facility.insuranceNote}</p>

      <h3>Our team</h3>
      <ul className="providers">
        {facility.providers.map((provider) => (
          <li key={provider.id}>
            <span className="avatar" aria-hidden="true">{provider.initials}</span>
            <span>
              <strong>{provider.name}</strong>
              <em>{provider.role}</em>
            </span>
          </li>
        ))}
      </ul>

      <h3>Book online or call to schedule</h3>
      {!showSlots && (
        <button type="button" className="btn btn-primary btn-block" onClick={() => setChooserOpen(true)}>
          Book online
        </button>
      )}
      {showSlots && (
        <ul className="slots">
          {facility.slots.map((slot) => {
            const provider = facility.providers.find((person) => person.id === slot.providerId);
            const selected = visitId === slot.id;
            return (
              <li key={slot.id}>
                <button type="button" aria-pressed={selected} onClick={() => onBook(slot.id)}>
                  <strong>{slot.when}</strong>
                  <span>{provider.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {visitId && (
        <button type="button" className="text-link" onClick={() => onBook(null)}>
          Clear requested time
        </button>
      )}
      <p className="support">Prefer the phone? The call button at the top dials the clinic.</p>
    </section>
  );
}
