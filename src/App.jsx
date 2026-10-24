import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Github, Linkedin, Mail, Terminal, FlaskConical, Layers3, Sparkles, ExternalLink, MousePointer2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import { profile, skills, projects, experiments } from './data/portfolio.js';

gsap.registerPlugin(ScrollTrigger);
const iconMap = { code: Code2, terminal: Terminal, flask: FlaskConical };

function CoverIllustration() {
  return <div className="hero-art" aria-label="Stylized original illustration of a developer at work" role="img">
    <div className="art-sunburst"></div><div className="art-orbit art-orbit--one"></div><div className="art-orbit art-orbit--two"></div>
    <div className="art-sticker art-sticker--top">IDEA<br/>IN PROGRESS</div><div className="art-sticker art-sticker--side">FIG. 01</div>
    <svg className="developer-illustration" viewBox="0 0 430 490" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M69 452L87 337Q94 286 138 274L177 263H261L304 280Q337 294 345 345L367 452H69Z" fill="#2878B5" stroke="#171717" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M161 263L169 219H257L269 269L219 318L161 263Z" fill="#F4B28A" stroke="#171717" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M129 140Q130 57 215 54Q302 55 304 145L292 214Q278 257 218 266Q157 256 141 215L129 140Z" fill="#F4B28A" stroke="#171717" strokeWidth="8"/>
      <path d="M127 150Q98 83 151 44Q194 11 251 37Q312 56 306 131L292 156L274 108Q232 113 201 91Q180 121 140 126L127 150Z" fill="#171717" stroke="#171717" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M164 165Q178 151 192 165M241 165Q256 151 270 165" stroke="#171717" strokeWidth="7" strokeLinecap="round"/>
      <path d="M208 176L201 198L216 202" stroke="#171717" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M187 224Q218 245 247 220" stroke="#171717" strokeWidth="6" strokeLinecap="round"/>
      <path d="M166 280L215 321L264 280L284 301L246 353H185L147 301L166 280Z" fill="#F4EBDD" stroke="#171717" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M188 351L160 451M250 351L282 451" stroke="#171717" strokeWidth="8" strokeLinecap="round"/>
      <path d="M91 331L135 304L174 357L143 397L83 379Z" fill="#F4B28A" stroke="#171717" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M338 331L296 304L258 357L289 397L348 379Z" fill="#F4B28A" stroke="#171717" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M128 380L163 398L148 425L108 407Z" fill="#FFD23F" stroke="#171717" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M302 380L267 398L282 425L322 407Z" fill="#FFD23F" stroke="#171717" strokeWidth="7" strokeLinejoin="round"/>
      <path d="M179 290L216 321L251 290" stroke="#171717" strokeWidth="5" strokeLinecap="round"/>
      <path d="M195 376H237" stroke="#171717" strokeWidth="5" strokeLinecap="round"/>
    </svg>
    <div className="art-caption"><span className="mono">CHARACTER PROFILE</span><strong>THE BUILDER</strong><span>Curious by default.</span></div>
    <span className="art-sfx">ZAP!</span>
  </div>;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const enabled = window.localStorage.getItem('rudra-theme') === 'dark';
    document.documentElement.dataset.theme = enabled ? 'dark' : 'light';
    return enabled;
  });
  const root = useRef(null);
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    window.localStorage.setItem('rudra-theme', darkMode ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode ? '#201f1d' : '#f4ebdd');
  }, [darkMode]);
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 24, opacity: 0, duration: .7, stagger: .12, ease: 'power3.out', delay: .12 });
      gsap.from('.hero-art', { scale: .92, opacity: 0, duration: .9, ease: 'back.out(1.3)', delay: .18 });
      gsap.utils.toArray('.reveal').forEach(el => gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .65, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
      gsap.utils.toArray('.comic-panel, .skill-card, .project-card, .experiment-card').forEach((el, i) => gsap.fromTo(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .55, delay: (i % 3) * .08, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 91%', once: true } }));
    }, root);
    return () => ctx.revert();
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <div ref={root} className="app-shell">
    <Navigation darkMode={darkMode} onToggleTheme={() => setDarkMode(mode => !mode)} />
    <main>
      <section id="cover" className="hero section-wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"></span> ISSUE NO. 001 <span className="eyebrow-divider">/</span> ORIGIN FILE</div>
          <h1>THE DEVELOPER<br/><span className="title-outline">CHRONICLES</span><span className="title-period">.</span></h1>
          <div className="hero-nameplate"><span className="nameplate-label">STARRING</span><span className="nameplate-name">RUDRA</span><span className="nameplate-star">✳</span></div>
          <p className="hero-tagline">BUILDING THINGS.<br/>BREAKING THINGS.<br/><span>UNDERSTANDING WHY.</span></p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions"><button className="button button--red" onClick={() => scrollTo('projects')}>Explore my work <ArrowRight size={18}/></button><button className="button button--text" onClick={() => scrollTo('origin')}>Meet the developer <ArrowDown size={17}/></button></div>
          <div className="hero-footnote mono"><span>SCROLL TO READ</span><span>EST. {new Date().getFullYear()}</span></div>
        </div>
        <CoverIllustration />
        <div className="hero-side-note mono">A WORK IN PROGRESS — JUST LIKE THE BUILDER</div>
      </section>

      <section id="origin" className="origin section-wrap section-space">
        <SectionHeading kicker="CHAPTER 01 / THE BACKSTORY" title="EVERY BUILDER HAS AN ORIGIN" number="01" />
        <div className="origin-grid">
          <article className="comic-panel origin-panel origin-panel--large"><div className="panel-number">PANEL 01</div><div className="panel-art panel-art--spark"><Braces size={64}/><span className="spark-mark">✳</span></div><h3>THE BEGINNING</h3><p>Every great build starts with a question. For me, it is usually: <strong>“How does this actually work?”</strong></p><div className="speech-bubble">Let me take it apart and find out.</div></article>
          <article className="comic-panel origin-panel origin-panel--blue"><div className="panel-number">PANEL 02</div><div className="panel-art panel-art--terminal"><Terminal size={56}/><span>0101<br/>1010<br/>0011</span></div><h3>THE CURIOSITY</h3><p>Code, computers, engineering, and the systems connecting them. I learn best by making small things, testing them, and figuring out what breaks.</p><span className="panel-caption">LEARN → BUILD → REPEAT</span></article>
          <article className="comic-panel origin-panel origin-panel--yellow"><div className="panel-number">PANEL 03</div><div className="panel-art panel-art--target"><Sparkles size={57}/><div className="target-ring"></div></div><h3>THE MISSION</h3><p>Build useful tools, solve real problems, and keep moving from ideas to working prototypes. The goal is progress—not pretending to know everything.</p><div className="mission-stamp">IN PROGRESS</div></article>
        </div>
        <p className="editable-note mono">BIO NOTE: EDIT THESE PANELS TO ADD YOUR REAL STORY.</p>
      </section>

      <section id="skills" className="skills section-wrap section-space section-cream-band">
        <SectionHeading kicker="CHAPTER 02 / THE TOOLKIT" title="THE ARSENAL" number="02" />
        <p className="section-intro reveal">Tools in the belt. Skills still in motion. No fake power levels—just the things I use and the areas I am exploring.</p>
        <div className="skills-grid">{skills.map((skill, i) => { const Icon = iconMap[skill.icon] || Code2; return <article key={skill.title} className={`skill-card skill-card--${skill.color}`}><div className="skill-card-top"><span className="skill-count">0{i + 1} / TOOL CLASS</span><Icon size={29}/></div><h3>{skill.title}</h3><p>{skill.note}</p><div className="skill-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div><div className="card-corner">✳</div></article>; })}</div>
        <div className="skills-foot reveal"><span className="skills-foot-icon"><Layers3 size={21}/></span><p><strong>Always adding to the toolkit.</strong><br/>The most important skill is being willing to learn the next one.</p></div>
      </section>

      <section id="projects" className="projects section-wrap section-space">
        <SectionHeading kicker="CHAPTER 03 / FIELD REPORTS" title="THE MISSIONS" number="03" />
        <div className="projects-topline reveal"><p>Ideas become interesting when they become real.<br/>Here is where the experiments turn into builds.</p><span className="mono">CASE FILES: 00{projects.length}</span></div>
        <div className="projects-list">{projects.map((project, i) => <article key={project.number} className={`project-card project-card--${i % 2 ? 'reverse' : 'forward'}`}>
          <div className={`project-visual project-visual--${i % 2 ? 'blue' : 'red'}`}><div className="project-visual-top mono"><span>MISSION {project.number}</span><span>{project.status}</span></div><div className="project-placeholder-art"><div className="placeholder-window"><div className="window-dots"><i/><i/><i/></div><div className="code-lines"><b></b><b></b><b></b><b></b><b></b></div><div className="window-symbol">{i % 2 ? '< />' : '{ }'}</div></div><div className="project-burst">{i % 2 ? 'BUILD' : 'IDEA'}</div></div><div className="project-visual-bottom mono">{project.mark}</div></div>
          <div className="project-info"><div className="project-kicker mono">FIELD REPORT / {project.number}</div><h3>{project.title}</h3><span className="status-tag">{project.status}</span><h4>THE CHALLENGE</h4><p>{project.problem}</p><div className="tag-row">{project.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}</div><button className="project-open" onClick={() => setSelectedProject(project)}>Read mission file <ArrowUpRight size={18}/></button>{project.github && <a className="project-source" href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> Source code <ExternalLink size={13}/></a>}</div>
        </article>)}</div>
        <div className="placeholder-warning mono">THESE ARE EDITABLE STARTER CARDS — REPLACE WITH REAL PROJECTS BEFORE PUBLISHING.</div>
      </section>

      <section id="workshop" className="workshop section-wrap section-space">
        <SectionHeading kicker="CHAPTER 04 / CURRENTLY BUILDING" title="THE WORKSHOP" number="04" />
        <div className="workshop-layout"><div className="workshop-note"><div className="notebook-head"><span className="mono">DEV LOG / LIVE NOTES</span><span className="note-pin"></span></div><div className="notebook-content"><span className="handwritten">Curiosity, under construction.</span><p>The workshop is for the unfinished stuff: prototypes, experiments, rabbit holes, and the lessons that come with them.</p><div className="notebook-rule"></div><div className="notebook-check"><span>✓</span> Make a small version first</div><div className="notebook-check"><span>✓</span> Test assumptions early</div><div className="notebook-check"><span>→</span> Document what changed</div></div><div className="notebook-tape"></div></div>
          <div className="experiments-list">{experiments.map((exp, i) => <article key={exp.title} className="experiment-card"><div className="experiment-number mono">LOG 0{i + 1}</div><div className="experiment-main"><div className="experiment-head"><h3>{exp.title}</h3><span className="progress-dot">{exp.progress}</span></div><p>{exp.objective}</p><div className="tag-row">{exp.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}</div><div className="next-step"><span className="mono">NEXT MILESTONE</span><p>{exp.next}</p></div>{exp.repo && <a className="project-open" href={exp.repo} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={17}/></a>}</div></article>)}</div></div>
        <p className="editable-note mono">WORKSHOP LOGS ARE PLACEHOLDERS. UPDATE THEM AS YOUR WORK EVOLVES.</p>
      </section>

      <section id="contact" className="contact-section"><div className="contact-burst"></div><div className="contact-inner section-wrap"><div className="contact-top mono"><span>FINAL CHAPTER / YOUR MOVE</span><span>TO BE CONTINUED...</span></div><div className="contact-content"><div className="contact-copy"><span className="contact-kicker">GOT AN INTERESTING PROBLEM?</span><h2>LET'S BUILD<br/>SOMETHING <span>WORTH</span><br/>TALKING ABOUT<span className="contact-period">!</span></h2><p>Open to learning, collaborating, and working on ideas that deserve to exist outside a notes app.</p><a className="button button--yellow" href={`mailto:${profile.email}`}>Send a transmission <Mail size={18}/></a></div><div className="contact-sticker"><div className="sticker-inner"><MousePointer2 size={29}/><span>YOUR<br/>MOVE</span><ArrowDown size={23}/></div></div></div><div className="contact-bottom"><span className="mono">THE END? NOT EVEN CLOSE.</span><div className="social-links">{profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>}<a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a></div></div></div></section>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} RUDRA / THE DEVELOPER CHRONICLES</span><span className="mono">MADE WITH CURIOSITY <b>✳</b></span><button onClick={() => scrollTo('cover')}>BACK TO COVER ↑</button></footer>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>;
}
