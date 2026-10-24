import React, { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
const links = [{ id: 'cover', label: 'Cover' }, { id: 'origin', label: 'Origin' }, { id: 'skills', label: 'Arsenal' }, { id: 'projects', label: 'Missions' }, { id: 'workshop', label: 'Workshop' }, { id: 'contact', label: 'Contact' }];
export default function Navigation() {
  const [active, setActive] = useState('cover'); const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 420); let current = 'cover'; for (const item of links) { const el = document.getElementById(item.id); if (el && el.getBoundingClientRect().top <= window.innerHeight * .42) current = item.id; } setActive(current); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  return <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}><a className="brand" href="#cover" onClick={e => {e.preventDefault(); go('cover')}} aria-label="Rudra, back to cover"><span className="brand-mark"><Zap size={17} fill="currentColor" /></span><span>RUDRA<span className="brand-dot">.</span></span></a>
    <button className="nav-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Main navigation">{links.map((link, i) => <a key={link.id} className={active === link.id ? 'active' : ''} href={`#${link.id}`} onClick={e => { e.preventDefault(); go(link.id); }}><span className="nav-index">0{i + 1}</span>{link.label}</a>)}</nav>
  </header>;
}
