// src/data/experience.ts

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  timeframeLabel: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "mu-supervisor",
    company: "Memorial Union, Arizona State University",
    role: "Guest Services Associate Supervisor",
    location: "Tempe, AZ",
    start: "Aug 2025",
    end: "Present",
    timeframeLabel: "Aug 2025 — Present",
    bullets: [
      "Lead a 16-person Guest Services team across the Information Desk, Sparky’s Den, and Lost & Found, coaching new staff and aligning coverage with peak traffic.",
      "Create and manage weekly schedules for three service areas, balancing student availability with operational needs while minimizing coverage gaps.",
      "Perform regular audits of Lost & Found inventory and processes, improving record accuracy and compliance with ASU policies.",
      "Act as the primary escalation point for complex guest issues, coordinating with building operations to resolve problems quickly and professionally.",
    ],
  },
  {
    id: "mu-associate",
    company: "Memorial Union, Arizona State University",
    role: "Guest Services Associate",
    location: "Tempe, AZ",
    start: "Jun 2023",
    end: "Aug 2025",
    timeframeLabel: "Jun 2023 — Aug 2025",
    bullets: [
      "Managed refund processes with high accuracy, ensuring customer satisfaction while adhering to Memorial Union and ASU finance policies.",
      "Oversaw the Lost & Found system, maintaining detailed records and reuniting guests with lost items promptly.",
      "Delivered exceptional guest service by resolving inquiries and issues in person and over the phone, enhancing the overall visitor experience.",
    ],
  },
  {
    id: "expandus",
    company: "Expandus Consulting Pvt. Ltd.",
    role: "IT Intern",
    location: "Remote / India",
    start: "Feb 2021",
    end: "Jan 2023",
    timeframeLabel: "Feb 2021 — Jan 2023",
    bullets: [
      "Migrated large datasets from Excel to PostgreSQL, improving data accessibility and reducing query response times by 30%.",
      "Designed RESTful APIs in Python to automate data flows, cutting manual data entry workload by roughly 50% and boosting retrieval speed by 40%.",
      "Collaborated with cross-functional teams to integrate client data sources, improving system reliability and enhancing service delivery by 25%.",
    ],
  },
];
