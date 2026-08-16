import { useState } from 'react';
import CircularGallery from './CircularGallery';
import MetroLineCard from './MetroLineCard';
import StickyScroll from './StickyScroll';
import './AIIntro.css';

// AI社区直播海报 - 前3张
const LIVE_POSTERS = [
  { image: '/18.png', text: '直播海报 1' },
  { image: '/18 (2).png', text: '直播海报 2' },
  { image: '/18 (3).png', text: '直播海报 3' },
];

// AI社区直播反馈 - 后3张
const LIVE_FEEDBACKS = [
  { image: '/18 (4).png', name: '微信小程序从0到上线的全流程扫盲', line: '直播反馈' },
  { image: '/18 (5).png', name: 'AI短剧制作入门+工具实操拆解', line: '直播反馈' },
  { image: '/18 (6).png', name: 'AI小白接单流程拆解', line: '直播反馈' },
];

// 线下AI社区 - 粘性滚动内容
const OFFLINE_CONTENT = [
  {
    title: '朋友圈晒收获',
    description: '社区学员在朋友圈分享自己的学习成果和收获，记录成长轨迹，展现学习热情。',
    images: ['/19.png', '/19 (2).png', '/19 (3).png', '/19 (4).png'],
  },
  {
    title: '活动现场画面',
    description: '线下AI社区活动精彩瞬间，学员们齐聚一堂，共同探讨AI技术与应用。',
    images: ['/19 (5).png', '/19 (6).png'],
  },
  {
    title: '颁奖环节',
    description: '优秀学员颁奖典礼，表彰在AI学习中表现突出的同学，激励大家不断前行。',
    images: ['/19 (7).png', '/19 (8).png', '/19 (9).png'],
  },
  {
    title: '到场领导合影留念',
    description: '活动圆满结束后，到场领导与社区学员合影留念，见证浪尖儿社区的成长与壮大。',
    images: ['/19 (10).png'],
  },
];

export default function AIIntro() {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <section className="ai-intro">
      <div className="container">
        {/* —— AI 社区标签 —— */}
        <div className="ai-intro__tag">
          <span className="ai-intro__tag-line" />
          <span className="ai-intro__tag-text">AI 社区</span>
        </div>

        {/* —— 主标题 —— */}
        <h2 className="ai-intro__title">
          AI 社区介绍
          <span className="ai-intro__title-sub">AI COMMUNITY</span>
        </h2>

        {/* —— Tab 切换 —— */}
        <div className="ai-intro__tabs">
          <button
            className={`ai-intro__tab ${activeTab === 'live' ? 'ai-intro__tab--active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            AI 社区直播
          </button>
          <button
            className={`ai-intro__tab ${activeTab === 'offline' ? 'ai-intro__tab--active' : ''}`}
            onClick={() => setActiveTab('offline')}
          >
            线下 AI 社区
          </button>
        </div>

        {/* —— AI 社区直播 —— */}
        {activeTab === 'live' && (
          <div className="ai-intro__live">
            {/* 直播海报 3D 轮播 */}
            <div className="ai-intro__section-title">直播海报</div>
            <div className="ai-intro__gallery">
              <CircularGallery
                items={LIVE_POSTERS}
                bend={0}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.08}
                font="bold 24px var(--font-body)"
              />
            </div>

            {/* 直播反馈 - 地铁线路卡片 */}
            <div className="ai-intro__section-title">直播反馈</div>
            <MetroLineCard items={LIVE_FEEDBACKS} />
          </div>
        )}

        {/* —— 线下 AI 社区 —— */}
        {activeTab === 'offline' && (
          <div className="ai-intro__offline">
            <StickyScroll content={OFFLINE_CONTENT} />
          </div>
        )}
      </div>
    </section>
  );
}
