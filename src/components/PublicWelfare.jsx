import { motion } from 'motion/react'
import { Spotlight } from './ui/spotlight'
import './PublicWelfare.css'

const WELFARE_IMAGES = [
  '/21.jpg',
  '/21 (2).jpg',
  '/21 (3).jpg',
]

export default function PublicWelfare() {
  return (
    <section className="welfare-section">
      <div className="welfare-container">
        {/* Spotlight Background */}
        <div className="welfare-spotlight-bg">
          <div className="welfare-grid-bg" />
          <Spotlight
          className="welfare-spotlight"
          fill="#22c55e"
        />
        </div>

        <div className="welfare-content">
          {/* Text Section */}
          <motion.div
            className="welfare-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="welfare-tag">
              <span className="welfare-tag-line" />
              社会公益
            </div>

            <h2 className="welfare-title">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                微小善意
              </motion.span>
              <br />
              <motion.span
                className="welfare-title-accent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                滚烫担当
              </motion.span>
            </h2>

            <motion.p
              className="welfare-desc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              广西水灾，社区带着浪尖儿署名向灾区捐款，一份微小善意，一份滚烫担当。
              <br />
              浪尖儿后续还会带着更多同学帮助他人，回馈社会。
              <br />
              <span className="welfare-desc-highlight">
                浪尖儿社区不是单人独行，而是一群人的同心向善。
              </span>
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="welfare-images"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {WELFARE_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                className={`welfare-image-card welfare-image-card--${i}`}
                initial={{ opacity: 0, y: 40, rotate: i === 1 ? 3 : -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? -3 : 3 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <img src={src} alt="公益活动" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
