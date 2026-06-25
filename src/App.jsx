import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import profilePic from "./assets/profile.jpg";
import dashboardImg from "./assets/projects/dashboard.png";
import sqliImg from "./assets/projects/sqli-lab.png";
import adminImg from "./assets/projects/admin-dashboard-overview.png";
import leaderboardImg from "./assets/projects/leaderboard.png";

import {
  FaGithub,
  FaLinkedin,
  FaUserSecret,
  FaDownload,
  FaShieldAlt,
  FaDatabase,
  FaUserLock,
  FaTrophy,
  FaUserCog,
  FaDocker,
  FaBug,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaTerminal,
  FaNetworkWired,
  FaAward,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Cybersecurity Researcher",
    "Web Application Security",
    "Penetration Tester",
    "Security Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      title: "Web Security",
      icon: <FaShieldAlt />,
      text: "SQL Injection, XSS, SSRF, CSRF, JWT, IDOR, authentication testing, and secure coding concepts.",
    },
    {
      title: "Security Tools",
      icon: <FaTerminal />,
      text: "Burp Suite, Nmap, Gobuster, Hydra, SQLMap, Nikto, John The Ripper, and Linux-based testing workflows.",
    },
    {
      title: "Development",
      icon: <FaCode />,
      text: "HTML, CSS, JavaScript, React, Node.js, Express.js, PostgreSQL, Git, Docker, and API development.",
    },
  ];

  const labs = [
    "SQL Injection",
    "Stored XSS",
    "IDOR",
    "JWT Privilege Escalation",
    "Path Traversal",
    "CSRF",
    "Command Injection",
    "SSRF",
    "File Upload Vulnerabilities",
  ];

  const screenshots = [
    { title: "Dashboard", image: dashboardImg },
    { title: "SQL Injection Lab", image: sqliImg },
    { title: "Admin Dashboard", image: adminImg },
    { title: "Leaderboard", image: leaderboardImg },
  ];

  const navLinks = ["about", "skills", "projects", "certifications", "contact"];

  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/70 border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#" className="text-2xl font-black text-cyan-400">
            ALBIN<span className="text-white">.</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize hover:text-cyan-400 transition"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className="block capitalize hover:text-cyan-400"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="min-h-[82vh] flex items-center justify-center px-6 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl"
        >
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin [animation-duration:8s]"></div>

              <img
                src={profilePic}
                alt="Albin K Anish"
                className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-black z-10 shadow-[0_0_45px_rgba(34,211,238,0.45)]"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500 text-cyan-300 mb-6 bg-cyan-500/10">
            <FaUserSecret />
            Cybersecurity Researcher
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-5 tracking-tight">
            ALBIN K ANISH
          </h1>

          <div className="text-xl md:text-2xl mb-6 h-10 flex justify-center items-center">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-300 font-medium"
            >
              {roles[currentRole]}
            </motion.p>
          </div>

          <p className="text-gray-400 text-lg leading-8 mb-8 max-w-3xl mx-auto">
            I build practical cybersecurity projects and continuously improve my
            skills in web application security, penetration testing, Linux,
            networking, and secure system design.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/AlbinKAnish"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-lg shadow-cyan-500/20"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/albin-k-anish"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://tryhackme.com/p/albiinn2025"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 hover:bg-green-600 px-6 py-3 rounded-xl transition"
            >
              TryHackMe
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl flex items-center gap-2 transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["1+", "Major Project"],
            ["9+", "Vulnerability Labs"],
            ["Full-Stack", "Project Experience"],
            ["Hands-on", "Cybersecurity Learning"],
          ].map(([number, label]) => (
            <motion.div
              key={label}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition"
            >
              <h3 className="text-3xl font-bold text-cyan-400">{number}</h3>
              <p className="text-gray-400 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            [
              "Who I Am",
              "I am a BCA graduate and Advanced Diploma in Information Security student with a strong passion for cybersecurity. I focus on practical learning, real-world labs, and building security-focused projects.",
            ],
            [
              "What I Focus On",
              "My main focus areas include Web Security, Linux, Networking, Active Directory basics, Security Operations, vulnerability analysis, and secure development practices.",
            ],
          ].map(([title, text]) => (
            <motion.div
              key={title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900/90 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-500 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-300 leading-8">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900/90 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-500 transition"
            >
              <div className="text-cyan-400 text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-400 leading-7">{skill.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Featured Project
        </h2>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-zinc-900/90 rounded-3xl border border-cyan-500/40 p-10 shadow-2xl shadow-cyan-500/10"
        >
          <span className="text-cyan-400 font-semibold">
            Full-Stack Cybersecurity Training Platform
          </span>

          <h3 className="text-5xl font-black mt-3 mb-6">VulnLab</h3>

          <p className="text-gray-300 leading-8 mb-10 text-lg">
            VulnLab is a full-stack web application that combines cybersecurity
            training with modern web development. It provides interactive labs
            where users can learn how vulnerabilities work, understand their
            impact, and practice secure coding concepts.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              [
                <FaLaptopCode />,
                "Built From Scratch",
                "Designed as a custom full-stack cybersecurity learning platform.",
              ],
              [
                <FaShieldAlt />,
                "Security Focused",
                "Includes practical vulnerable labs and secure development concepts.",
              ],
              [
                <FaDocker />,
                "Deployment Ready",
                "Includes PostgreSQL integration and Docker deployment support.",
              ],
            ].map(([icon, title, text]) => (
              <motion.div
                key={title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-black/40 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500 transition"
              >
                <div className="text-cyan-400 text-3xl mb-4">{icon}</div>
                <h4 className="font-bold mb-2">{title}</h4>
                <p className="text-gray-400">{text}</p>
              </motion.div>
            ))}
          </div>

          <h4 className="text-2xl font-semibold mb-6 text-cyan-400">
            Project Screenshots
          </h4>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {screenshots.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-black/40 p-4 rounded-2xl border border-zinc-800 hover:border-cyan-500 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl w-full h-56 object-cover border border-zinc-800 group-hover:scale-[1.02] transition duration-300"
                />

                <p className="text-center text-gray-300 mt-4 font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          <h4 className="text-2xl font-semibold mb-6 text-cyan-400">
            Key Features
          </h4>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              [<FaUserLock />, "User & Admin Authentication"],
              [<FaTrophy />, "Progress Tracking & XP System"],
              [<FaTrophy />, "Leaderboards & User Profiles"],
              [<FaUserCog />, "Admin Dashboard & Audit Logging"],
              [<FaShieldAlt />, "Role-Based Access Control"],
              [<FaDatabase />, "PostgreSQL Database Integration"],
              [<FaDocker />, "Docker Deployment Support"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400">{icon}</span>
                {text}
              </div>
            ))}
          </div>

          <h4 className="text-2xl font-semibold mb-6 text-cyan-400">
            Included Vulnerability Labs
          </h4>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {labs.map((lab) => (
              <div key={lab} className="flex items-center gap-3 text-gray-300">
                <FaBug className="text-red-400" />
                {lab}
              </div>
            ))}
          </div>

          <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
            Technology Stack
          </h4>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "JWT",
              "bcrypt",
              "Helmet",
              "express-rate-limit",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-200 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/AlbinKAnish/VulnLab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl transition shadow-lg shadow-cyan-500/20"
          >
            View VulnLab Repository <FaExternalLinkAlt />
          </a>
        </motion.div>
      </section>

      <section id="certifications" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Certifications & Learning
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              <FaAward />,
              "Advanced Diploma in Information Security",
              "Cybersecurity training focused on practical security concepts and hands-on learning.",
            ],
            [
              <FaUserSecret />,
              "TryHackMe Practice",
              "Continuous hands-on learning through guided cybersecurity rooms and practical challenges.",
            ],
            [
              <FaNetworkWired />,
              "Security Lab Practice",
              "Practical exposure to networking, Linux, web security, SIEM basics, and vulnerability testing.",
            ],
          ].map(([icon, title, text]) => (
            <motion.div
              key={title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-zinc-900/90 p-8 rounded-3xl border border-zinc-800 hover:border-cyan-500 transition"
            >
              <div className="text-cyan-400 text-3xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 leading-7">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-zinc-900/90 p-10 rounded-3xl border border-zinc-800">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Let's Connect
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            I'm interested in cybersecurity opportunities, internships,
            collaboration, and professional networking.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <a
              href="mailto:albinkanish9072@gmail.com"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaEnvelope className="text-cyan-400" />
              albinkanish9072@gmail.com
            </a>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              Pathanamthitta, Kerala, India
            </p>

            <a
              href="https://www.linkedin.com/in/albin-k-anish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaLinkedin className="text-cyan-400" />
              linkedin.com/in/albin-k-anish
            </a>

            <a
              href="https://github.com/AlbinKAnish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400 transition"
            >
              <FaGithub className="text-cyan-400" />
              github.com/AlbinKAnish
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500 px-6">
        Securing systems through continuous learning and hands-on research.
        <br />
        © 2026 ALBIN K ANISH • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;