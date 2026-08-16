import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import logoUrl from '../assets/langjian.jpg'
import './Navbar.css'
import './NavbarMenu.css'

const NAV_ITEMS = [
  {
    id: 'hero',
    label: '首页',
  },
  {
    id: 'results',
    label: '社区成果',
    subItems: [
      { label: '校园经济项目', target: 'campus-economy' },
      { label: 'IP 孵化', target: 'ip-incubation' },
      { label: 'AI 接单实战', target: 'ai-practice' },
      { label: '竞赛奖励', target: 'competition' },
      { label: '实习校招 offer', target: 'internship-offer' },
    ]
  },
  {
    id: 'growth',
    label: '成长陪伴',
    subItems: [
      { label: '常驻学长学姐', target: 'seniors' },
      { label: '四六级打卡', target: 'cet' },
      { label: '浪尖成长鹅圈', target: 'goose' },
      { label: 'AI 社区', target: 'ai-community' },
    ]
  },
  {
    id: 'courses',
    label: '社区课程',
  },
  {
    id: 'offline',
    label: '线下社区',
    subItems: [
      { label: '线下社区版图', target: 'offline' },
      { label: '香港、电子科大学游学', target: 'study-tour' },
    ]
  },
  {
    id: 'feedback',
    label: '社区反馈',
  },
  {
    id: 'welfare',
    label: '社会公益',
  },
  {
    id: 'contact',
    label: '联系我们',
    isContact: true,
  },
]

const EASE = 'power3.easeOut'

export default function Navbar({ activeSection, onContactClick, showBack, onBackClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const circleRefs = useRef([])
  const tlRefs = useRef([])
  const activeTweenRefs = useRef([])
  const logoImgRef = useRef(null)
  const logoTweenRef = useRef(null)
  const navRef = useRef(null)

  const layout = useCallback(() => {
    circleRefs.current.forEach(circle => {
      if (!circle?.parentElement) return

      const pill = circle.parentElement
      const rect = pill.getBoundingClientRect()
      const { width: w, height: h } = rect
      const R = ((w * w) / 4 + h * h) / (2 * h)
      const D = Math.ceil(2 * R) + 2
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
      const originY = D - delta

      circle.style.width = `${D}px`
      circle.style.height = `${D}px`
      circle.style.bottom = `-${delta}px`

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      })

      const label = pill.querySelector('.pill-label')
      const labelHover = pill.querySelector('.pill-label-hover')

      if (label) gsap.set(label, { y: 0 })
      if (labelHover) gsap.set(labelHover, { y: h + 12, opacity: 0 })

      const index = circleRefs.current.indexOf(circle)
      if (index === -1) return

      tlRefs.current[index]?.kill()
      const tl = gsap.timeline({ paused: true })

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.5, ease: EASE, overwrite: 'auto' }, 0)

      if (label) {
        tl.to(label, { y: -(h + 8), opacity: 0, duration: 0.5, ease: EASE, overwrite: 'auto' }, 0)
      }

      if (labelHover) {
        gsap.set(labelHover, { y: Math.ceil(h + 100), opacity: 0 })
        tl.to(labelHover, { y: 0, opacity: 1, duration: 0.5, ease: EASE, overwrite: 'auto' }, 0)
      }

      tlRefs.current[index] = tl
    })
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    layout()
    const onResize = () => layout()
    window.addEventListener('resize', onResize)
    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {})
    }
    return () => window.removeEventListener('resize', onResize)
  }, [layout])

  const handleEnter = i => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: EASE,
      overwrite: 'auto'
    })
  }

  const handleLeave = i => {
    const tl = tlRefs.current[i]
    if (!tl) return
    activeTweenRefs.current[i]?.kill()
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.25,
      ease: EASE,
      overwrite: 'auto'
    })
  }

  const handleLogoEnter = () => {
    const img = logoImgRef.current
    if (!img) return
    logoTweenRef.current?.kill()
    gsap.set(img, { rotate: 0 })
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.3,
      ease: EASE,
      overwrite: 'auto'
    })
  }

  const scrollTo = (id) => {
    setMenuOpen(false)
    setActiveMenu(null)
    const el = document.getElementById(id)
    if (!el) return
    const navbarHeight = navRef.current?.offsetHeight || 80
    const rect = el.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top - navbarHeight
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
  }

  const handleNavClick = (item, e) => {
    e.preventDefault()
    if (item.isContact) {
      onContactClick?.()
    } else {
      scrollTo(item.id)
    }
  }

  const handleMenuMouseEnter = (itemId) => {
    setActiveMenu(itemId)
  }

  const handleMenuMouseLeave = () => {
    setActiveMenu(null)
  }

  const handleSubItemClick = (target, e) => {
    e.preventDefault()
    scrollTo(target)
  }

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}${showBack ? ' navbar--fixed' : ''}`}
      onMouseLeave={handleMenuMouseLeave}
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onMouseEnter={handleLogoEnter}
          onClick={(e) => {
            e.preventDefault()
            if (showBack) {
              onBackClick?.()
            } else {
              scrollTo('hero')
            }
          }}
        >
          <img src={logoUrl} alt="浪尖儿" className="navbar__logo-img" ref={logoImgRef} />
          <span className="navbar__logo-text">浪尖儿</span>
        </a>

        {/* Back Button (when on Contact page) */}
        {showBack && (
          <button
            className="navbar__back-btn"
            onClick={onBackClick}
          >
            ← 返回
          </button>
        )}

        {/* Desktop Nav with hover dropdown */}
        {!showBack && (
          <ul className="navbar__links" role="menubar">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.id}
                className="navbar__item"
                onMouseEnter={() => handleMenuMouseEnter(item.id)}
              >
                <a
                  href={`#${item.id}`}
                  className={`pill navbar__link${activeSection === item.id ? ' is-active' : ''}`}
                  aria-label={item.label}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={el => { circleRefs.current[i] = el }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </a>

                {/* Hover Dropdown */}
                {activeMenu === item.id && item.subItems && (
                  <div className="navbar__dropdown">
                    <div className="navbar__dropdown-arrow" />
                    <div className="navbar__dropdown-content">
                      {item.subItems.map((sub, j) => (
                        <a
                          key={j}
                          href={`#${sub.target}`}
                          className="navbar__dropdown-item"
                          onClick={(e) => handleSubItemClick(sub.target, e)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <ul>
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </a>
              {item.subItems && menuOpen && (
                <div className="navbar__mobile-subs">
                  {item.subItems.map((sub, j) => (
                    <a
                      key={j}
                      href={`#${sub.target}`}
                      className="navbar__mobile-sub"
                      onClick={(e) => handleSubItemClick(sub.target, e)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
