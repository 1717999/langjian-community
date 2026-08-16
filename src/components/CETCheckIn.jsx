import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import Button from './Button'
import './CETCheckIn.css'

const STATS = [
  { value: '215', unit: '人', label: '总报名' },
  { value: '211', unit: '人', label: '四级考生' },
  { value: '4', unit: '人', label: '六级考生' },
  { value: '54', unit: '人', label: '全勤学员' },
  { value: '5400', unit: '元', label: '红包奖励' },
]

const CAROUSEL_IMAGES = [
  {
    src: '/8 (2).jpg',
    title: '督学大纲打卡',
    desc: '社区同学每日坚持打卡，完成督学大纲全流程学习',
  },
  {
    src: '/8 (3).jpg',
    title: '红包激励反馈',
    desc: '全勤学员喜获红包奖励，备考之路不再孤单',
  },
  {
    src: '/8 (4).jpg',
    title: '学员成绩展示',
    desc: '打卡群员晒出成绩单，互相监督共同进步',
  },
]

function CETCheckIn() {
  const [current, setCurrent] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const prev = () => setCurrent((c) => (c - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  const next = () => setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length)

  return (
    <section className="cet">
      <div className="container">
        <div className="cet__inner">
          {/* Left: Text + Data */}
          <motion.div
            className="cet__content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cet__label">
              <span className="cet__label-bar" />
              <span>四六级打卡</span>
            </div>
            <h3 className="cet__title">
              互相监督
              <br />
              <span className="cet__title-accent">比独自坚持更容易</span>
            </h3>
            <p className="cet__desc">
              一个人备考很容易放弃，但一群人互相监督、每日打卡就不同了。
              我们用红包和全勤奖做激励，让备考之路不再孤单。
            </p>

            {/* Stats Row */}
            <div className="cet__stats">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="cet__stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="cet__stat-val">
                    {stat.value}
                    <span className="cet__stat-unit">{stat.unit}</span>
                  </span>
                  <span className="cet__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Feature pills */}
            <div className="cet__features">
              <span className="cet__feature">每日打卡</span>
              <span className="cet__feature">红包激励</span>
              <span className="cet__feature">督学大纲</span>
              <span className="cet__feature">全勤奖励</span>
            </div>

            {/* Study-Tracker Button */}
            <Button onClick={() => setShowModal(true)}>
              Study‑Tracker
            </Button>
          </motion.div>

          {/* Right: Image Carousel */}
          <motion.div
            className="cet__carousel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cet__carousel-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="cet__carousel-image"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img src={CAROUSEL_IMAGES[current].src} alt={CAROUSEL_IMAGES[current].title} />
                  <div className="cet__carousel-overlay">
                    <span className="cet__carousel-title">
                      {CAROUSEL_IMAGES[current].title}
                    </span>
                    <span className="cet__carousel-desc">
                      {CAROUSEL_IMAGES[current].desc}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="cet__carousel-controls">
              <button className="cet__carousel-btn" onClick={prev} aria-label="上一张">
                ‹
              </button>
              <div className="cet__carousel-dots">
                {CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    className={`cet__carousel-dot${i === current ? ' cet__carousel-dot--active' : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`第 ${i + 1} 张`}
                  />
                ))}
              </div>
              <button className="cet__carousel-btn" onClick={next} aria-label="下一张">
                ›
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && createPortal(
        <div
          className="cet__modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="cet__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cet__modal-close" onClick={() => setShowModal(false)} aria-label="关闭">
              ×
            </button>
            <img src="/8.jpg" alt="督学大纲" />
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}

export default CETCheckIn
