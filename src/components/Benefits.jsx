import { useState } from 'react';
import CircularGallery from './CircularGallery';
import StickyScroll from './StickyScroll';
import ImageCarousel from './ImageCarousel';
import './Benefits.css';

const CERTIFICATE_ITEMS = [
  { image: '/15.jpg', text: 'AI 证书 1' },
  { image: '/15 (2).jpg', text: 'AI 证书 2' },
  { image: '/15 (3).jpg', text: 'AI 证书 3' },
  { image: '/15 (4).jpg', text: 'AI 证书 4' },
  { image: '/15 (5).jpg', text: 'AI 证书 5' },
];

const WORK_IMAGES = {
  video: ['/16.jpg', '/16 (2).jpg', '/16 (3).jpg'],
  resume: ['/16 (4).jpg', '/16 (5).jpg', '/16 (6).jpg', '/16 (7).jpg'],
  games: ['/16 (8).jpg', '/16 (9).jpg'],
  particles: ['/16 (10).jpg', '/16 (11).jpg'],
  projects: ['/16 (12).jpg', '/16 (13).jpg', '/16 (14).jpg', '/16 (15).jpg', '/16 (16).jpg', '/16 (17).jpg', '/16 (18).jpg', '/16 (19).jpg'],
};

const WORK_CONTENT = [
  {
    title: 'AI 视频',
    description: '社区邢增涛同学制作的AI视频，目前播放量50万+且还在增长中，被官媒（山西青年报）主动联系转发，被学校招生办选为官方宣传视频。',
    content: <ImageCarousel images={WORK_IMAGES.video} />,
  },
  {
    title: 'AI 个人简历网站',
    description: '里面有两个辅助拿到offer的优秀网站，是之前社区选出的优秀简历网站作品。',
    content: <ImageCarousel images={WORK_IMAGES.resume} />,
  },
  {
    title: 'AI 编程小游戏开发',
    description: '社区同学开发的多款AI编程小游戏，包含星际守护者、飞机大战、指尖长空、果刃狂想、水果忍者大作战等作品。',
    content: <ImageCarousel images={WORK_IMAGES.games} />,
    links: [
      { name: '星际守护者', url: 'https://fascinating-churros-7a2483.netlify.app/' },
      { name: '飞机大战', url: 'https://starlit-begonia-ae61e6.netlify.app/' },
      { name: '指尖长空', url: 'https://feijidazhan-dfz.netlify.app/' },
      { name: '星际守护者2', url: 'https://xiaoweifeiji.netlify.app/' },
      { name: '果刃狂想', url: 'https://gleeful-pika-d97edd.netlify.app/' },
      { name: '水果忍者大作战', url: 'https://gummy1803-ai.github.io/cut-fruits/' },
      { name: '水果噜噜', url: 'https://flourishing-belekoy-0c13c3.netlify.app/' },
    ],
  },
  {
    title: 'AI 酷炫 3D 粒子动态',
    description: '社区同学制作的AI酷炫3D粒子动态作品，包含千里江山图、粒子星云手势新年祝福等精彩内容。',
    content: <ImageCarousel images={WORK_IMAGES.particles} />,
    links: [
      { name: '千里江山图', url: 'https://mountainsandrivers.netlify.app/' },
      { name: '粒子星云手势新年祝福', url: 'https://gummy1803-ai.github.io/star-sky-and-ball/' },
    ],
  },
  {
    title: 'AI 项目开发',
    description: '社区同学开发的多个AI项目，包含考研征集网站、学校官网、AI+医学项目、AI+建筑项目等。',
    content: <ImageCarousel images={WORK_IMAGES.projects} />,
    cards: [
      {
        title: '考研征集网站',
        desc: '服务考研学子的一站式数字化备考平台，平台设置名校雷达、政策解读、真题视频、全科课堂、上岸经验五大核心功能板块；一站式满足考生择校、复习、资料查找的全部需求。',
      },
      {
        title: '学校官网',
        desc: '本项目为大一学生打造的河北农业大学新生入学指南网站，面向准新生群体搭建一站式信息服务平台。全方位解决新生入学各类困惑，是适配本校新生的专属数字化服务工具。',
      },
      {
        title: 'AI+医学项目开发',
        desc: '由医学生打造的AI+医学创新校园AED地图小程序，为解决校园AED定位与使用难题、参与三创赛自主研发，开发者依托AI生成代码完成可运行程序，目前正申请软件著作权以完善自有知识产权。',
      },
      {
        title: 'AI+建筑项目开发',
        desc: '本AI+建筑学项目为桥梁智能检测平台，由建筑学专业学生自主开发，项目依托Gemini生成平台效果图，再通过vibe coding完成全流程搭建；平台集成图片上传与检测、账号登录、检测历史记录查看与修改、自动生成Word检测报告等实用功能。',
      },
    ],
  },
];

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('certificate');

  return (
    <section className="benefits">
      <div className="container">
        {/* —— AI 社区标签 —— */}
        <div className="benefits__tag">
          <span className="benefits__tag-line" />
          <span className="benefits__tag-text">AI 社区</span>
        </div>

        {/* —— 主标题 —— */}
        <h2 className="benefits__title">
          你能得到的
          <span className="benefits__title-sub">BENEFITS</span>
        </h2>

        {/* —— Tab 切换 —— */}
        <div className="benefits__tabs">
          <button
            className={`benefits__tab ${activeTab === 'certificate' ? 'benefits__tab--active' : ''}`}
            onClick={() => setActiveTab('certificate')}
          >
            AI 证书
          </button>
          <button
            className={`benefits__tab ${activeTab === 'work' ? 'benefits__tab--active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            AI 作品
          </button>
        </div>

        {/* —— AI 证书 —— */}
        {activeTab === 'certificate' && (
          <div className="benefits__gallery">
            <CircularGallery
              items={CERTIFICATE_ITEMS}
              bend={0}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.08}
              font="bold 24px var(--font-body)"
            />
          </div>
        )}

        {/* —— AI 作品 —— */}
        {activeTab === 'work' && (
          <div className="benefits__work">
            <StickyScroll content={WORK_CONTENT} />
          </div>
        )}
      </div>
    </section>
  );
}
