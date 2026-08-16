import { motion } from 'motion/react'
import './Hero.css'

export default function Hero({ phase }) {
  const bgVisible = phase !== 'loading'
  const contentVisible = phase === 'content' || phase === 'ready'

  return (
    <section id="hero" className="hero">
      {/* Background Image — 13 (2).png */}
      <motion.div
        className="hero__bg-image"
        initial={{ opacity: 0 }}
        animate={bgVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* Dark overlay */}
      <motion.div
        className="hero__overlay"
        initial={{ opacity: 0 }}
        animate={bgVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* 文字内容 */}
      <motion.div
        className="hero__inner"
        initial={{ opacity: 0, y: 60 }}
        animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left: Title & CTA */}
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -40 }}
          animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="hero__tag"
            initial={{ opacity: 0, y: 20 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__tag-line" />
            浪尖儿社区
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span
              className="hero__title-line"
              initial={{ opacity: 0, y: 30 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              站上浪潮之巅
            </motion.span>
            <motion.span
              className="hero__title-line hero__title-line--accent"
              initial={{ opacity: 0, y: 30 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              定义你的未来
              <span className="hero__title-glow" />
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            汇聚最优秀的学长学姐，为你提供前沿技术课程、升学指导和职业规划。
            <br />
            在这里，每个人都是浪潮的推动者。
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="#footer"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('footer')
                if (!el) return
                const navbar = document.querySelector('.navbar')
                const offset = navbar?.offsetHeight || 80
                const rect = el.getBoundingClientRect()
                const top = window.scrollY + rect.top - offset
                window.scrollTo({ top, behavior: 'smooth' })
              }}
            >
              加入我们
              <span className="hero__btn-arrow">→</span>
            </a>
            <a href="#courses" className="btn btn-orange">
              探索课程
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-num">50+</span>
              <span className="hero__stat-label">学长学姐</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">30+</span>
              <span className="hero__stat-label">精品课程</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">1000+</span>
              <span className="hero__stat-label">社区成员</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Group Portrait — 13.png */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={contentVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.95 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="hero__portrait-group">
            <img src="/13-people.png" alt="浪尖儿社区成员" className="hero__portrait-img" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={contentVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </motion.div>
    </section>
  )
}
