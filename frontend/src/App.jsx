import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, X, Menu } from "lucide-react";
import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";
import { experience } from "./data/experience.js";
import workspaceArt from "./assets/workspace_scene.jpg";
import chairArt from "./assets/chair_foreground.png";
import skillsImage from "./assets/skills/skill_image.png";
import contactImage from "./assets/skills/contact form.png";

function Nav({ open }) {
  const [menu, setMenu] = useState(false);
  const links = [
    ["work", "WORK"],
    ["about", "ABOUT"],
    ["skills", "SKILLS"],
    ["experience", "EXPERIENCE"],
    ["contact", "CONTACT"],
  ];
  return (
    <header className="nav">
      <a
        className="brand"
        href="#"
        onClick={(event) => {
          event.preventDefault();
          open(null);
        }}
      >
        VINAYAKA M
      </a>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenu(!menu)}
      >
        <Menu size={19} />
      </button>
      <nav
        className={menu ? "navlinks show" : "navlinks"}
        aria-label="Main navigation"
      >
        {links.map(([id, label]) => (
          <button
            key={id}
            onClick={() => {
              open(id);
              setMenu(false);
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function ContactPage() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (!values.message.trim()) nextErrors.message = "Please add a message.";
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) return;
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Contact submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  const form = (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-fields">
        <label className="contact-field">
          NAME
          <input
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <small id="contact-name-error" className="field-error">
              {errors.name}
            </small>
          )}
        </label>
        <label className="contact-field">
          EMAIL
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <small id="contact-email-error" className="field-error">
              {errors.email}
            </small>
          )}
        </label>
        <label className="contact-field">
          SUBJECT
          <input
            name="subject"
            placeholder="Project / Collaboration / Opportunity"
          />
        </label>
        <label className="contact-field">
          MESSAGE
          <textarea
            name="message"
            rows="3"
            placeholder="Tell me a little about your idea..."
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
          />
          {errors.message && (
            <small id="contact-message-error" className="field-error">
              {errors.message}
            </small>
          )}
        </label>
      </div>
      <button className="contact-submit" type="submit" disabled={submitting}>
        {submitting ? "SENDING…" : "SEND MESSAGE"} <ArrowRight size={14} />
      </button>
      <p
        className={`contact-status ${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "success"
          ? "Message sent successfully. I'll get back to you soon."
          : status === "error"
            ? "Something went wrong. Please try again."
            : ""}
      </p>
    </form>
  );

  return (
    <div className="contact-content">
      <label>OPEN A CONVERSATION</label>
      <h2 className="contact-title">
        LET’S BUILD
        <br />
        SOMETHING.
      </h2>
      <p className="contact-intro">
        Have an idea, project, or opportunity in mind? Let’s talk and turn it
        into something meaningful.
      </p>
      <div className="contact-mobile-art">
        <EditorialVisual type="contact" />
      </div>
      {form}
      <div className="contact-links">
        <div>
          <span>EMAIL</span>
          <span className="contact-email-unavailable">
            V11vinayak@gmail.com
          </span>
        </div>
        <div>
          <span>GITHUB</span>
          <a
            href="https://github.com/vinayaka-112006"
            target="_blank"
            rel="noreferrer"
          >
            vinayaka-112006 ↗
          </a>
        </div>
        <div>
          <span>LINKEDIN</span>
          <a
            href="https://www.linkedin.com/in/vinayaka-m-913b043b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile ↗
          </a>
        </div>
        <div>
          <span>CODEFORCES</span>
          <a
            href="https://codeforces.com/profile/vinayak__11"
            target="_blank"
            rel="noreferrer"
          >
            vinayak__11 ↗
          </a>
        </div>
      </div>
      <p className="contact-availability">
        <b>OPEN TO</b> · Collaborations · Opportunities
      </p>
    </div>
  );
}

function EditorialVisual({ type, project, page }) {
  if (type === "about")
    return (
      <div className="editorial-visual author-visual">
        <span className="visual-index">AUTHOR / 01</span>
        <b>VM</b>
        <span className="visual-caption">
          AI ENGINEERING
          <br />
          FULL STACK DEVELOPMENT
        </span>
      </div>
    );
  if (type === "skills")
    return (
      <div className="editorial-visual skills-visual image-visual">
        <img
          className="section-image"
          src={skillsImage}
          alt="Skills and technology"
        />
      </div>
    );
  if (type === "work")
    return (
      <div className="editorial-visual project-visual">
        <span className="visual-index">
          PROJECT / {String(page + 1).padStart(2, "0")}
        </span>
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} project preview`}
        />
        <span className="visual-caption">
          SELECTED WORK
          <br />
          {project.title}
        </span>
      </div>
    );
  if (type === "experience")
    return (
      <div className="editorial-visual experience-visual">
        <span className="visual-index">EXPERIENCE / 03</span>
        <b>BEL</b>
        <span className="visual-caption">{experience[0].organization}</span>
      </div>
    );
  return (
    <div className="editorial-visual contact-visual image-visual">
      <img
        className="section-image"
        src={contactImage}
        alt="Contact and collaboration illustration"
      />
    </div>
  );
}

const chapters = [
  { type: "contents" },
  { type: "about" },
  { type: "skills" },
  ...projects.map((project, projectIndex) => ({ type: "work", projectIndex })),
  { type: "experience" },
  { type: "contact" },
];
const chapterNames = {
  about: "ABOUT",
  skills: "SKILLS",
  work: "WORK",
  experience: "EXPERIENCE",
  contact: "CONTACT",
};

function Book({ type, phase, close }) {
  const firstPage =
    type === "work"
      ? chapters.findIndex((entry) => entry.type === "work")
      : Math.max(
          0,
          chapters.findIndex((entry) => entry.type === type),
        );
  const [page, setPage] = useState(firstPage);
  const [pageMotion, setPageMotion] = useState("");
  useEffect(() => {
    setPage(firstPage);
    setPageMotion("");
  }, [type, firstPage]);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") turn(1);
      if (event.key === "ArrowLeft") turn(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, type, page]);

  const turn = (direction) => {
    const next = Math.max(0, Math.min(page + direction, chapters.length - 1));
    if (next === page) return;
    setPageMotion(direction > 0 ? "forward" : "backward");
    setPage(next);
    window.setTimeout(() => setPageMotion(""), 720);
  };
  const navigate = (target) => {
    if (target === page || phase !== "settled") return;
    setPageMotion(target > page ? "forward" : "backward");
    setPage(target);
    window.setTimeout(() => setPageMotion(""), 720);
  };
  const chapter = chapters[page];
  const section = chapter.type;
  const projectIndex = chapter.projectIndex || 0;
  const project = projects[Math.max(0, projectIndex)] || projects[0];
  const isWork = section === "work";
  const isContents = section === "contents";
  const title = isContents
    ? "THE PORTFOLIO"
    : section === "about"
      ? "ABOUT THE AUTHOR"
      : section === "skills"
        ? "SKILLS & PRACTICE"
        : isWork
          ? project.title
          : section === "experience"
            ? experience[0].company.toUpperCase()
            : "LET’S BUILD SOMETHING THOUGHTFUL";
  const sectionLabel = isContents
    ? "TABLE OF CONTENTS"
    : section === "about"
      ? "A LITTLE ABOUT ME"
      : section === "skills"
        ? "TOOLS & TECHNOLOGIES"
        : isWork
          ? `PORTFOLIO / ${String(projectIndex + 1).padStart(2, "0")}`
          : section === "experience"
            ? "PROFESSIONAL EXPERIENCE"
            : "OPEN A CONVERSATION";
  const chapterType = section === "contents" ? "about" : section;

  return (
    <div
      className={`overlay book-overlay phase-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} portfolio book`}
    >
      <button className="close book-close" onClick={close}>
        <X size={17} /> CLOSE
      </button>
      <section
        className={`book physical-book ${pageMotion ? `page-turn-${pageMotion}` : ""}`}
      >
        <div className="book-cover-back" aria-hidden="true" />
        <div className="book-page-stack" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <i key={index} style={{ "--sheet": index }} />
          ))}
        </div>
        <article className="paper left">
          {isContents ? (
            <div className="opening-statement">
              <b>
                " Every system begins with an idea ,
                <br />
                Every idea finds meaning when it is built. "
              </b>
            </div>
          ) : section === "contact" ? (
            <div className="contact-left-art">
              <EditorialVisual type="contact" />
            </div>
          ) : (
            <EditorialVisual
              type={chapterType}
              project={project}
              page={projectIndex}
            />
          )}
          <label>
            {isContents
              ? "A NOTE BEFORE WE BEGIN"
              : `${chapterType.toUpperCase()} · ${String(page).padStart(2, "0")}`}
          </label>
          {isContents ? (
            <>
              {/* <h2>VINAYAKA M</h2>
              <p className="role">AI Engineer / Full Stack Developer</p> */}
              <p className="note">
                A portfolio of systems, software, and ideas made tangible.
              </p>
            </>
          ) : section === "about" ? (
            <>
              <h2>VINAYAKA M</h2>
              {/* <p className="role">AI Engineer / Full Stack Developer</p> */}
              <p className="note">
                A curious builder exploring intelligent systems and thoughtful
                digital experiences.
              </p>
            </>
          ) : isWork ? (
            <>
              <h2>{project.title}</h2>
              <p className="note project-editorial-note">
                {project.shortDescription}
              </p>
            </>
          ) : section === "skills" ? (
            <>
              <h2>AREAS OF FOCUS</h2>
              <p className="note">
                Building useful software across intelligent systems and full
                stack applications.
              </p>
            </>
          ) : section === "experience" ? (
            <>
              <h2>{experience[0].role}</h2>
              <p className="note">{experience[0].organization}</p>
            </>
          ) : (
            <>
              <h2>LET’S BUILD SOMETHING</h2>
              <p className="note">
                For collaboration, ideas, or a simple hello.
              </p>
            </>
          )}
        </article>
        <article className="paper right">
          <div
            className={`mobile-feature ${section === "contact" ? "contact-desktop-art" : ""}`}
            aria-hidden="true"
          >
            {isContents ? (
              <div className="opening-statement">
                <span>VINAYAKA M.</span>
                <b>
                  Every system begins with an idea. Every idea finds meaning
                  when it is built.
                </b>
                <small>AI ENGINEER · FULL STACK DEVELOPER</small>
              </div>
            ) : (
              <EditorialVisual
                type={chapterType}
                project={project}
                page={projectIndex}
              />
            )}
          </div>
          <label>{sectionLabel}</label>
          <h2>{isContents ? "IN THIS BOOK" : title}</h2>
          {isContents ? (
            <nav className="contents-list" aria-label="Book contents">
              {["about", "skills", "work", "experience", "contact"].map(
                (key, index) => (
                  <button
                    key={key}
                    onClick={() =>
                      navigate(
                        chapters.findIndex((entry) => entry.type === key),
                      )
                    }
                  >
                    <span>{chapterNames[key]}</span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </button>
                ),
              )}
            </nav>
          ) : section === "about" ? (
            <>
              <p>
                AI Engineer, Full-Stack Developer, and open-source contributor
                with experience across machine learning, deep learning,
                generative AI, and modern web development. I build AI-powered
                full-stack applications and LLM/RAG systems, combining
                intelligent systems with practical software engineering.
              </p>
              <p>
                I am pursuing a Bachelor of Engineering in Computer Science
                &amp; Engineering at Sir M. Visvesvaraya Institute of
                Technology, Bangalore, with a CGPA of 9+/10. My work spans
                AI/ML, LLM applications, RAG systems, agentic AI, and full-stack
                development.
              </p>
              <h3>FOCUS</h3>
              <p>
                AI Engineering · Full-Stack Development · Machine Learning ·
                Generative AI · LLM / RAG Systems · Agentic AI
              </p>
            </>
          ) : isWork ? (
            <>
              <p>{project.description}</p>
              <h3>TECHNOLOGY</h3>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <h3>FEATURES</h3>
              <ul>
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {(project.github || project.demo) && (
                <div className="links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      LIVE DEMO <ArrowRight size={13} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GITHUB <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              )}
            </>
          ) : section === "skills" ? (
            <div className="skill-groups">
              {skills.map((group) => (
                <section key={group.group}>
                  <h3>{group.group}</h3>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : section === "experience" ? (
            <>
              <p className="experience-role">{experience[0].role}</p>
              <p className="muted">{experience[0].location}</p>
              <h3>{experience[0].project}</h3>
              <p className="muted">{experience[0].projectContext}</p>
              <ul>
                {experience[0].points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          ) : section === "contact" ? (
            <ContactPage />
          ) : (
            <>
              <p>
                Contact details and profile links are not configured in the
                current portfolio content.
              </p>
              <h3>GET IN TOUCH</h3>
              <p className="muted">
                Add a preferred email address or profile links to complete this
                page.
              </p>
            </>
          )}
          <small className="page-num">
            {String(page * 2 + 2).padStart(2, "0")}
          </small>
        </article>
        <div className="book-spine" aria-hidden="true" />
        {phase === "turning" &&
          [0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`page-flip page-flip-${index}`}
              aria-hidden="true"
            >
              <span />
            </div>
          ))}
        {pageMotion && (
          <div
            className={`page-flip interactive-flip ${pageMotion}`}
            aria-hidden="true"
          >
            <span />
          </div>
        )}
        <div className="book-cover-front" aria-hidden="true" />
      </section>
      <div className="controls">
        <button
          disabled={page === 0 || phase !== "settled"}
          onClick={() => turn(-1)}
        >
          <ArrowLeft size={14} /> PREVIOUS
        </button>
        <span>
          {String(page + 1).padStart(2, "0")} /{" "}
          {String(chapters.length).padStart(2, "0")}
        </span>
        <button
          disabled={page === chapters.length - 1 || phase !== "settled"}
          onClick={() => turn(1)}
        >
          NEXT <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [book, setBook] = useState(null);
  const [phase, setPhase] = useState("settled");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [monitorHover, setMonitorHover] = useState(false);
  useEffect(() => {
    const onMouse = (event) =>
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 20,
        y: (event.clientY / window.innerHeight - 0.5) * 16,
      });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);
  useEffect(() => {
    document.body.style.overflow = book ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [book]);
  useEffect(() => {
    if (!book) return undefined;
    setPhase("pulling");
    const openTimer = window.setTimeout(() => setPhase("opening"), 380);
    const turnTimer = window.setTimeout(() => setPhase("turning"), 640);
    const settleTimer = window.setTimeout(() => setPhase("settled"), 1460);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(turnTimer);
      window.clearTimeout(settleTimer);
    };
  }, [book]);
  const closeBook = () => {
    setPhase("closing");
    window.setTimeout(() => setBook(null), 430);
  };
  const openBook = (type) => {
    if (!type) return;
    setBook(type);
  };

  return (
    <main className="shell">
      <Nav open={openBook} />
      <img
        className="foreground-chair-global"
        src={chairArt}
        alt=""
        aria-hidden="true"
      />
      <section className="hero">
        <div className="copy">
          <div className="kicker animate-kicker">
            <i /> PERSONAL DIGITAL WORKSPACE
          </div>
          <h1 className="animate-title">VINAYAKA M.</h1>
          <h2 className="animate-role">
            AI ENGINEER <b>+</b>
            <br />
            FULL STACK DEVELOPER
          </h2>
          <p className="animate-desc">
            Building intelligent systems and
            <br />
            thoughtful digital experiences.
          </p>
          <button
            className="explore animate-btn"
            onClick={() => openBook("contents")}
          >
            EXPLORE <ArrowDown size={14} />
          </button>
        </div>
        <div className="scene-wrap animate-scene">
          <div className="workspace-2d-root">
            <div
              className="workspace-stage"
              style={{
                transform: `translate3d(${(mouse.x || 0) * 0.18}px, ${(mouse.y || 0) * 0.14}px, 0)`,
              }}
            >
              <img
                src={workspaceArt}
                alt="Developer workspace with monitor, desk, and bookshelf"
                className="workspace-art-img"
                draggable={false}
              />
              <div className="workspace-atmosphere" aria-hidden="true" />
              <div
                className={`hotspot monitor-hotspot ${monitorHover ? "hovered" : ""}`}
                onClick={() => openBook("work")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openBook("work");
                  }
                }}
                onMouseEnter={() => setMonitorHover(true)}
                onMouseLeave={() => setMonitorHover(false)}
                role="button"
                tabIndex={0}
                aria-label="Open portfolio projects"
              />
              <div
                className="bookshelf-interactive-zone"
                aria-label="Bookshelf navigation"
              >
                <button
                  className="shelf-book-trigger book-about"
                  onClick={() => openBook("about")}
                  aria-label="Open About book"
                  title="About"
                />
                <button
                  className="shelf-book-trigger book-projects"
                  onClick={() => openBook("work")}
                  aria-label="Open Projects book"
                  title="Projects"
                />
                <button
                  className="shelf-book-trigger book-experience"
                  onClick={() => openBook("experience")}
                  aria-label="Open Experience book"
                  title="Experience"
                />
                <button
                  className="shelf-book-trigger book-systems"
                  onClick={() => openBook("skills")}
                  aria-label="Open Skills book"
                  title="Skills"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-books">
          {[
            ["about", "ABOUT"],
            ["skills", "SKILLS"],
            ["work", "WORK"],
            ["experience", "EXPERIENCE"],
          ].map(([id, label]) => (
            <button key={id} onClick={() => openBook(id)}>
              {label} <ArrowRight size={13} />
            </button>
          ))}
        </div>
      </section>
      <button
        className="corner"
        aria-label="Open projects"
        onClick={() => openBook("work")}
      >
        <i />
        <i />
        <i />
      </button>
      {book && <Book type={book} phase={phase} close={closeBook} />}
    </main>
  );
}
