import { motion } from 'motion/react'
import ChinaMap from './ChinaMap'
import { InfiniteMovingCards } from './InfiniteMovingCards'
import Masonry from './Masonry'
import DraggableFeedback from './DraggableFeedback'
import PublicWelfare from './PublicWelfare'
import './Offline.css'

const PHOTOS = [
  '/1 (2).jpg',
  '/1 (3).jpg',
  '/1 (4).jpg',
  '/1 (5).jpg',
  '/1 (6).jpg',
  '/1 (7).jpg',
  '/1 (8).jpg',
  '/1 (9).jpg',
  '/1 (10).jpg',
]

const STUDY_PHOTOS = [
  '/17.jpg',
  '/17 (2).jpg',
  '/17 (3).jpg',
  '/17 (4).jpg',
]

const MASONRY_ITEMS = [
  { id: 1, img: '/17 (5).jpg' },
  { id: 2, img: '/17 (6).jpg' },
  { id: 3, img: '/17 (7).jpg' },
  { id: 4, img: '/17 (8).jpg' },
  { id: 5, img: '/17 (9).jpg' },
]

export default function Offline() {
  return (
    <section id="offline" className="offline section">
      <div className="offline__inner container">
        <motion.div
          className="offline__info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="offline__tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="offline__tag-line" />
            线下社区
          </motion.div>
          <motion.h2
            className="offline__title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >全国布局</motion.span>
            <br />
            <motion.span
              className="offline__title-accent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >线下社区版图</motion.span>
          </motion.h2>
          <motion.p
            className="offline__desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            线上社区每年吸纳 5000-7000 名准大一新生，
            <br />
            覆盖全国 32 个省份及海外城市；
            <br />
            线下已建立 31 个社区，举办 50+ 场交流活动。
          </motion.p>
          <motion.div
            className="offline__stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <div className="offline__stat">
              <span className="offline__stat-num">31</span>
              <span className="offline__stat-label">线下社区</span>
            </div>
            <div className="offline__stat-divider" />
            <div className="offline__stat">
              <span className="offline__stat-num">50+</span>
              <span className="offline__stat-label">交流活动</span>
            </div>
            <div className="offline__stat-divider" />
            <div className="offline__stat">
              <span className="offline__stat-num">7000+</span>
              <span className="offline__stat-label">线上成员</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="offline__map-wrap"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="offline__map-glow" />
          <ChinaMap />
        </motion.div>
      </div>

      {/* 图片滚动展示 */}
      <motion.div
        className="offline__gallery"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <InfiniteMovingCards
          items={PHOTOS}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </motion.div>

      {/* 香港、电子科技大学游学 */}
      <motion.div
        id="study-tour"
        className="offline__study container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="offline__study-images">
          {STUDY_PHOTOS.map((src, i) => (
            <div key={i} className={`offline__study-img offline__study-img--${i + 1}`}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="offline__study-info">
          <div className="offline__tag">
            <span className="offline__tag-line" />
            游学活动
          </div>
          <h3 className="offline__study-title">香港、电子科技大学游学</h3>
          <p className="offline__study-desc">
            25年浪尖儿共带领100+名社区同学到香港大学、电子科技大学游学，走进顶尖学府，感受学术氛围，拓展眼界与认知。
          </p>
        </div>
      </motion.div>

      {/* 竖版图片瀑布流 */}
      <div className="offline__masonry container">
        <Masonry
          items={MASONRY_ITEMS}
          ease="power3.out"
          duration={0.6}
          stagger={0.08}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>

      {/* 社区反馈 */}
      <div id="feedback">
        <DraggableFeedback />
      </div>

      {/* 社区公益 */}
      <div id="welfare">
        <PublicWelfare />
      </div>
    </section>
  )
}
