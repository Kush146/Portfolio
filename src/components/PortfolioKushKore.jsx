import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  Sun,
  Moon,
  Boxes,
  Download,
  Twitter,
} from "lucide-react";

const PROFILE = {
  name: "Kush Kore",
  headline: "Full-Stack Developer · React.js · Node.js · AI & Mobile App Development",
  location: "Mumbai, Maharashtra, India",
  phone: "+91 8788397057",
  email: "kushkore.work@gmail.com",
  github: "https://github.com/Kush146",
  linkedin: "https://www.linkedin.com/in/kushkore",
  x: "https://x.com/korekush04",
  summary:
    "Enthusiastic full-stack developer building scalable web & mobile apps with React, Node.js, MongoDB, and React Native. Hands-on with CI/CD, Firebase, OpenAI integrations, and performance-first API design.",
};

const PROFILE_PHOTO = "/profile.png";

const EXPERIENCES = [
  {
    company: "Ablespace",
    role: "Full-Stack Developer",
    period: "Nov 2025 – Present",
    bullets: [
      "Delivering end-to-end features across Next.js/React, Node.js, and MongoDB.",
      "Collaborating with product & design to ship accessible, responsive UIs.",
      "Owning CI/CD workflows and cloud deployments.",
    ],
  },
  {
    company: "Labmentix",
    role: "Web Development Intern",
    period: "Sep 2025 – Nov 2025 · Remote",
    bullets: [
      "Engineered an AI image classification model (TensorFlow/Keras), +15% CIFAR-10 accuracy.",
      "Built & deployed full-stack and cross-platform chat apps (React, Node.js, React Native, Flutter, MongoDB).",
      "Integrated Firebase Auth, Firestore & JWT; optimized API performance.",
      "Streamlined deployments via Vercel/Render/Firebase with CI/CD (–20% deployment time).",
      "Strengthened quality with unit & integration tests (–30% bugs).",
    ],
  },
  {
    company: "Acmegrade",
    role: "Artificial Intelligence Intern",
    period: "Jul 2024 – Sep 2024 · Remote",
    bullets: [
      "Constructed & trained CNNs for computer vision in Python/TensorFlow (CIFAR-10 +12%).",
      "Analyzed real-time datasets in Jupyter, achieving ~95% model precision with better preprocessing & augmentation.",
    ],
  },
];

const PROJECTS = [
  {
    title: "GreenCart · Full-Stack E-commerce",
    image: "/project-greencart.png",
    tags: ["Full-Stack", "React", "Next.js", "Node.js", "MongoDB"],
    description: "JWT auth, product listings, shopping cart; REST APIs with Express; responsive UI.",
    live: "https://greencart-client-lyart.vercel.app/",
    code: "https://github.com/Kush146/Greencart-Fullstack",
  },
  {
    title: "KUKISHOW · Movie Ticket Booking",
    image: "/project-kukishow.png",
    tags: ["Full-Stack", "React", "Node.js", "MongoDB"],
    description: "JWT auth and booking management; Express APIs; high-performance interface.",
    live: "https://movie-ticket-fullstack-3tx1.vercel.app/",
    code: "https://github.com/Kush146/MovieTicket-Fullstack",
  },
  {
    title: "QuickChat · Real-time Chat",
    image: "/project-quickchat.png",
    tags: ["Full-Stack", "Next.js", "WebSockets", "MongoDB"],
    description: "JWT auth and WebSocket messaging; responsive & interactive; Vercel deploy.",
    live: "https://quickchat-fullstack-client.vercel.app/",
    code: "https://github.com/Kush146/Quickchat-Fullstack",
  },
  {
    title: "Go Cart · E-commerce Platform",
    image: "/project-gocart.png",
    tags: ["Full-Stack", "Next.js", "PostgreSQL", "Stripe"],
    description: "Clerk auth, Stripe payments, Prisma ORM; serverless workflows; Vercel deploy.",
    live: "https://go-cart-ecommerce-three.vercel.app/",
    code: "https://github.com/Kush146/GoCart-ecommerce",
  },
  { title: "Realtime Chat (Expo)", image: "/project-realtime-expo.png", tags: ["Mobile", "React Native", "Expo"], description: "Cross-platform chat with Expo EAS.", code: "https://github.com/Kush146/realtime-chat-expo" },
  { title: "Smart To-Do List (AI)", image: "/project-smart-todo.png", tags: ["AI", "Full-Stack"], description: "Intelligent task management with AI assistance.", code: "https://github.com/Kush146/smart-todo-list-ai" },
  { title: "WhatsApp Web Clone", image: "/project-whatsapp-clone.png", tags: ["Full-Stack"], description: "Messaging UI/UX clone for learning purposes.", code: "https://github.com/Kush146/whatsapp-web-clone" },
];

const SKILLS = [
  { title: "Programming & Scripting", items: ["JavaScript","TypeScript","Java","Python","C","C++","Dart","SQL","HTML","CSS","Bash/Shell","JSON"] },
  { title: "Frontend", items: ["React.js","Next.js","React Router","Redux","Tailwind CSS","Bootstrap","Material-UI","Responsive Design","Mobile UI/UX","Cross-Browser Compatibility","REST APIs","GraphQL","OpenAPI/Swagger"] },
  { title: "Backend & APIs", items: ["Node.js","Express.js","JWT","OAuth2","API Design","Postman"] },
  { title: "Databases & Storage", items: ["MongoDB","PostgreSQL","MySQL","SQLite","Redis","Firebase/Firestore"] },
  { title: "Mobile & Cross-Platform", items: ["React Native","Expo","Flutter","Android APK Packaging","Push Notifications","Cross-Platform Integration"] },
  { title: "DevOps, Cloud & Testing", items: ["Git/GitHub/GitLab","Linux","Docker","Kubernetes","CI/CD (GitHub Actions)","Vercel","Render","AWS","NGROK","Jest","React Testing Library","PyTest","Cypress"] },
  { title: "Data, AI & ML", items: ["Machine Learning","Data Analysis","Computer Vision","TensorFlow","Keras","Scikit-learn","PyTorch","OpenCV","Pandas","NumPy","Matplotlib","Jupyter","MLflow"] },
];

const CERTS = [
  { name: "AI Internship – Acmegrade", date: "Sep 2024" },
  { name: "Data Analytics Job Simulation – Deloitte", date: "Jun 2025" },
  { name: "GenAI Data Analytics Program – Tata", date: "Jun 2025" },
  { name: "NCAT Examination – Naukri.com", date: "May 2025" },
  { name: "Python Skill Certification – One Roadmap", date: "Jun 2025" },
  { name: "AI Engineering Certification – One Roadmap", date: "Jun 2025" },
];

const ACHIEVEMENTS = [
  "Top AI Project Award – Acmegrade Internship (2024)",
  "Captain, Amity Pro Badminton League – Led team to 1st place",
  "Organized multiple technical & cultural university events",
];

const LANGUAGES = [
  { name: "English", level: "Proficient" },
  { name: "Hindi", level: "Native" },
  { name: "Marathi", level: "Native" },
  { name: "German", level: "Intermediate" },
];

const EDUCATION = [
  { degree: "B.Tech, Computer Science & Engineering", school: "Amity University, Mumbai", period: "Jul 2021 – Jun 2025", extras: "CGPA: 7.9/10" },
  { degree: "12th", school: "Atomic Energy Central School-1, Tarapur", period: "2020 – 2021", extras: "HSC: 86%" },
];

/* ------- Reusable UI ------- */
const Section = ({ id, title, emoji, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-8 flex items-center gap-3"
    >
      <span className="text-xl sm:text-2xl">{emoji}</span>
      {title}
    </motion.h2>
    {children}
  </section>
);

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`group rounded-2xl border border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-soft hover:shadow-xl transform-gpu transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/30 dark:bg-white/5 px-3 py-1 text-xs font-medium tracking-wide">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600/90 to-fuchsia-600/90 text-white px-3 py-1 text-xs font-semibold shadow">
    {children}
  </span>
);

/* Theme hook */
const useTheme = () => {
  const [theme, setTheme] = React.useState(
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark"
  );
  React.useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, setTheme };
};

/* Animated orbs */
const GradientOrbs = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      className="absolute -top-24 -left-32 h-72 w-72 rounded-full blur-3xl opacity-30 bg-fuchsia-500"
      animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
      transition={{ repeat: Infinity, duration: 12 }}
    />
    <motion.div
      className="absolute top-1/3 -right-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-indigo-500"
      animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 14 }}
    />
    <motion.div
      className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-30 bg-emerald-500"
      animate={{ x: [0, 10, -10, 0], y: [0, -15, 15, 0] }}
      transition={{ repeat: Infinity, duration: 16 }}
    />
  </div>
);

/* TopBar */
const TopBar = ({ onToggleTheme, isDark }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certs", label: "Certs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30">
      <motion.div style={{ scaleX }} className="h-1 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-500" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-extrabold tracking-tight text-lg sm:text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500">Kush</span>
          <span className="opacity-80">·Kore</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium fancy-underline">
              {n.label}
            </a>
          ))}
          <a
            href="/resume/KushKoreResume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
            download
          >
            <Download className="h-4 w-4" /> Résumé
          </a>
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 hover:bg-white/20"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </div>
  );
};

/* Hero */
const Hero = () => (
  <header id="home" className="relative">
    <GradientOrbs />
    <div className="mx-auto max-w-6xl px-4 pt-16 sm:pt-24">
      <div className="grid items-center gap-10 sm:gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <Pill>Full-Stack Developer</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500">Kush</span>.
            <br />
            I build fast, delightful apps.
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-90 max-w-2xl">
            {PROFILE.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={PROFILE.x}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              <Twitter className="h-4 w-4" /> X
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm opacity-90">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {PROFILE.location}</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {PROFILE.phone}</span>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 fancy-underline">
              <Mail className="h-4 w-4" /> {PROFILE.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-2"
        >
          <Card className="p-6">
            <div className="aspect-square w-full overflow-hidden rounded-xl ring-1 ring-white/10">
              <img
                src={PROFILE_PHOTO}
                alt="Kush Kore"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  </header>
);

/* Experience */
const Experience = () => (
  <Section id="experience" title="Experience" emoji={<Briefcase />}>
    <div className="grid gap-6">
      {EXPERIENCES.map((exp, i) => (
        <motion.div key={exp.company + i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{exp.role} · {exp.company}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm opacity-80">
                  <Calendar className="h-4 w-4" /> {exp.period}
                </div>
              </div>
            </div>
            <ul className="mt-4 grid gap-2 text-sm sm:text-[15px]">
              {exp.bullets.map((b, j) => (<li key={j} className="flex gap-2"><span className="mt-0.5">•</span> {b}</li>))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* Projects */
const Projects = () => {
  const allTags = React.useMemo(() => {
    const set = new Set();
    PROJECTS.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);
  const [filter, setFilter] = React.useState("All");
  const filtered = React.useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags?.includes(filter))), [filter]);

  return (
    <Section id="projects" title="Projects" emoji={<Boxes />}>
      <div className="mb-6 flex flex-wrap gap-2">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
              filter === t ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white border-transparent" : "bg-white/5 border-white/15 hover:bg-white/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
            <Card className="p-5 h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden rounded-lg ring-1 ring-white/10 bg-black/10">
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/20 to-emerald-600/20" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm opacity-85">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags?.map((t) => (<Tag key={t}>{t}</Tag>))}</div>
              <div className="mt-4 flex gap-3 mt-auto">
                {p.live && (
                  <a href={p.live} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold underline">
                    Live <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold underline">
                    Code <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

/* Skills */
const Skills = () => (
  <Section id="skills" title="Skills" emoji={<Star />}>
    <div className="grid md:grid-cols-2 gap-6">
      {SKILLS.map((group, i) => (
        <motion.div key={group.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
          <Card className="p-5">
            <h4 className="text-base sm:text-lg font-bold mb-3">{group.title}</h4>
            <div className="flex flex-wrap gap-2">{group.items.map((item) => (<Tag key={item}>{item}</Tag>))}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* Education */
const Education = () => (
  <Section id="education" title="Education" emoji={<GraduationCap />}>
    <div className="grid gap-6">
      {EDUCATION.map((e, i) => (
        <motion.div key={e.degree} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
          <Card className="p-5">
            <h4 className="text-lg font-bold">{e.degree}</h4>
            <div className="mt-1 text-sm opacity-85">{e.school}</div>
            <div className="mt-1 text-sm opacity-75">{e.period}</div>
            {e.extras && <div className="mt-2 text-sm"><Pill>{e.extras}</Pill></div>}
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* Certs */
const Certs = () => (
  <Section id="certs" title="Certifications & Achievements" emoji={<Award />}>
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-5">
        <h4 className="text-base sm:text-lg font-bold mb-3">Certifications</h4>
        <ul className="grid gap-2 text-sm">
          {CERTS.map((c, i) => (
            <li key={i} className="flex items-center gap-2">
              <Tag>{c.date}</Tag><span>{c.name}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-5">
        <h4 className="text-base sm:text-lg font-bold mb-3">Achievements</h4>
        <ul className="grid gap-2 text-sm">
          {ACHIEVEMENTS.map((a, i) => (<li key={i} className="flex gap-2">• {a}</li>))}
        </ul>
      </Card>
    </div>
  </Section>
);

/* Contact */
const Contact = () => (
  <Section id="contact" title="Contact" emoji={<Mail />}>
    <Card className="p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold">Let’s build something great</h3>
          <p className="mt-2 text-sm opacity-85">
            I’m currently open to full-stack roles, internships, and freelance opportunities. The fastest ways to reach me are email and LinkedIn.
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 underline"><Mail className="h-4 w-4" /> {PROFILE.email}</a>
            <a href={PROFILE.linkedin} target="_blank" className="inline-flex items-center gap-2 underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={PROFILE.x} target="_blank" className="inline-flex items-center gap-2 underline"><Twitter className="h-4 w-4" /> X</a>
            <a href={PROFILE.github} target="_blank" className="inline-flex items-center gap-2 underline"><Github className="h-4 w-4" /> GitHub</a>
            <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {PROFILE.phone}</div>
            <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {PROFILE.location}</div>
          </div>
        </div>
        <div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Connect this form to your backend or Formspree to receive messages."); }} className="grid gap-3">
            <input required placeholder="Your name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required type="email" placeholder="Your email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <textarea required placeholder="Tell me about your project" className="min-h-[120px] rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-3 font-semibold text-white shadow">
              Send
            </button>
          </form>
        </div>
      </div>
    </Card>
    <div className="mt-6 text-sm opacity-80">
      Languages: {LANGUAGES.map((l) => `${l.name} (${l.level})`).join(" · ")}
    </div>
  </Section>
);

/* Footer */
const Footer = () => (
  <footer className="mt-12 border-t border-white/10 py-8 text-sm opacity-80">
    <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div>© {new Date().getFullYear()} Kush Kore. All rights reserved.</div>
      <div className="flex items-center gap-3">
        <a href={PROFILE.github} target="_blank" className="inline-flex items-center gap-1 underline"><Github className="h-4 w-4" /> GitHub</a>
        <a href={PROFILE.linkedin} target="_blank" className="inline-flex items-center gap-1 underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        <a href={PROFILE.x} target="_blank" className="inline-flex items-center gap-1 underline"><Twitter className="h-4 w-4" /> X</a>
      </div>
    </div>
  </footer>
);

export default function PortfolioKushKore() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative min-h-screen bg-white text-gray-900 dark:bg-ink dark:text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-20 dark:opacity-10" />
      <TopBar onToggleTheme={() => setTheme(isDark ? "light" : "dark")} isDark={isDark} />
      <header id="home" className="relative">
        <GradientOrbs />
      </header>
      <Hero />
      <div className="mx-auto max-w-6xl px-4">
        <Section id="about" title="About" emoji={<span>👋</span>}>
          <Card className="p-6">
            <p className="text-sm sm:text-[15px] leading-7 opacity-90">
              I’m a full-stack developer focused on crafting fast, accessible, and resilient applications. I love diving into performance profiling, clean component architecture, and pragmatic testing.
              Recently, I’ve been working at <strong>Ablespace</strong> on end-to-end feature delivery and at <strong>Labmentix</strong> building AI-powered experiences and chat platforms.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>React / Next.js</Pill>
              <Pill>Node.js / Express</Pill>
              <Pill>MongoDB / PostgreSQL</Pill>
              <Pill>React Native / Expo</Pill>
              <Pill>TensorFlow / Keras</Pill>
              <Pill>CI/CD · Vercel/Render</Pill>
            </div>
          </Card>
        </Section>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
