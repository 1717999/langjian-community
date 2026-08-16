import { motion } from 'motion/react'
import AccordionGallery from './AccordionGallery'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import DomeGallery from './DomeGallery'
import './Results.css'

const DOME_GALLERY_IMAGES = [
  // 10.png ~ 10 (75).png (75张)
  ...Array.from({ length: 75 }, (_, i) => ({
    src: i === 0 ? '/10.png' : `/10 (${i + 1}).png`,
    alt: `校招Offer ${i + 1}`,
  })),
  // 9.jpg + 9 (2).jpg ~ 9 (5).jpg (5张)
  { src: '/9.jpg', alt: '实习素材 1' },
  ...Array.from({ length: 4 }, (_, i) => ({
    src: `/9 (${i + 2}).jpg`,
    alt: `实习素材 ${i + 2}`,
  })),
  // 11.png + 11 (2).png ~ 11 (26).png (26张)
  { src: '/11 (26).png', alt: '公司反馈 26' },
  ...Array.from({ length: 25 }, (_, i) => ({
    src: `/11 (${i + 2}).png`,
    alt: `公司反馈 ${i + 2}`,
  })),
]

function Results() {
  return (
    <section id="results" className="results">
      <div className="container">
        {/* Header */}
        <motion.div
          className="results__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="results__label">
            <span className="results__label-bar" />
            <span>社区成果</span>
          </div>
          <h2 className="results__title">
            结果不会<span className="results__title-accent">骗人</span>
          </h2>
          <p className="results__subtitle">
            真实数据 · 真实案例 · 真实改变——来看社区的学长学姐们拿到了什么
          </p>
        </motion.div>

        {/* Campus Economy Case Study */}
        <motion.div
          id="campus-economy"
          className="results__case"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="results__case-label">
            <span className="results__label-bar" />
            <span>校园经济</span>
          </div>
          <h3 className="results__case-title">校园经济项目</h3>

          <div className="results__case-layout">
            {/* Left: Accordion Gallery */}
            <div className="results__case-gallery">
              <AccordionGallery
                items={[
                  { image: '/3 (2).jpg', label: '创业故事', alt: '案例图片1' },
                  { image: '/3 (3).jpg', label: '成果展示', alt: '案例图片2' },
                  { image: '/3 (4).jpg', label: '团队合影', alt: '案例图片3' },
                ]}
                defaultIndex={0}
                height={440}
                gap={12}
                radius={12}
                expandRatio={0.55}
                grayscale={false}
                accentColor="#00e5ff"
                overlayColor="#0a0713"
                textColor="#ffffff"
                showLabels={true}
                trigger="hover"
              />
            </div>

            {/* Right: Avatar + Quote + Description */}
            <div className="results__case-info">
              {/* Top: Avatar + Bold Quote */}
              <div className="results__case-quote">
                <div className="results__case-avatar">
                  <img src="/3.jpg" alt="阿飞头像" />
                </div>
                <div className="results__case-quote-text">
                  <p className="results__case-quote-line">又完成一件人生大事</p>
                  <p className="results__case-quote-line">谁说00后农村的孩子不能靠自己逆袭成都安家</p>
                </div>
              </div>

              {/* Bottom: Description Card */}
              <div className="results__case-desc-card">
                <p className="results__case-desc-text">
                  社区同学阿飞在一博学长的带队下，兼职创业涵盖电脑、校园卡、四件套等校园经济，带领300大学生大一期间就赚钱经济独立，生活费自由，养活自己，累计营收80万，在成都买房，提车。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* IP Incubation Section */}
        <motion.div
          id="ip-incubation"
          className="results__case results__case--ip"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="results__case-layout results__case-layout--ip">
            {/* Left: Tag + Title + Description (1/3) */}
            <div className="results__case-info results__case-info--ip">
              <div className="results__case-subtitle-tag">
                <span className="results__case-tag-text">— 社区成果</span>
              </div>
              <h3 className="results__case-title results__case-title--ip">IP孵化</h3>
              <div className="results__case-desc-card results__case-desc-card--ip">
                <p className="results__case-desc-text">
                  累计在社区内寻找，培养孵化21名全国大学IP博主和20+名校园IP博主，其中博主，涨粉一个月接近30w，发出薪资5w+
                </p>
              </div>
            </div>

            {/* Right: ScrollStack (2/3) */}
            <div className="results__case-gallery results__case-gallery--stack">
              <ScrollStack
                itemDistance={120}
                itemScale={0.04}
                itemStackDistance={40}
                stackPosition="15%"
                scaleEndPosition="5%"
                baseScale={0.8}
                blurAmount={2}
                useWindowScroll={false}
                className="results__scroll-stack"
              >
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4.png" alt="IP博主主页1" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (2).png" alt="IP博主主页2" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (3).png" alt="IP博主主页3" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (4).png" alt="IP博主主页4" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (5).png" alt="IP博主主页5" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (6).png" alt="IP博主主页6" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (7).png" alt="IP博主主页7" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (8).png" alt="IP博主主页8" className="results__stack-img" />
                </ScrollStackItem>
                <ScrollStackItem itemClassName="results__stack-card">
                  <img src="/4 (9).png" alt="IP博主主页9" className="results__stack-img" />
                </ScrollStackItem>
              </ScrollStack>
            </div>
          </div>
        </motion.div>

        {/* AI 接单实战 Section */}
        <motion.div
          id="ai-practice"
          className="results__case results__case--ai"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="results__case-info results__case-info--ai">
            <div className="results__case-subtitle-tag">
              <span className="results__case-tag-text">— 社区成果</span>
            </div>
            <h3 className="results__case-title results__case-title--ai">AI接单实战</h3>
          </div>

          <div className="results__flip-cards">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10,7,19,0.75) 0%, rgba(10,7,19,0.55) 100%), url('/5 (3).jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <h4 className="flip-card__title">品牌网站</h4>
                  <p className="flip-card__desc">社区刘浩同学为全网几十万量级的自媒体博主搭建</p>
                </div>
                <div className="flip-card-back">
                  <img src="/5.jpg" alt="品牌网站截图" className="flip-card__img" />
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10,7,19,0.75) 0%, rgba(10,7,19,0.55) 100%), url('/5 (4).jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <h4 className="flip-card__title">就业问答智能体</h4>
                  <p className="flip-card__desc">社区陈哲永为企业搭建</p>
                </div>
                <div className="flip-card-back">
                  <img src="/5 (2).jpg" alt="就业问答智能体截图" className="flip-card__img" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 竞赛获奖 Section */}
        <motion.div
          id="competition"
          className="results__case results__case--competition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="results__case-info results__case-info--comp">
            <div className="results__case-subtitle-tag">
              <span className="results__case-tag-text">— 社区成果</span>
            </div>
            <h3 className="results__case-title results__case-title--comp">竞赛获奖</h3>
          </div>

          <div className="results__competition-grid">
            {/* Left Card */}
            <div className="img-flip-card">
              <img src="/6.jpg" alt="竞赛图片1" className="img-flip-card__img" />
              <div className="img-flip-card__content">
                <p className="img-flip-card__title">国奖省奖</p>
                <p className="img-flip-card__desc">带领浪尖儿同学组队参赛，一共295位同学参加，其中275位同学获得国奖，20位同学获得省奖!!!国奖覆盖率90%以上，省奖覆盖率100%!!!</p>
              </div>
            </div>

            {/* Right Card */}
            <div className="img-flip-card">
              <img src="/6 (2).jpg" alt="竞赛图片2" className="img-flip-card__img" />
              <div className="img-flip-card__content">
                <p className="img-flip-card__title">国奖</p>
                <p className="img-flip-card__desc">带领浪尖儿同学，杀入第三届全国先进计算机技术创新大赛-国奖赛！</p>
              </div>
            </div>
          </div>

          <div className="results__competition-notes">
            <div className="results__competition-note">第十八届先进机器人及仿真技术大赛-国奖省奖</div>
            <div className="results__competition-note">第三届全国先进计算机技术创新大赛-国奖</div>
          </div>
        </motion.div>

        {/* 实习/校招offer Section */}
        <motion.div
          id="internship-offer"
          className="results__case results__case--offer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="results__case-info results__case-info--offer">
            <div className="results__case-subtitle-tag">
              <span className="results__case-tag-text">— 社区成果</span>
            </div>
            <h3 className="results__case-title results__case-title--offer">实习/校招offer</h3>
          </div>

          <div className="results__dome-gallery-wrap">
            <DomeGallery
              images={DOME_GALLERY_IMAGES}
              fit={0.75}
              minRadius={700}
              maxVerticalRotationDeg={6}
              dragDampening={1.2}
              grayscale={false}
            />
          </div>

          <div className="results__offer-desc">
            <p className="results__offer-text">
              浪尖儿输送的实习生，遍布全国各地，各种类型的公司，包含大厂、中厂、创业公司。涵盖AI科技、新媒体、互联网、电商、医疗等行业，涵盖产品经理、运营、销售等各类岗位。
            </p>
            <p className="results__offer-text results__offer-text--highlight">
              实习训练营90%以上offer率，100%好评，所有公司都反馈浪尖儿同学格外突出。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results
