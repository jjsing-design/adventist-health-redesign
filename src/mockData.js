export const prototypeNow = new Date(2026, 9, 7, 10, 30, 0);

export function getOpenStatus(date = prototypeNow) {
  const day = date.getDay();
  const minutes = date.getHours() * 60 + date.getMinutes();
  const weekday = day >= 1 && day <= 5;

  if (weekday && minutes >= 8 * 60 && minutes < 17 * 60) {
    return { open: true, label: "Open:", detail: "Closes at 5 p.m." };
  }

  const opensMonday = day === 0 || day === 6 || (day === 5 && minutes >= 17 * 60);
  return {
    open: false,
    label: "Closed:",
    detail: opensMonday ? "Opens Monday at 8 a.m." : "Opens at 8 a.m.",
  };
}

export const facility = {
  place: "Atascadero",
  service: "Primary Care",
  network: "A service of Adventist Health Physicians Network",
  phone: "805-395-3277",
  phoneHref: "tel:+18053953277",
  street: "6955 El Camino Real, Suite 200",
  locality: "Atascadero, CA 93422",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=6955+El+Camino+Real+Suite+200+Atascadero+CA+93422",
  hoursPattern: "Mon–Fri 8 a.m. – 5 p.m. | Closed weekends",
  specialHours: [
    { id: "thanksgiving", when: "Thu, Nov 26", name: "Thanksgiving", detail: "Closed" },
    { id: "christmas", when: "Fri, Dec 25", name: "Christmas Day", detail: "Closed" },
    { id: "newyear", when: "Thu, Jan 1", name: "New Year's Day", detail: "Closed" },
  ],
  acceptingNewPatients: true,
  newPatientNote: "New patients are being scheduled within the same week.",
  insurance: ["Aetna", "Blue Shield", "Cigna", "United Healthcare"],
  insuranceNote: "Call to confirm your specific plan before the visit.",
  intro:
    "We offer comprehensive primary care services to support your health and well-being. From sick visits and routine exams to managing or preventing chronic conditions like diabetes, asthma, or hypertension, our team is here to help you feel your best and enjoy life to the fullest.",
  providers: [
    { id: "bik", name: "Lymar Bik, MD", role: "Internal medicine", initials: "LB" },
    { id: "viera", name: "Kristen Viera, PA-C", role: "Primary care", initials: "KV" },
    { id: "flores", name: "Maria “Angel” Flores, NP", role: "Internal medicine", initials: "MF" },
  ],
  slots: [
    { id: "today", when: "Today · 2:40 p.m.", providerId: "bik" },
    { id: "thu", when: "Thu, Oct 8 · 9:15 a.m.", providerId: "viera" },
    { id: "fri", when: "Fri, Oct 9 · 11:00 a.m.", providerId: "flores" },
  ],
  services: [
    { name: "Preventive care", isPopular: true },
    { name: "Routine check-ups", isPopular: true },
    { name: "Immunizations and vaccinations", isPopular: true },
    { name: "Diabetes screening", isPopular: false },
    { name: "Hypertension screening", isPopular: false },
    { name: "Medication management", isPopular: false },
    { name: "Mental health counseling", isPopular: false },
    { name: "Minor injuries", isPopular: false },
    { name: "Specialist referrals", isPopular: false },
  ],
  emergency: {
    title: "Medical emergencies",
    lead: "Call 911 immediately for:",
    items: [
      "Chest pain or pressure",
      "Difficulty breathing",
      "Severe injuries",
      "Loss of consciousness",
      "Any life-threatening symptom",
    ],
    note: "Do not delay. Do not attempt to drive yourself. Emergency services will direct you to the nearest appropriate facility.",
  },
  scope: {
    title: "Our scope of care",
    lead: "This office provides:",
    items: [
      "Preventive screenings and vaccines",
      "Management of chronic conditions (diabetes, hypertension, asthma)",
      "Acute care (minor injuries, infections, sick visits)",
      "Medication management",
      "Mental health counseling and referrals",
      "Specialist referrals when needed",
    ],
    note: "For care outside our scope, we can refer you to specialists in the Adventist Health network or your insurance provider's network.",
  },
  logistics: [
    {
      id: "parking",
      title: "Parking and entrance",
      summary: "Free lot, south lobby, elevator to Suite 200",
      body: "Park in the surface lot off El Camino Real. Patient spaces are signed for the clinic. Enter through the south lobby and take the elevator to Suite 200.",
    },
    {
      id: "access",
      title: "Accessibility",
      summary: "Step-free entrance and elevator",
      body: "The south lobby entrance is step-free. The elevator reaches Suite 200, which has an accessible restroom and exam rooms. Call the clinic if you would like someone to meet you at the lot.",
    },
    {
      id: "telehealth",
      title: "Telehealth",
      summary: "Video visits for follow-ups and counseling",
      body: "Video visits are available for follow-ups, medication checks, and many counseling appointments. A link arrives by text about 15 minutes before the visit. New-patient exams and minor injuries are in person.",
    },
    {
      id: "bring",
      title: "What to bring",
      summary: "Photo ID, insurance card, medication list",
      body: "Bring a photo ID, your insurance card, and a list of current medications. Arrive 15 minutes early, or complete forms in the patient portal before you come.",
    },
    {
      id: "wait",
      title: "Appointment availability",
      summary: "Routine visits about 3 days out · ~10 min wait",
      body: "Routine visits are booking about three days out. Same-day sick slots open on weekday mornings — call by 9 a.m. After check-in, the current wait is about 10 minutes.",
    },
  ],
  related: [
    {
      id: "templeton",
      city: "Templeton",
      distance: "6 mi",
      name: "Adventist Health Primary Care",
      why: "959 Las Tablas Road, Suite B-3. Same-day primary care closer to Templeton.",
      href: "https://www.google.com/maps/search/?api=1&query=959+Las+Tablas+Road+Suite+B-3+Templeton+CA",
    },
    {
      id: "paso",
      city: "Paso Robles",
      distance: "13 mi",
      name: "Adventist Health Primary Care",
      why: "2727 Buena Vista Drive, Suite 201. Another primary care office north of Atascadero.",
      href: "https://www.google.com/maps/search/?api=1&query=2727+Buena+Vista+Drive+Suite+201+Paso+Robles+CA",
    },
    {
      id: "slo",
      city: "San Luis Obispo",
      distance: "17 mi",
      name: "Adventist Health Primary Care",
      why: "892 Aerovista Place, Suite 130. Primary care closer to San Luis Obispo.",
      href: "https://www.google.com/maps/search/?api=1&query=892+Aerovista+Place+Suite+130+San+Luis+Obispo+CA",
    },
  ],
};
