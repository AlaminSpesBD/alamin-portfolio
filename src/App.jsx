import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Github, Heart, Mail, Menu, Moon, Sun, Smartphone, Laptop, Sparkles, X, BriefcaseBusiness, UserRound, Send } from 'lucide-react'

const projects = [
  { name: 'Alamin Keyboard', type: 'Android App', desc: 'A personal Android keyboard project focused on a familiar typing experience and an expanded emoji collection.', icon: Smartphone, tags: ['Android', 'Keyboard'], status: 'In development' },
  { name: 'LyricsKeep', type: 'Android App', desc: 'A lyrics-focused app with a clean, friendly interface and a fresh pink-and-white visual direction.', icon: Laptop, tags: ['Android', 'UI Design'], status: 'In development' },
  { name: 'Personal Portfolio', type: 'Web Experience', desc: 'A home for selected work, experiments, and the ideas behind them. Built to grow over time.', icon: Code2, tags: ['React', 'Vite'], status: 'Building now' },
]
const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Android', 'Git & GitHub', 'UI Design', 'Vite']
const reveal = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: .5 } } }

export default function App() {
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]
  return <main className={dark ? 'site dark' : 'site'}>
    <div className="bg-orb orb-one" /><div className="bg-orb orb-two" />
    <header className="topbar wrap">
      <a className="brand" href="#home"><span className="brand-logo">A</span><span>Alamin <b>DevLab</b><small>Dream • Code • Innovate</small></span></a>
      <nav className={menu ? 'nav open' : 'nav'}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setMenu(false)}>{name}</a>)}</nav>
      <div className="nav-actions"><button className="round-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a><button className="round-btn menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button></div>
    </header>
    <section className="hero wrap" id="home">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
        <div className="eyebrow"><i/> HELLO, WELCOME TO MY PORTFOLIO</div>
        <h1>Hi, I'm<br/><span className="gradient">Md Alamin</span> <span className="wave">👋</span></h1>
        <h2>Creative Developer <em>&</em> Tech Enthusiast</h2>
        <p>I love turning ideas into amazing digital experiences. I'm passionate about web development, Android apps, and exploring new technologies. Let's create something meaningful. 💗</p>
        <div className="hero-buttons"><a className="primary-btn" href="#projects"><Code2 size={18}/> Explore My Work <ArrowUpRight size={16}/></a><a className="secondary-btn" href="#contact"><Mail size={17}/> Contact Me</a></div>
        <div className="hero-note"><span/> Based in Bangladesh <b>·</b> Always learning</div>
      </motion.div>
      <motion.div className="portrait-stage" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7}}>
        <div className="portrait-halo"/><div className="portrait-frame"><div className="portrait-placeholder"><span>A<span>.</span></span><small>YOUR PHOTO</small></div></div>
        <div className="float-chip chip-react">⚛️ <b>React</b></div><div className="float-chip chip-android">🤖 <b>Android</b></div><div className="float-chip chip-js">🟨 <b>JavaScript</b></div><div className="hand-note">Dream Big,<br/>Build Bigger.</div>
      </motion.div>
    </section>
    <section className="quick-stats wrap"><div><strong>03</strong><span>Personal Projects</span></div><div><strong>08+</strong><span>Skills & Tools</span></div><div><strong>100%</strong><span>Passion to Learn</span></div><div><strong>🇧🇩</strong><span>Made in Bangladesh</span></div></section>
    <section className="section wrap" id="about"><div className="section-title"><span>01 / ABOUT ME</span><h2>Curious by nature.<br/><i>Builder by choice.</i></h2></div><div className="about-grid"><motion.article className="glass about-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}><div className="icon-bubble"><UserRound/></div><h3>A little bit of everything,<br/>with a lot of intention.</h3><p>Hello! I'm Md Alamin, a developer and tech enthusiast from Bangladesh. I enjoy building modern web experiences, mobile app concepts, and exploring new technologies. This portfolio is a growing collection of what I make and learn.</p></motion.article><article className="glass approach-card"><span className="mini-label">MY APPROACH</span>{[['01','Stay curious','Keep learning and asking why.'],['02','Make it useful','Build things that solve real needs.'],['03','Mind the details','Thoughtful touches matter.']].map(x=><div className="approach" key={x[0]}><b>{x[0]}</b><div><strong>{x[1]}</strong><small>{x[2]}</small></div></div>)}</article></div></section>
    <section className="section wrap" id="skills"><div className="section-title"><span>02 / WHAT I USE</span><h2>Tools & <i>skills.</i></h2></div><div className="skills-panel glass"><div className="skills-icon"><Sparkles/></div><div className="skill-tags">{skills.map(s=><span key={s}>{s}</span>)}</div></div></section>
    <section className="section wrap" id="projects"><div className="section-title section-row"><div><span>03 / SELECTED WORK</span><h2>Things I'm <i>building.</i></h2></div><small>PROJECTS ↘</small></div><div className="project-grid">{projects.map((p,i)=>{const Icon=p.icon;return <motion.article className="glass project-card" key={p.name} initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal} transition={{delay:i*.08}}><div className="project-meta"><span>0{i+1} / 03</span><small><i/> {p.status}</small></div><div className="project-icon"><Icon/></div><label>{p.type}</label><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-bottom">CASE STUDY COMING SOON <ArrowUpRight size={17}/></div></motion.article>})}</div></section>
    <section className="contact wrap" id="contact"><div className="contact-card"><div className="contact-deco">A.</div><span>04 / WHAT'S NEXT?</span><h2>Have an idea?<br/><i>Let's make it real.</i></h2><p>I'm always happy to connect, exchange ideas, and explore interesting projects.</p><a href="https://github.com/AlaminSpesBD" target="_blank" rel="noreferrer">Connect on GitHub <Github size={17}/></a></div></section>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-logo">A</span><span>Alamin <b>DevLab</b></span></a><small>Made with <Heart size={13} fill="currentColor"/> in Bangladesh · © {new Date().getFullYear()} Alamin</small><a href="#home">BACK TO TOP ↑</a></footer>
  </main>
}
