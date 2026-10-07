export const prototypeNow = new Date(2026, 9, 7, 10, 30, 0);

export function getOpenStatus(date = prototypeNow) {
  const day = date.getDay();
  const minutes = date.getHours() * 60 + date.getMinutes();
  const weekday = day >= 1 && day <= 5;

  if (weekday && minutes >= 8 * 60 && minutes < 17 * 60) {
    return { open: true, text: "Open • Closes at 5 p.m." };
  }

  const opensMonday = day === 0 || day === 6 || (day === 5 && minutes >= 17 * 60);
  return {
    open: false,
    text: opensMonday ? "Closed • Opens Monday at 8 a.m." : "Closed • Opens at 8 a.m.",
  };
}

export const facility = {
  name: "Adventist Health Primary Care",
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
  providers: [
    { id: "chen", name: "Maya Chen, MD", role: "Family medicine", initials: "MC" },
    { id: "okonkwo", name: "James Okonkwo, MD", role: "Internal medicine", initials: "JO" },
    { id: "shah", name: "Priya Shah, NP", role: "Primary care", initials: "PS" },
    { id: "vargas", name: "Elena Vargas, DO", role: "Family medicine", initials: "EV" },
  ],
  slots: [
    { id: "today", when: "Today · 2:40 p.m.", providerId: "chen" },
    { id: "thu", when: "Thu, Oct 8 · 9:15 a.m.", providerId: "shah" },
    { id: "fri", when: "Fri, Oct 9 · 11:00 a.m.", providerId: "okonkwo" },
  ],
  commonServices: ["Preventive care", "Routine check-ups", "Immunizations & vaccinations"],
  services: [
    "Diabetes screening",
    "Hypertension screening",
    "Immunizations & vaccinations",
    "Medication management",
    "Mental health counseling",
    "Minor injuries",
    "Preventive care",
    "Routine check-ups",
    "Specialist referrals",
  ],
  serviceDetail:
    "This office covers everyday primary care: screenings, vaccines, ongoing conditions such as diabetes and high blood pressure, and referrals when you need a specialist. Minor injuries can be seen here when they do not need an emergency department. For chest pain, trouble breathing, or a severe injury, call 911 or go to Adventist Health Twin Cities in Templeton.",
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
      name: "Adventist Health Twin Cities",
      why: "Hospital campus for imaging, lab, and specialty care this clinic refers out.",
      href: "https://www.google.com/maps/search/?api=1&query=Adventist+Health+Twin+Cities+Templeton+CA",
    },
    {
      id: "paso",
      city: "Paso Robles",
      distance: "13 mi",
      name: "Adventist Health Primary Care",
      why: "Another primary care office if you live north of Atascadero or need an earlier opening.",
      href: "https://www.google.com/maps/search/?api=1&query=Adventist+Health+Paso+Robles+CA",
    },
    {
      id: "slo",
      city: "San Luis Obispo",
      distance: "17 mi",
      name: "Adventist Health Sierra Vista",
      why: "Full hospital with an emergency department for problems this clinic cannot treat.",
      href: "https://www.google.com/maps/search/?api=1&query=Adventist+Health+Sierra+Vista+San+Luis+Obispo",
    },
  ],
};
