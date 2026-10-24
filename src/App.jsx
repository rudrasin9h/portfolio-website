import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Code2, Github, Mail, Terminal, FlaskConical, Sparkles, ExternalLink, MousePointer2 } from 'lucide-react';
import Navigation from './components/Navigation.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import { profile, skills, projects } from './data/portfolio.js';

const iconMap = { code: Code2, terminal: Terminal, flask: FlaskConical };

function CoverIllustration() {
  return <div className="hero-art" aria-label="Portrait composition">
    <div className="art-sunburst"></div><div className="art-orbit art-orbit--one"></div><div className="art-orbit art-orbit--two"></div>
    <svg className="annotation-arrows" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d="M12 23 C17 19 21 20 26 27"/><path d="M23 26 L26 27 L25 24"/>
      <path d="M89 58 C84 56 81 58 77 64"/><path d="M77 64 L78 60 M77 64 L81 63"/>
    </svg>
    <span className="hero-annotation hero-annotation--creator" aria-hidden="true">CREATOR</span>
    <span className="hero-annotation hero-annotation--thinker" aria-hidden="true">THINKER</span>
    <span className="hero-annotation hero-annotation--problem-solver" aria-hidden="true">PROBLEM SOLVER</span>
    <span className="hero-annotation hero-annotation--innovator" aria-hidden="true">INNOVATOR</span>
    <span className="hero-annotation hero-annotation--builder" aria-hidden="true">BUILDER</span>
    <span className="hero-annotation hero-annotation--curious-mind" aria-hidden="true">CURIOUS MIND</span>
    <img className="developer-portrait" src="/profile-photo.png" alt="Rudra Pratap Singh" />
  </div>;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const enabled = window.localStorage.getItem('rudra-theme') === 'dark';
    document.documentElement.dataset.theme = enabled ? 'dark' : 'light';
    return enabled;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    window.localStorage.setItem('rudra-theme', darkMode ? 'dark' : 'light');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', darkMode ? '#201f1d' : '#f4ebdd');
  }, [darkMode]);
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <div className="app-shell">
    <Navigation darkMode={darkMode} onToggleTheme={() => setDarkMode(mode => !mode)} />
    <main>
      <section id="cover" className="hero section-wrap">
        <div className="hero-copy">
          <h1>RUDRA PRATAP<br/><span className="title-outline">SINGH</span><span className="title-period">.</span></h1>
          <a className="hero-nameplate" href="/Rudra-CV.pdf" download="Rudra-CV.pdf" aria-label="Download Rudra's CV" title="Download CV"><span className="nameplate-label">DOWNLOAD</span><span className="nameplate-name">CV</span><span className="nameplate-star">✳</span></a>
          <p className="hero-tagline">BUILDING THINGS.<br/>BREAKING THINGS.<br/><span>UNDERSTANDING WHY.</span></p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions"><button className="button button--red" onClick={() => scrollTo('projects')}>Explore my work <ArrowRight size="1.125rem"/></button><button className="button button--text" onClick={() => scrollTo('origin')}>Meet the developer <ArrowDown size="1.0625rem"/></button></div>
        </div>
        <CoverIllustration />
        <div className="hero-side-note mono">A WORK IN PROGRESS — JUST LIKE THE BUILDER</div>
      </section>

      <section id="origin" className="origin section-wrap section-space">
        <SectionHeading title="FROM CURIOSITY TO CREATION" />
        <div className="origin-grid">
          <article className="comic-panel origin-panel origin-panel--large"><div className="panel-art panel-art--spark"><Braces size="4rem"/><span className="spark-mark">✳</span></div><h3>FOUNDATIONS</h3><p>I am an 18-year-old Computer Science freshman at VIT Vellore. My journey into technology started with a simple fascination for how things work, driving me to explore systems at the grassroots level. From early on, I have loved peeling back the layers of complicated systems to understand exactly what happens under the hood.</p></article>
          <article className="comic-panel origin-panel origin-panel--blue"><div className="panel-art panel-art--terminal"><Terminal size="3.5rem"/><span>0101<br/>1010<br/>0011</span></div><h3>EXPLORATION</h3><p>I thrive on exploring unfamiliar domains and rapidly picking up new tools. Alongside building a strong foundation in C, Python, and Git, I actively experiment with customizing Linux desktop environments, developing AI-driven web applications, and building automation tools for chemistry labs. I learn best by breaking down complex problems and mapping out efficient, optimized solutions.</p><span className="panel-caption">LEARN → BUILD → REPEAT</span></article>
          <article className="comic-panel origin-panel origin-panel--yellow"><div className="panel-art panel-art--target"><Sparkles size="3.5625rem"/><div className="target-ring"></div></div><h3>THE MISSION</h3><p>My goal is to pair hard work with smart planning to ensure my engineering efforts are highly targeted and deliver the best possible results. Whether managing a team for a Mathematics Club exhibition or competing as a regional quiz champion, I have learned to adapt quickly and view challenges from multiple perspectives. I am dedicated to bringing this adaptability and grassroots approach to every technical solution I build.</p></article>
        </div>
      </section>

      <section id="skills" className="skills section-wrap section-space section-cream-band">
        <SectionHeading title="SKILLS" />
        
        <div className="skills-grid">{skills.map((skill, i) => { const Icon = iconMap[skill.icon] || Code2; return <article key={skill.title} className={`skill-card skill-card--${skill.color}`}><div className="skill-card-top"><span className="skill-count">0{i + 1} / TOOL CLASS</span><Icon size="1.8125rem"/></div><h3>{skill.title}</h3><p>{skill.note}</p><div className="skill-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div><div className="card-corner">✳</div></article>; })}</div>
      </section>

      <section id="projects" className="projects section-wrap section-space">
        <SectionHeading title="THE PROJECTS" />

        <div className="projects-list">{projects.map((project, i) => <article key={project.number} className={`project-card project-card--${i % 2 ? 'reverse' : 'forward'}`}>
          <div className={`project-visual project-visual--${i % 2 ? 'blue' : 'red'}`}><div className="project-visual-top mono"><span>MISSION {project.number}</span><span>{project.date}</span></div><div className="project-placeholder-art"><div className="placeholder-window"><img className="project-screenshot" src={project.image} alt={`${project.title} application screenshot`} /></div><div className="project-burst">{i % 2 ? 'BUILD' : 'IDEA'}</div></div><div className="project-visual-bottom mono">{project.mark}</div></div>
          <div className="project-info"><div className="project-kicker mono">FIELD REPORT / {project.number}</div><h3>{project.demo ? <a className="project-title-link" href={project.demo} target="_blank" rel="noreferrer">{project.title}</a> : project.title}</h3><span className="status-tag">{project.status}</span><h4>THE CHALLENGE</h4><p>{project.problem}</p><div className="tag-row">{project.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}</div><button className="project-open" onClick={() => setSelectedProject(project)}>Check it out <ArrowUpRight size="1.125rem"/></button>{project.github && <a className="project-source" href={project.github} target="_blank" rel="noreferrer"><Github size=".9375rem"/> Source code <ExternalLink size=".8125rem"/></a>}</div>
        </article>)}</div>
      </section>

      <section id="contact" className="contact-section"><div className="contact-burst"></div><div className="contact-inner section-wrap"><div className="contact-content"><div className="contact-copy"><h2>LET'S BUILD<br/>SOMETHING <span>WORTH</span><br/>TALKING ABOUT<span className="contact-period">!</span></h2><p>Open to learning, collaborating, and working on ideas that deserve to exist outside a notes app.</p><a className="button button--yellow" href={`mailto:${profile.email}`}>Send a transmission <Mail size="1.125rem"/></a></div><div className="contact-sticker"><div className="sticker-inner"><MousePointer2 size="1.8125rem"/><span>YOUR<br/>MOVE</span><ArrowDown size="1.4375rem"/></div></div></div><div className="contact-bottom"><div className="social-links">{profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>}<a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a></div></div></div></section>
    </main>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>;
}
