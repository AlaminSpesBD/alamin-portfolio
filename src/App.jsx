import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Heart,
  Laptop, Mail, Menu, Moon, Smartphone, Sparkles, Sun, X
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Alamin Keyboard',
    type: 'Android application',
    description: 'A personal Android keyboard project focused on a familiar, expressive typing experience and an expanded emoji collection.',
    icon: Smartphone,
    tags: ['Android', 'Keyboard'],
    status: 'In development',
  },
  {
    number: '02',
    name: 'LyricsKeep',
    type: 'Android application',
    description: 'A lyrics-focused app with a clean, friendly interface. Currently being refined with a fresh visual direction.',
    icon: Laptop,
    tags: ['Android', 'UI design'],
    status: 'In development',
  },
  {
    number: '03',
    name: 'Personal Portfolio',
    type: 'Web experience',
    description: 'A home for selected work, experiments, and the ideas behind them. Built to grow as new projects take shape.',
    icon: Code2,
    tags: ['React', 'Vite'],
    status: 'Building now',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function App() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const navItems = [['About', '#about'], ['Work', '#work'], ['Contact', '#contact']]

  return (
    <main className={dark ? 'site dark' : 'site'}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar wrap">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">A<span>.</span></span>
          <span>alamin<span className="brand-muted">/dev</span></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="hero wrap" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
          <div className="eyebrow"><span className="status-dot" /> OPEN TO IDEAS & COLLABORATION</div>
          <h1>Making digital<br />things feel <span className="gradient-text">a little</span><br /><span className="gradient-text">more human.</span></h1>
          <p className="hero-description">Hey, I'm <strong>Alamin</strong> — a creative developer and tech enthusiast exploring the space between thoughtful design and useful technology.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#about">A little about me <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-footnote"><span className="tiny-line" /> Based in Bangladesh <span className="footnote-separator">·</span> Creating with curiosity</div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .7, delay: .15 }}>
          <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" />
          <div className="art-card">
            <div className="art-card-top"><span>CREATIVE MODE</span><Sparkles size={16} /></div>
            <div className="art-monogram">A<span>.</span></div>
            <div className="art-card-bottom"><span>IDEAS → INTERFACES</span><span>2026</span></div>
          </div>
          <div className="float-pill pill-code"><Code2 size={15} /> Build</div>
          <div className="float-pill pill-heart"><Heart size={15} fill="currentColor" /> Create</div>
          <div className="float-note">Curiosity<br />is the fuel ✳</div>
        </motion.div>
      </section>

      <section className="intro-strip wrap">
        <span className="strip-label">CURRENTLY EXPLORING</span>
        <div className="strip-items"><span>App experiences</span><i /> <span>Interface design</span><i /> <span>Creative technology</span></div>
      </section>

      <section className="section wrap" id="about">
        <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <span className="section-kicker">01 / THE PERSON</span>
          <h2>Curious by nature.<br /><span className="muted-heading">Builder by choice.</span></h2>
        </motion.div>
        <div className="about-grid">
          <motion.div className="about-main panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="panel-icon"><Sparkles size={19} /></span>
            <h3>A little bit of everything,<br />with a lot of intention.</h3>
            <p>I enjoy turning ideas into practical digital experiences — from mobile app concepts to web interfaces. I care about the details, the feeling of a product, and making technology easier to enjoy.</p>
            <p>This portfolio is a work in progress, just like the best ideas. More stories and finished work will find their way here soon.</p>
          </motion.div>
          <motion.div className="about-side panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="section-kicker">MY APPROACH</span>
            <div className="approach-row"><span className="approach-num">01</span><div><strong>Stay curious</strong><small>Keep learning, keep asking why.</small></div></div>
            <div className="approach-row"><span className="approach-num">02</span><div><strong>Make it useful</strong><small>Good ideas should solve real needs.</small></div></div>
            <div className="approach-row"><span className="approach-num">03</span><div><strong>Mind the details</strong><small>Thoughtful touches make a difference.</small></div></div>
          </motion.div>
        </div>
      </section>

      <section className="section work-section wrap" id="work">
        <div className="section-heading work-heading">
          <div><span className="section-kicker">02 / SELECTED WORK</span><h2>Things I'm <span className="muted-heading">working on.</span></h2></div>
          <span className="work-count">03 PROJECTS <span>↘</span></span>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon
            return <motion.article className="project-card panel" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * .08 }}>
              <div className="project-top"><span>{project.number} / 03</span><span className="project-status"><i />{project.status}</span></div>
              <div className="project-icon"><Icon size={24} strokeWidth={1.7} /></div>
              <span className="project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-bottom"><span>CASE STUDY COMING SOON</span><ArrowUpRight size={17} /></div>
            </motion.article>
          })}
        </div>
      </section>

      <section className="contact-section wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" />
          <span className="section-kicker">03 / WHAT'S NEXT?</span>
          <h2>Have an idea?<br /><span>Let's make it real.</span></h2>
          <p>I'm always happy to connect, exchange ideas, and explore interesting projects.</p>
          <a className="button-light" href="https://github.com/AlaminSpesBD" target="_blank" rel="noreferrer">Find me on GitHub <Github size={17} /></a>
          <div className="contact-decoration">A<span>.</span></div>
        </div>
      </section>

      <footer className="footer wrap">
        <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>alamin<span className="brand-muted">/dev</span></span></a>
        <span>Designed with curiosity <Heart size={13} fill="currentColor" /> · © {new Date().getFullYear()} Alamin</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App