import { useState, useRef, useEffect, useCallback } from 'react'
import './Seniors.css'

const SENIORS = [
  {
    id: 1,
    name: '一博学长',
    image: '/2.png',
    tag: '讲规划与创业',
    headline: '高校创业就业指导老师',
    details: [
      '高校创业就业指导老师，深耕升学路径与本科规划',
      'MBA硕士 · 教育公司创始人',
      '7年创业经验，大三获200万融资，大学4年个人收入达7位数',
      '大学创业第3年公司GMV破亿',
    ],
  },
  {
    id: 2,
    name: '锡峰学长',
    image: '/2 (2).png',
    tag: '',
    headline: '',
    details: [],
  },
  {
    id: 3,
    name: '浩源学长',
    image: '/2 (3).png',
    tag: '',
    headline: '',
    details: [],
  },
  {
    id: 4,
    name: '阿文学长',
    image: '/2 (4).png',
    tag: '讲实习 我们有',
    headline: '社区常驻学长',
    details: [
      '西南大学经管院年级长',
      '杭州电商公司CEO',
      '千万级IP操盘手',
      '多家人力资源公司顾问',
      '每年带领1000+大学生拿到实习校招offer',
    ],
  },
  {
    id: 5,
    name: '子润学长',
    image: '/2 (5).png',
    tag: '讲大厂就业 我们有',
    headline: '双非金融大学四年走过4家大厂实习',
    details: [
      '职场经历：双非到大厂，多个大厂校招offer，现北京某互联网大厂在职',
      '实习经历：大学四年累计完成10+段高质量实习，覆盖小米、得物、新浪等知名企业',
      '主导运营实习社群，总用户超1000人，成功帮助100+同学优化简历',
      '自媒体博主，单条视频播放量200w+，单篇文章阅读量5w+',
      '在抖音、小红书等多平台分享求职经验技巧，影响众多求职学子',
    ],
  },
  {
    id: 6,
    name: 'Orea学姐',
    image: '/2 (6).png',
    tag: '讲保研 我们有',
    headline: '普通学校保研清北复交，专科升本考研985高校',
    details: [
      '北京大学政治学直博，绩点综测双第一保研，夏令营考核获优营第一',
      '核心期刊论文3篇，学术专著1部，署名出版物2部（国家级综合出版社）',
      '官媒报刊理论版文章若干，会议论坛入围10+项，均为第一作者',
      '国家级、省级大创优秀结项',
      '雅思7分，曾赴美国加州大学伯克利分校、英国牛津大学交换',
      '国家奖学金、北京市三好学生、北京市优秀毕业生、北京大学三好学生',
      '北京大学研究生会主席团候选人、博士生讲师团成员、马院讲师团常务副团长',
    ],
  },
  {
    id: 7,
    name: 'Ethan学长',
    image: '/2 (7).png',
    tag: '讲出国留学 我们有',
    headline: '藤校港大南洋理工学长学姐团，真实经验共享',
    details: [
      '某985本科，南洋理工大学硕士',
      '历任市学联、校学生会、院学生会主席等学生工作职务',
      '曾获省级优秀学生干部、校十佳本科生等荣誉',
      '曾获南洋理工大学、香港科技大学、墨尔本大学、UCL、KCL、爱丁堡大学等offer',
      '曾获美团、华为、中兴、海康威视等多家企业实习/正式录用offer',
    ],
  },
  {
    id: 8,
    name: 'Leona学姐',
    image: '/2 (8).png',
    tag: '讲绩点 我们有',
    headline: '专业前三，高数现代单科满分选手',
    details: [
      '本科期间连续3年综测前10%，曾位列专业第一（1/299）',
      '连续3年获得尖子生学院和校级特等奖学金',
      '校"三好学生"、"优秀学生干部"，荣获"优秀学生个人"称号',
      '六级604，雅思7（6.5）',
    ],
  },
  {
    id: 9,
    name: '子晨学长',
    image: '/2 (9).png',
    tag: '讲考研 我们有',
    headline: '双非考研985，顶流逆袭',
    details: [
      '南开大学硕士在读，曾获国家奖学金、四川省优秀毕业生',
      '发表SCI论文5篇，中文核心期刊论文2篇，第一作者发表3篇',
      '申请专利2项，计算机软件著作权1项',
      '带领团队获第十八届"挑战杯"全国大学生课外学术科技作品竞赛"黑科技"一等奖',
      '中国国际大学生创新大赛（2023）铜奖等国家级奖项5项，省级4项，校级10余项',
      '主持国家级大学生创新创业训练计划项目1项，参与省级项目5项',
    ],
  },
  {
    id: 10,
    name: 'XX学长',
    image: '/2 (10).png',
    tag: '',
    headline: '',
    details: [],
  },
  {
    id: 11,
    name: '唐旻学姐',
    image: '/2 (11).png',
    tag: '讲论文 我们有',
    headline: 'NATURE+SCI刊发者，自学论文发表',
    details: [
      '四川大学新能源与低碳技术研究院直博',
      '发表两篇Nature子刊，一篇SCI二区论文',
      '中国国际大学生创新竞赛（原"互联网+"）国家级银奖、省级金奖',
      '"挑战杯"四川省大学生课外学术科技作品竞赛省级特等奖',
      '专利8项，软著4项',
      '大学生创新创业训练计划（大创）国家级、省级项目',
      'Wteam中国00后创业者关注榜、中国00后AI创意关注榜在榜',
    ],
  },
]

const VISIBLE = 5
const CENTER_INDEX = (VISIBLE - 1) / 2
const CARD_GAP = 180
const SLOT_SPACING = 200
const AUTO_SPEED = 0.1
const HOVER_LERP = 0.025

export default function Seniors() {
  const [offset, setOffset] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [centeredIndex, setCenteredIndex] = useState(0)
  const animRef = useRef(null)
  const offsetRef = useRef(0)
  const lastFrameRef = useRef(performance.now())

  const totalCards = SENIORS.length
  const totalScrollWidth = totalCards * CARD_GAP

  const animate = useCallback((now) => {
    const dt = Math.min((now - lastFrameRef.current) / 16.67, 3)
    lastFrameRef.current = now

    if (hoveredIndex !== null) {
      const cardPos = hoveredIndex * CARD_GAP
      const target = cardPos - CENTER_INDEX * CARD_GAP
      let normalizedTarget = ((target % totalScrollWidth) + totalScrollWidth) % totalScrollWidth

      const current = offsetRef.current
      let diff = normalizedTarget - current
      if (diff > totalScrollWidth / 2) diff -= totalScrollWidth
      if (diff < -totalScrollWidth / 2) diff += totalScrollWidth

      const t = HOVER_LERP * dt
      const eased = t * (2 - t)
      const next = current + diff * eased
      offsetRef.current = next
      setOffset(next)
    } else {
      const next = offsetRef.current + AUTO_SPEED * dt
      const wrapped = next >= totalScrollWidth ? next - totalScrollWidth : next < 0 ? next + totalScrollWidth : next
      offsetRef.current = wrapped
      setOffset(wrapped)
    }

    animRef.current = requestAnimationFrame(animate)
  }, [hoveredIndex, totalScrollWidth])

  useEffect(() => {
    lastFrameRef.current = performance.now()
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [animate])

  useEffect(() => {
    let closest = 0
    let minDist = Infinity
    for (let i = 0; i < totalCards; i++) {
      const cardPos = i * CARD_GAP
      const viewCenter = offset + CENTER_INDEX * CARD_GAP
      let dist = cardPos - viewCenter
      if (dist > totalScrollWidth / 2) dist -= totalScrollWidth
      if (dist < -totalScrollWidth / 2) dist += totalScrollWidth
      if (Math.abs(dist) < minDist) {
        minDist = Math.abs(dist)
        closest = i
      }
    }
    if (closest !== centeredIndex) {
      setCenteredIndex(closest)
    }
  }, [offset, totalCards, totalScrollWidth, centeredIndex])

  const getContinuousSlot = (index) => {
    const cardPos = index * CARD_GAP
    const viewCenter = offset + CENTER_INDEX * CARD_GAP
    let dist = cardPos - viewCenter
    if (dist > totalScrollWidth / 2) dist -= totalScrollWidth
    if (dist < -totalScrollWidth / 2) dist += totalScrollWidth
    return dist / CARD_GAP
  }

  const getCardStyle = (index) => {
    const slot = getContinuousSlot(index)
    const absSlot = Math.abs(slot)

    const xPos = slot * SLOT_SPACING

    let scale
    if (absSlot < 0.5) {
      scale = 1.0
    } else if (absSlot < 1.5) {
      scale = 0.7
    } else if (absSlot < 2.5) {
      scale = 0.5
    } else {
      scale = 0.35
    }

    const zIndex = Math.round(100 - absSlot * 10)
    const opacity = Math.max(0.25, 1 - absSlot * 0.2)

    const COMP_HEIGHT = 680
    const yComp = (1 - scale) * COMP_HEIGHT / 2

    return {
      transform: `translate3d(calc(${xPos}px - 50%), ${yComp}px, 0) scale(${scale})`,
      zIndex,
      opacity,
    }
  }

  const current = SENIORS[centeredIndex]

  return (
    <section id="seniors" className="seniors section">
      <div className="seniors__deco seniors__deco--top" />

      <div className="seniors__inner container">
        <div className="seniors__header">
          <div className="seniors__header-tag">
            <span className="seniors__header-line" />
            社区力量
          </div>
          <h2 className="seniors__title">
            常驻学长学姐
            <span className="seniors__title-sub">Seniors</span>
          </h2>
          <p className="seniors__desc">
            来自顶尖高校与企业的学长学姐，为你提供最真实的经验与指导
          </p>
        </div>

        <div className="seniors__carousel">
          <div className="seniors__track">
            {SENIORS.map((senior, i) => {
              const continuousSlot = getContinuousSlot(i)
              const isCenter = Math.abs(continuousSlot) < 0.5
              return (
                <div
                  key={senior.id}
                  className={`seniors__person${isCenter ? ' seniors__person--center' : ''}`}
                  style={getCardStyle(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="seniors__person-img-wrap">
                    <img src={senior.image} alt={senior.name} className="seniors__person-img" />
                  </div>
                  <div className="seniors__person-info">
                    <h3 className="seniors__person-name">{senior.name}</h3>
                    {senior.tag && (
                      <p className="seniors__person-tag">{senior.tag}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="seniors__fade seniors__fade--left" />
          <div className="seniors__fade seniors__fade--right" />
        </div>

        {current && current.tag && (
          <div className="seniors__detail">
            <div className="seniors__detail-top">
              <span className="seniors__detail-tag">{current.tag}</span>
              <h3 className="seniors__detail-headline">{current.headline}</h3>
              <span className="seniors__detail-badge">{current.name}</span>
            </div>
            <div className="seniors__detail-body">
              {current.details.map((line, idx) => (
                <p key={idx} className="seniors__detail-line">· {line}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="seniors__deco seniors__deco--bottom" />
    </section>
  )
}
