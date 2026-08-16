import { motion } from 'motion/react'
import LayoutGrid from './LayoutGrid'
import './AICommunity.css'

const SkeletonOne = () => (
  <div>
    <p className="layout-grid__title">
      芯火村共创地图
    </p>
    <p className="layout-grid__subtitle">
      带你用 AI 做出第一个作品
    </p>
    <p className="layout-grid__desc">
      芯火村·南双才·仁仁AI实验剧场，带领你跨越技术鸿沟，
      平静零晚课，第一次做出自己的AI作品！
    </p>
  </div>
)

const SkeletonTwo = () => (
  <div>
    <p className="layout-grid__title">芯火村村民档案</p>
    <p className="layout-grid__desc">
      每一个平凡的你，都是温暖村庄的光
    </p>
  </div>
)

const SkeletonThree = () => (
  <div>
    <p className="layout-grid__title">扫码入村</p>
    <p className="layout-grid__desc">
      芯火村·南双才·芯火实验剧场，扫码即可入村，
      开启你的AI创造之旅。
    </p>
  </div>
)

const SkeletonFour = () => (
  <div>
    <p className="layout-grid__title">芯火村地图</p>
    <p className="layout-grid__desc">
      欢迎来到芯火村！在这里，每一个人都是AI创作者，
      一起探索无限可能。
    </p>
  </div>
)

const CARDS = [
  {
    id: 1,
    className: 'layout-grid__card--wide',
    thumbnail: '/14.png',
    content: <SkeletonOne />,
  },
  {
    id: 2,
    className: '',
    thumbnail: '/14 (2).png',
    content: <SkeletonTwo />,
  },
  {
    id: 3,
    className: '',
    thumbnail: '/14 (3).png',
    content: <SkeletonThree />,
  },
  {
    id: 4,
    className: 'layout-grid__card--wide',
    thumbnail: '/14 (4).png',
    content: <SkeletonFour />,
  },
]

function AICommunity() {
  return (
    <section className="ai-community">
      <div className="container">
        {/* 上 1/3：标题区（样式对齐 Seniors） */}
        <motion.div
          className="ai-community__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ai-community__tag">
            <span className="ai-community__tag-line" />
            —AI社区
          </div>
          <h2 className="ai-community__title">
            从零到做出自己的 AI 项目
            <span className="ai-community__title-sub">PROJECT</span>
          </h2>
          <p className="ai-community__desc">
            定时社区同学直播分享经验，AI项目作品层出不穷
          </p>
        </motion.div>

        {/* 下 2/3：四宫格图片布局 */}
        <motion.div
          className="ai-community__grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <LayoutGrid cards={CARDS} />
        </motion.div>
      </div>
    </section>
  )
}

export default AICommunity
