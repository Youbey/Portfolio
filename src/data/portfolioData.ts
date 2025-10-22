import type { Experience, Education, Project, Certificate, SkillCategory } from '../types/portfolio';

export const profileData = {
  name: "Ayoub BENDRAOU",
  title: "Computer Science & Cybersecurity Engineering Student",
  email: "ayoub_bendraou@outlook.fr",
  phone: "+33 7.53.13.77.98",
  location: "Aubervilliers, France",
  github: "github.com/Youbey",
  summary: "Cybersecurity & Computer Science engineering student at ENSIBS combining strong analytical skills with passion for digital security. Eager to contribute fresh perspectives and technical capabilities to a forward-thinking organization through a 6-month internship opportunity."
};

export const experiences: Experience[] = [
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
    location: "Montpellier, France",
    period: "04/2023 – 06/2023",
    description: [
      "Web development and component development",
      "Website management and security (WordPress)"
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
      "Harmonized and centralized data",
      "Worked as part of a team"
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
    category: "Application Development",
    skills: [
      "Java (Spring Boot/Maven/Gradle)",
      "Jakarta EE/Payara",
      "Python",
      "Android & Security",
      "Secure Distributed Systems",
      "API Documentation & Testing with Swagger"
    ]
  },
  {
    category: "Network & Security Management",
    skills: [
      "Firewall",
      "VPN (IPsec + SSL)",
      "SSH",
      "Reverse Proxy",
      "Proxychains",
      "HIDS/HIPS",
      "pfSense",
      "Wireshark"
    ]
  },
  {
    category: "Ethical Hacking",
    skills: [
      "Malware Analysis",
      "Kali Linux/Parrot OS",
      "OSINT",
      "Metasploit",
      "SQL Injection",
      "Phishing",
      "Nmap",
      "Web Scraping"
    ]
  },
  {
    category: "Databases & Security",
    skills: [
      "SQL: MySQL, MariaDB, Oracle",
      "NoSQL: MongoDB"
    ]
  },
  {
    category: "Web Development",
    skills: [
      "HTML/CSS/SCSS",
      "JavaScript",
      "Node.js"
    ]
  },
  {
    category: "Risk Analysis",
    skills: [
      "Governance, Risk & Compliance (GRC)",
      "E-BIOS RISK MANAGER",
      "Lynis & DebScan (Linux Security)",
      "CyberEdu: Modules 1, 2, 3 & 4"
    ]
  },
  {
    category: "Project Management",
    skills: [
      "DevSecOps / DevOps",
      "Ansible (Configuration Automation)",
      "Jenkins (CI/CD)",
      "Scrum",
      "Kanban",
      "JIRA"
    ]
  },
  {
    category: "Operating Systems",
    skills: [
      "Windows - Linux",
      "Windows Server / Wallix",
      "Docker / Kubernetes"
    ]
  }
];

export const languages = [
  { name: "French", level: "Delf B2" },
  { name: "Arabic", level: "Native Language" },
  { name: "English", level: "TOEIC, ALC Certificate" }
];

export const interests = [
  { name: "Root-Me", detail: "Profile: Youbey" },
  { name: "Football", detail: "Position: Midfielder" },
  { name: "Muy Thaï", detail: "Self-Taught" }
];
