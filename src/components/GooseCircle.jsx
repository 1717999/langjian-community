import { motion } from 'motion/react'
import ExpandableCard from './ExpandableCard'
import './GooseCircle.css'

const GOOSE_CIRCLE_CARDS = [
  {
    title: '打卡第30天',
    description: '今日英语单词打卡30天，坚持就是胜利！',
    src: '/12.png',
    ctaText: '查看详情',
    content: () => (
      <p>
        社区同学分享坚持30天打卡的心得体会。从最初的艰难到现在的习惯养成，
        每天坚持学习英语单词，不仅词汇量提升了，更重要的是养成了自律的好习惯。
        在鹅圈子里，有一群志同道合的小伙伴互相监督、互相鼓励，让坚持变得不再孤单。
        <br /><br />
        打卡奖励机制让坚持更有动力：大疆相机、iPad、Apple Pencil、麦当劳礼品卡等福利等你来拿！
        累计已有100+名同学通过打卡获得了丰厚奖励，奖品送达全国27个城市。
      </p>
    ),
  },
  {
    title: '完成第一个AI项目',
    description: '今天完成了第一个AI项目，从0到1的感觉太棒了！',
    src: '/12 (2).png',
    ctaText: '查看详情',
    content: () => (
      <p>
        从零开始完成了人生第一个AI项目！在社区导师的带领下，从选题到落地，
        经历了无数次的调试和优化。这个过程中学到的不仅是技术，更是解决问题的思维方式。
        <br /><br />
        鹅圈子聚集了全国1.05万名成员，累计产出1.65万条动态。
        在这里，可以看到其他同学的学习成果、项目展示、经验分享，
        互相学习、共同进步，让成长之路不再孤单。
      </p>
    ),
  },
  {
    title: '接单赚钱',
    description: '接了第一个外包单，赚了2000块，来还愿了！',
    src: '/12 (3).png',
    ctaText: '查看详情',
    content: () => (
      <p>
        经过在社区的学习和实践，终于接到了人生第一个外包订单！
        从最初的紧张不安到顺利交付，这个过程让我收获了宝贵的经验。
        <br /><br />
        社区不仅提供技术学习，还教你如何接单、如何报价、如何与客户沟通。
        已有多位同学在社区的帮助下成功接单变现，实现经济独立。
        分享你的成功故事，激励更多同学勇敢迈出第一步！
      </p>
    ),
  },
  {
    title: '新人如何更好使用鹅圈子',
    description: '刚加入鹅圈子？看看这份新人指南！',
    src: '/12 (4).png',
    ctaText: '查看详情',
    content: () => (
      <p>
        欢迎加入鹅圈子！这里是社区的新人使用指南，帮助你快速融入：
        <br /><br />
        <strong>1. 完善个人资料</strong>：上传头像、填写简介，让大家认识你
        <br /><br />
        <strong>2. 加入打卡计划</strong>：选择感兴趣的学习计划，每天坚持打卡
        <br /><br />
        <strong>3. 参与互动</strong>：点赞、评论、回复他人的动态，建立社交连接
        <br /><br />
        <strong>4. 分享你的进度</strong>：记录学习成果、分享心得体会，激励他人
        <br /><br />
        <strong>5. 获取奖励</strong>：坚持打卡即可获得大疆相机、iPad、Apple Pencil等丰厚奖品！
      </p>
    ),
  },
  {
    title: '鹅圈子奖励',
    description: '9款周边福利，累计送给100+名同学！',
    src: '/12 (5).png',
    ctaText: '查看详情',
    content: () => (
      <p>
        为了鼓励大家坚持学习、积极分享，鹅圈子设置了丰富的打卡奖励：
        <br /><br />
        <strong>🎁 9款精美周边：</strong>
        <br />• 大疆相机（打卡全勤奖）
        <br />• iPad（月度优秀学员）
        <br />• Apple Pencil（分享达人）
        <br />• 麦当劳礼品卡（随机红包）
        <br />• 更多神秘周边等你来解锁！
        <br /><br />
        <strong>📊 奖励数据：</strong>
        <br />• 累计送出100+名同学
        <br />• 奖品送达全国27个城市
        <br />• 1.05万名成员共同见证
        <br /><br />
        快来鹅圈子，把奖品带回家吧！
      </p>
    ),
  },
]

function GooseCircle() {
  return (
    <section className="goose">
      <div className="container">
        <div className="goose__inner">
          {/* Left: Expandable Cards */}
          <motion.div
            className="goose__cards-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ExpandableCard cards={GOOSE_CIRCLE_CARDS} />
          </motion.div>

          {/* Right: Text + Data */}
          <motion.div
            className="goose__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="goose__label">
              <span className="goose__label-bar" />
              <span>鹅圈子 · 浪尖成长圈</span>
            </div>
            <h3 className="goose__title">
              来自不同地方的人
              <br />
              <span className="goose__title-accent">在这里晒学习、聊心得</span>
            </h3>
            <p className="goose__subtitle">
              1.05万名成员 · 1.65万条动态 · 9款周边送遍27个城市
            </p>

            {/* Stats Row */}
            <div className="goose__stats">
              {[
                { value: '1.05', unit: '万', label: '社区成员' },
                { value: '1.65', unit: '万', label: '累计动态' },
                { value: '100', unit: '+', label: '周边获奖者' },
                { value: '27', unit: '个', label: '送达城市' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="goose__stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="goose__stat-val">
                    {stat.value}
                    <span className="goose__stat-unit">{stat.unit}</span>
                  </span>
                  <span className="goose__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Perks strip */}
            <motion.div
              className="goose__perks"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="goose__perk">9款周边奖品</span>
              <span className="goose__perk-dot">·</span>
              <span className="goose__perk">大疆相机打卡奖励</span>
              <span className="goose__perk-dot">·</span>
              <span className="goose__perk">全国27城包邮</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GooseCircle
