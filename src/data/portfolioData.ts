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
            "End-to-End Product Development: Designed and developed a Decision Support System (DSS) application, managing the full software development life cycle (SDLC).",
            "System Architecture & Strategy: Conducted requirements analysis and defined the technical architecture to ensure scalability and performance.",
            "Full-Cycle Execution: Led the development, rigorous testing (V&V), and final deployment of the application.",
            "Security & Risk Management: Performed comprehensive risk assessments and implemented robust security protocols to protect sensitive data.",
            "Web Management: Provided full-scale administration and maintenance for the corporate website, ensuring 100% uptime and functional updates."
        ]
    },
    {
        title: "Network & CyberSecurity Internship",
        company: "Palmarais Hospitality & Leisure",
        location: "Casablanca, Morocco",
        period: "06/2025 – 08/2025",
        description: [
            "Analyzed existing network security documentation and assessed functional requirements for infrastructure optimization.",
            "Implemented advanced firewall services including High Availability configurations, IPSec VPN tunneling, and web filtering solutions.",
            "Managed the initial migration process for the subsidiary branches."
        ]
    },
    {
        title: "Survivability Modeling - Aerial System of Systems",
        company: "DGA (Direction Générale de l'Armement)",
        location: "Vannes, France",
        period: "01/2025 – 05/2025",
        description: [
            "Modeled air-to-ground combat scenarios focusing on system survivability and resilience.",
            "Developed metrics to compare various friendly architectures against adversarial systems."
        ]
    },
    {
        title: "Development Internship",
        company: "Netia - DAVID SYSTEM",
        location: "Munich, Germany",
        period: "04/2023 – 06/2023",
        description: [
            "Web component development and UI/UX optimization.",
            "Corporate website management and security hardening."
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
        degree: "Bachelor in Computer Science",
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
        title: "Crisis Management Simulation - GHL (Groupement Hospitalier Lanvaux)",
        date: "02/2026",
        description: "A high-stakes simulation of a crisis management scenario involving a large hospital chain following a quality-related incident.",
        details: [
            "Rotational Leadership: Operated within a 3-unit structure (Management, Dev, Ops), rotating roles daily to ensure cross-functional expertise.",
            "Agile Delivery: Managed new product deployment and legacy updates under strict V&V and quality standards.",
            "Cyber Incident Response: Acted as first responder to a major cyberattack and data breach simulation.",
            "Technical Remediation: Identified breach sources, constructed attack timelines, and implemented remediation plans.",
            "Regulatory Compliance: Handled CNIL declarations (GDPR) and cooperated with Law Enforcement investigations.",
            "Strategic Communication: Managed high-stakes comms with the CEO, clients, and press to ensure business continuity."
        ]
    },
    {
        title: "MLSecOps Research - IA Federated Learning",
        date: "10/2025 - 03/2026",
        description: "A cybersecurity research project focused on creating secured environments for AI training using federated learning processes.",
        details: [
            "Researched privacy-preserving machine learning techniques.",
            "Developed secure protocols for decentralized model training."
        ]
    },
    {
        title: "defHack: Military Defensive CTF",
        date: "10/2025",
        description: "Military-grade incident response scenario simulated by COMCYBER (French Military Cybersecurity Experts).",
        details: [
            "Collaborated across simulated military bases under realistic command chains.",
            "Implemented military protocols to manage multi-base infrastructure security.",
            "Managed mixed Incident Response Teams to handle simultaneous defensive tasks."
        ]
    },
    {
        title: "Sera - Automated Vulnerability Scanner",
        date: "11/2025",
        description: "Automated tool for web and API security testing, integrating OWASP ZAP for SQLi and XSS detection.",
        details: [
            "Automated HTTP/HTTPS misconfiguration checks.",
            "Integrated active and passive scanning modules."
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
            "React.js / Node.js / SCSS"
        ]
    }
];

export const languages = [
    { name: "French", level: "Native / Professional" },
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional (TOEIC)" }
];

export const interests = [
    { name: "Root-Me", detail: "Profile: Youbey" },
    { name: "Football", detail: "Midfielder" },
    { name: "Muay Thaï", detail: "Self-Taught" }
];