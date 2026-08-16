import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Results from './components/Results'
import Transition from './components/Transition'
import Seniors from './components/Seniors'
import CETCheckIn from './components/CETCheckIn'
import GooseCircle from './components/GooseCircle'
import AICommunity from './components/AICommunity'
import Benefits from './components/Benefits'
import AIIntro from './components/AIIntro'
import Courses from './components/Courses'
import Offline from './components/Offline'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Loader from './components/Loader'
import IntroVideo from './components/IntroVideo'
import CustomCursor from './components/CustomCursor'
import ClickSpark from './components/ClickSpark'
import './App.css'

const STAGGER_GAP = 0.08

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showContact, setShowContact] = useState(false)
  const [loading, setLoading] = useState(true)
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showContact])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 'results', 'campus-economy', 'ip-incubation', 'ai-practice', 'competition', 'internship-offer',
        'growth', 'cet', 'goose', 'ai-community', 'benefits', 'ai-intro',
        'courses', 'offline', 'study-tour', 'feedback', 'welfare', 'footer'
      ]
      const scrollPos = window.scrollY + window.innerHeight / 2

      let active = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          active = id
          break
        }
      }

      if (active) {
        if (['campus-economy', 'ip-incubation', 'ai-practice', 'competition', 'internship-offer'].includes(active)) {
          setActiveSection('results')
        } else if (['cet', 'goose', 'ai-community', 'benefits', 'ai-intro'].includes(active)) {
          setActiveSection('growth')
        } else if (active === 'study-tour') {
          setActiveSection('offline')
        } else {
          setActiveSection(active)
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const minDisplayTime = 4000
    const startTime = Date.now()

    const hideLoader = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDisplayTime - elapsed)
      setTimeout(() => {
        setLoading(false)
        setPhase('video')
      }, remaining)
    }

    if (document.readyState === 'complete') {
      hideLoader()
    } else {
      window.addEventListener('load', hideLoader)
      return () => window.removeEventListener('load', hideLoader)
    }
  }, [])

  useEffect(() => {
    if (phase === 'video') {
      document.body.style.overflow = 'hidden'
    } else if (phase === 'background') {
      document.body.classList.add('app-background')
      document.body.style.overflow = ''
      const t = setTimeout(() => {
        document.body.classList.remove('app-background')
        document.body.classList.add('app-content')
        setPhase('content')
      }, 900)
      return () => clearTimeout(t)
    }
    if (phase === 'content') {
      const t = setTimeout(() => {
        document.body.classList.remove('app-content')
        document.body.classList.add('app-ready')
        setPhase('ready')
      }, 2200)
      return () => clearTimeout(t)
    }
  }, [phase])

  const handleVideoComplete = () => {
    setPhase('background')
  }

  const openContact = () => setShowContact(true)
  const closeContact = () => setShowContact(false)

  const bgVisible = phase !== 'loading'
  const contentVisible = phase === 'content' || phase === 'ready'

  const sectionMotion = (delay) => ({
    initial: contentVisible
      ? { y: 0, opacity: 1 }
      : { y: 60, opacity: 0 },
    animate: contentVisible
      ? { y: 0, opacity: 1 }
      : { y: 60, opacity: 0 },
    transition: {
      y: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.6, delay, ease: 'easeOut' },
    },
  })

  const navbarMotion = {
    initial: { y: -40, opacity: 0 },
    animate: bgVisible ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }

  return (
    <div className="app">
      <CustomCursor />
      <Loader visible={loading} />

      {/* Click Spark Effect */}
      <ClickSpark
        sparkColor="#22c55e"
        sparkSize={8}
        sparkRadius={25}
        sparkCount={10}
        duration={500}
      />

      {/* Intro Video */}
      {phase === 'video' && (
        <IntroVideo videoSrc="/13.mp4" onComplete={handleVideoComplete} />
      )}

      {/* Navbar */}
      <motion.div {...navbarMotion}>
        <Navbar
          activeSection={activeSection}
          onContactClick={openContact}
          showBack={showContact}
          onBackClick={closeContact}
        />
      </motion.div>

      {/* Hero */}
      <Hero phase={phase} />

      {/* 板块一：社区成果 */}
      <motion.div {...sectionMotion(STAGGER_GAP * 0)}>
        <div id="results">
          <Results />
        </div>
      </motion.div>

      <Transition text="这些不是运气，是一群人互相推着往前走的结果" />

      {/* 板块二：成长陪伴 */}
      <motion.div {...sectionMotion(STAGGER_GAP * 1)}>
        <div id="growth">
          <div id="seniors">
            <Seniors />
          </div>

          <div id="cet">
            <CETCheckIn />
          </div>

          <div id="goose">
            <GooseCircle />
          </div>

          <div id="ai-community">
            <AICommunity />
          </div>

          <div id="benefits">
            <Benefits />
          </div>

          <div id="ai-intro">
            <AIIntro />
          </div>
        </div>
      </motion.div>

      <Transition text="他们的成长路径，源于一套经过打磨的课程体系" accent />

      {/* 板块三：课程学习 */}
      <motion.div {...sectionMotion(STAGGER_GAP * 3)}>
        <div id="courses">
          <Courses />
        </div>
      </motion.div>

      <Transition text="课堂之外，我们更想成为一个真正的社区" />

      {/* 板块四：线下活动 */}
      <motion.div {...sectionMotion(STAGGER_GAP * 3.5)}>
        <div id="offline">
          <Offline />
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div {...sectionMotion(STAGGER_GAP * 4)}>
        <Footer onContactClick={openContact} />
      </motion.div>

      <AnimatePresence>
        {showContact && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
