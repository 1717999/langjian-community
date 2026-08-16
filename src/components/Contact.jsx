import { motion } from 'motion/react'
import './Contact.css'

const CONTACT_INFO = [
  { label: '地址', labelEn: 'Address', value: '北京市海淀区中关村大街 1 号' },
  { label: '电话', labelEn: 'Telephone', value: '400-888-6666' },
  { label: '微信', labelEn: 'WeChat', value: 'langjianer2026' },
  { label: '邮箱', labelEn: 'Email', value: 'hello@langjianer.com' },
]

const SOCIALS = [
  { name: '微信', color: '#09BB07', icon: '💬' },
  { name: '小红书', color: '#FE2C55', icon: '📕' },
  { name: 'Bilibili', color: '#00AEEC', icon: '📺' },
  { name: 'GitHub', color: '#ffffff', icon: '💻' },
]

export default function Contact() {
  return (
    <motion.section
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-bg-text">CONTACT</div>
      <div className="contact-container">
        {/* Left: Contact Info */}
        <div className="contact-left">
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            联系我们
          </motion.h1>

          <motion.div
            className="contact-info-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {CONTACT_INFO.map((item, index) => (
              <div key={index} className="contact-info-item">
                <span className="contact-info-label">{item.labelEn}</span>
                <p className="contact-info-value">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="contact-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="contact-socials-label">关注我们</span>
            <div className="contact-socials-list">
              {SOCIALS.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="contact-social-item"
                  style={{ '--social-color': social.color }}
                >
                  <span className="contact-social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: QR Code */}
        <div className="contact-right">
          <motion.div
            className="contact-qr-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="contact-qr-circle">
              <div className="contact-qr-ring" />
              <div className="contact-qr-inner">
                <div className="contact-qr-placeholder">
                  <div className="contact-qr-pattern">
                    {Array.from({ length: 81 }).map((_, i) => (
                      <div key={i} className="contact-qr-cell" style={{ opacity: Math.random() > 0.5 ? 1 : 0.3 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="contact-qr-label">扫码添加微信</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
