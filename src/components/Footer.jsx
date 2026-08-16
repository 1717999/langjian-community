import SplitText from './SplitText'
import './Footer.css'

export default function Footer({ onContactClick }) {
  return (
    <footer id="footer" className="footer section">
      <div className="footer__inner container">
        {/* CTA */}
        <div className="footer__cta">
          <h2 className="footer__cta-title">
            <SplitText
              text="加入浪尖儿"
              className="footer__cta-title--primary"
              tag="span"
              delay={60}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="left"
            />
            <SplitText
              text="成为浪潮"
              className="footer__cta-title--accent"
              tag="span"
              delay={60}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="left"
            />
          </h2>
          <p className="footer__cta-desc">
            无论你是想来分享经验，还是希望找到前行的方向——
            <br />
            在这里，我们彼此照亮。
          </p>
          <button
            className="footer__cta-button"
            style={{ '--clr': '#00d4ff' }}
            onClick={onContactClick}
          >
            <span className="footer__cta-button-icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="footer__cta-button-icon"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="footer__cta-button-icon footer__cta-button-icon--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </span>
            联系我们
          </button>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <div className="footer__divider" />
          <div className="footer__bottom-content">
            <span className="footer__brand">浪尖儿社区</span>
            <span className="footer__copyright">
              © 2026 浪尖儿社区. 站上浪潮之巅，定义你的未来。
            </span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="footer__bg">
        <div className="footer__bg-glow footer__bg-glow--1" />
        <div className="footer__bg-glow footer__bg-glow--2" />
      </div>
    </footer>
  )
}
