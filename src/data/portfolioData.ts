import type { Experience, Education, Project, Certificate, SkillCategory } from '../types/portfolio';

export const profileData = {
  name: "Ayoub BENDRAOU",
  title: "Computer Science & Cybersecurity Engineer",
  email: "ayoub_bendraou@outlook.fr",
  phone: "+33 7.53.13.77.98",
  location: "Aubervilliers, France",
  github: "github.com/Youbey",
  summary: "Cybersecurity & Computer Science Engineer combining strong analytical skills with passion for digital security. Eager to contribute fresh perspectives and technical capabilities to a forward-thinking organization."
};

export const experiences: Experience[] = [
  {
    title: "Full-stack Developer & Project Lead Internship",
    company: "ElecZy",
    location: "Paris, France",
    period: "03/2026 – 09/2026",
    description: [
        "End-to-End Product Development: Designed and developed a Decision Support System (DSS) application, managing the full software development life cycle (SDLC).\n" +
        "System Architecture & Strategy: Conducted requirements analysis and defined the technical architecture to ensure scalability and performance.\n" +
        "Full-Cycle Execution: Led the development, rigorous testing (V&V), and final deployment of the application\n" +
        "Security & Risk Management: Performed comprehensive risk assessments and implemented robust security protocols to protect sensitive data.\n" +
        "Web Management: Provided full-scale administration and maintenance for the corporate website, ensuring 100% uptime and functional updates & Security."
    ]
  },
    {
    title: "Network & CyberSecurity Internship",
    company: "Palmarais Hospitality & Leisure",
    location: "Casablanca, Morocco",
    period: "06/2025 – 08/2025",
    description: [
      "Analyzed existing network security documentation and assessed functional requirements for infrastructure optimization",
      "Implemented advanced firewall services including High Availability configurations, IPSec VPN tunneling, and web filtering solutions",
      "Started the migration process for the subsidiary branches"
    ]
  },
  {
    title: "Modeling the Survivability of an Aerial System of Systems with Drones",
    company: "DGA (Direction Générale de l'Armement)",
    location: "Vannes, France",
    period: "01/2025 – 05/2025",
    description: [
      "Modeled an air-to-ground combat scenario from the perspective of system survivability",
      "Enabled comparison of different friendly architectures against an enemy using specific metrics"
    ]
  },
  {
    title: "Development Internship",
    company: "Netia - DAVID SYSTEM",
    location: "Munich, Germany",
    period: "04/2023 – 06/2023",
    description: [
      "Web & components development",
      "Website management and security"
    ]
  },
  {
    title: "Meteorological Forecast Application",
    company: "Agglomération de Vannes",
    location: "Vannes, France",
    period: "09/2022 – 04/2023",
    description: [
      "Developed JavaScript scripts to extract meteorological forecast data",
      "Cleaned and formatted the data",
      "Transferred data to the centralized application database"
    ]
  },
  {
    title: "Application Developer",
    company: "Regional Natural Park of the Gulf of Morbihan",
    location: "Vannes, France",
    period: "02/2022 – 06/2022",
    description: [
      "Developed an application with JavaFX / JavaSwing interface",
      "Harmonized and centralized data"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Software Engineering and Cybersecurity",
    institution: "Polytechnic Engineering School - ENSIBS",
    location: "Vannes, France",
    period: "09/2023 – 09/2026"
  },
  {
    degree: "Bachelor in Computer Science - Integrated Preparatory Classes",
    institution: "IUT de Vannes - ENSIBS",
    location: "Vannes, France",
    period: "09/2021 – 06/2023"
  },
  {
    degree: "Technological Baccalaureate",
    institution: "Lycée Marcel Cachin",
    location: "Saint-Ouen, France",
    period: "09/2020 – 06/2021",
    honors: "Bien (Good Mention)"
  }
];

export const projects: Project[] = [
    {
        title: "Crisis Management Simulation & Operations Drill - GHL (Groupement Hositalier lanvaux)",
        date: "02/2026",
        description: "A simulation of a crisis management scenario involving a large hospital chain, due to a quality accident.",
        details: [
            "Rotational Leadership: Operated within a 3-unit structure (Management, Dev, and Ops/Maintenance), rotating roles daily to ensure cross-functional expertise and seamless handovers.\n" +
            "\n" +
            "Agile Product Delivery: Simultaneously managed new product development, deployment, and legacy updates while maintaining strict V&V (Validation & Verification) and quality standards.\n" +
            "\n" +
            "Cyber Incident Response: Acted as first responders to a major cyberattack and data breach involving social media leaks.\n" +
            "\n" +
            "    Technical: Identified breach sources and contrsucted the attack timeline with the attacker's motives and implemented a comprehensive remediation plan.\n" +
            "\n" +
            "    Regulatory & Legal: Handled CNIL declarations (GDPR compliance) and cooperated with Law Enforcement (Gendarmerie) investigations.\n" +
            "\n" +
            "Strategic Communication:\n" +
            "\n" +
            "    Managed high-stakes crisis comms with the CEO, the affected client, and the press.\n" +
            "\n" +
            "    Ensured business continuity and successfully negotiated the renewal of the client contract mid-crisis.\n" +
            "\n" +
            "Operational Excellence: Maintained detailed logs (main-courantes) for status tracking and prioritized tasks in a high-pressure, multi-cell environment.",
        ]
    },
    {
        title: "MLSecOpsResearch - IA Federated Learning",
        date: "10/2025 - 03/2026",
        description: "A cybersecurity research project on the application of secured environment for IA training using federated learning process",
    },
    {
        title: "Sera - Automated Vulnerability Scanner",
        date: "11/2025",
        description: "Sera is an automated vulnerability scanning tool for web applications and APIs. It performs comprehensive security testing to identify common vulnerabilities including HTTP/HTTPS misconfigurations, SQL injection, XSS (Cross-Site Scripting), and integrates with OWASP ZAP for active and passive scanning.",
    },
    {
        title: "defHack: Military Defensive CTF",
        date: "10/2025",
        description: "A simulation of a military defensive CTF, an incident response scenario simulated by COMCYBER (French Military Cybersecurity Experts)",
        details: [
            "Two different military bases were simulated, with two teams in collaboration",
            "Military protocols were implemented to add a realistic environment with command chains",
            "Each base had access to a different infrastructure",
            "The Cyber Incident Response Team was mixte, and had to handle multiple tasks simultaneously"
        ]
    },
    {
        title: "Simulated Attack on an Encrypted Database",
        date: "04/2025",
        description: "A simulation to show how order leakage — even without direct access to plaintexts — can significantly reduce the security of an encrypted database."
    },
    {
        title: "File Exfiltration via ICMP Packets",
        date: "11/2023",
        description: "Advanced data exfiltration toolkit using ICMP protocol",
        details: [
          "Developed a basic script to send an encoded file via an ICMP packet using Scapy",
          "Improved security by sending multiple ICMP packets",
          "Strengthened file encoding for better obfuscation",
          "Introduced corrupted characters to prevent recognition and decoding of the file"
        ]
    }
];

export const certificates: Certificate[] = [
  { name: "Security Analyst (SOC) Junior - Level 1", status: "OnGoing" },
  { name: "CISSP Introduction" },
  { name: "SoSafe Certificate - Cyber Security Awareness" },
  { name: "CyberCrime Introduction" },
  { name: "COMCYBER - Cyber Incident Response (DefHack)"}
];

export const skillCategories: SkillCategory[] = [
    {
        category: "Software Architecture & Development",
        skills: [
            "Software Architecture & Security",
            "Modeling (UML, Meta-modeling...)",
            "Java (Spring Boot / Maven / Gradle)",
            "Jakarta EE / Payara",
            "Python",
            "Secure Distributed Systems",
            "API Documentation & Testing (Swagger)"
        ]
    },
    {
        category: "Network & Security Operations (SecOps)",
        skills: [
            "SIEM (Wazuh, ELK stack)",
            "Firewall & VPN (IPsec + SSL)",
            "HIDS/HIPS",
            "Reverse Proxy & Proxychains",
            "SSH",
            "pfSense",
            "Wireshark"
        ]
    },
    {
        category: "Ethical Hacking",
        skills: [
            "Malware Analysis",
            "Kali Linux / Parrot OS",
            "OSINT",
            "Metasploit",
            "SQL Injection",
            "Phishing",
            "Nmap",
            "Web Scraping"
        ]
    },
    {
        category: "Governance, Risk & Strategy",
        skills: [
            "Governance, Risk & Compliance (GRC)",
            "Business Strategy",
            "System Qualifications (ISO, HDS...)",
            "E-BIOS Risk Management",
            "CyberEdu: Modules 1, 2, 3 & 4"
        ]
    },
    {
        category: "Operating Systems & System Security",
        skills: [
            "System Security",
            "Windows & Linux",
            "Windows Server / Wallix",
            "Docker & Kubernetes",
            "Lynis & DebScan"
        ]
    },
    {
        category: "Project Management & DevSecOps",
        skills: [
            "DevSecOps / DevOps",
            "Ansible (Configuration Automation)",
            "Jenkins (CI/CD)",
            "Agile (Scrum / Kanban)",
            "JIRA"
        ]
    },
    {
        category: "Databases & Web Development",
        skills: [
            "SQL (MySQL, MariaDB, Oracle)",
            "NoSQL (MongoDB)",
            "Web: React.js, Node.js, SCSS"
        ]
    },
  {
    category: "Web Development",
    skills: [
      "HTML/CSS/SCSS",
      "JavaScript",
      "Node.js",
      "React.js"
    ]
  }
];

export const languages = [
  { name: "French", level: "Le Robert" },
  { name: "Arabic", level: "Native Language" },
  { name: "English", level: "TOEIC, ALC Certificate" }
];

export const interests = [
  { name: "Root-Me", detail: "Profile: Youbey" },
  { name: "Football", detail: "Position: Midfielder" },
  { name: "Muay Thaï", detail: "Self-Taught" }
];
