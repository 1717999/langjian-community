import { useEffect, useRef, useState, useCallback } from 'react'
import * as echarts from 'echarts'

const MAP_URL = '/china.json'

const CITY_MARKERS = [
  { name: '北京', value: [116.405285, 39.904989] },
  { name: '天津', value: [117.200983, 39.084158] },
  { name: '上海', value: [121.472644, 31.231706] },
  { name: '重庆', value: [106.504962, 29.533155] },
  { name: '石家庄', value: [114.51486, 38.045474] },
  { name: '太原', value: [112.548948, 37.870614] },
  { name: '沈阳', value: [123.431495, 41.805762] },
  { name: '长春', value: [125.3245, 43.886841] },
  { name: '哈尔滨', value: [126.642464, 45.756967] },
  { name: '南京', value: [118.767413, 32.041544] },
  { name: '杭州', value: [120.15507, 30.274084] },
  { name: '合肥', value: [117.227239, 31.820587] },
  { name: '福州', value: [119.296494, 26.074508] },
  { name: '南昌', value: [115.892151, 28.676493] },
  { name: '济南', value: [117.000923, 36.675807] },
  { name: '郑州', value: [113.625368, 34.746611] },
  { name: '武汉', value: [114.298572, 30.584355] },
  { name: '长沙', value: [112.938814, 28.227821] },
  { name: '广州', value: [113.280637, 23.125178] },
  { name: '海口', value: [110.199988, 20.044222] },
  { name: '成都', value: [104.065735, 30.659462] },
  { name: '贵阳', value: [106.630237, 26.647764] },
  { name: '昆明', value: [102.832288, 24.880096] },
  { name: '西安', value: [108.940175, 34.341568] },
  { name: '兰州', value: [103.834304, 36.061089] },
  { name: '西宁', value: [101.778282, 36.617282] },
  { name: '呼和浩特', value: [111.749252, 40.842449] },
  { name: '南宁', value: [108.366544, 22.817021] },
  { name: '拉萨', value: [91.132212, 29.660361] },
  { name: '银川', value: [106.230977, 38.487783] },
  { name: '乌鲁木齐', value: [87.616838, 43.825668] },
]

const PHOTO_NODES = [
  {
    name: '北京',
    image: '/xianxia1.jpg',
    title: '华北社区',
    desc: '浪尖儿华北线下社区，定期举办新生分享会与学习沙龙。',
  },
  {
    name: '上海',
    image: '/xianxia2.jpg',
    title: '华东社区',
    desc: '长三角地区线下交流中心，汇聚顶尖高校学子。',
  },
  {
    name: '广州',
    image: '/xianxia3.jpg',
    title: '华南社区',
    desc: '大湾区线下活动枢纽，聚焦职业发展与资源对接。',
  },
  {
    name: '成都',
    image: '/xianxia4.jpg',
    title: '西南社区',
    desc: '西部核心线下社区，承载川渝地区青年交流。',
  },
  {
    name: '武汉',
    image: '/xianxia5.jpg',
    title: '华中社区',
    desc: '华中地区线下大本营，连接九省通衢的青年力量。',
  },
  {
    name: '西安',
    image: '/xianxia6.jpg',
    title: '西北社区',
    desc: '西北线下交流枢纽，传承古都文化与现代创新。',
  },
  {
    name: '哈尔滨',
    image: '/xianxia7.jpg',
    title: '东北社区',
    desc: '东北线下社区基地，冰城学子的温暖聚集地。',
  },
]

export default function ChinaMap() {
  const chartRef = useRef(null)
  const instanceRef = useRef(null)
  const containerRef = useRef(null)
  const [photoPositions, setPhotoPositions] = useState([])

  const computePositions = useCallback(() => {
    const chart = instanceRef.current
    if (!chart) return
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const h = rect.height
    const flipThreshold = h * 0.55

    const positions = PHOTO_NODES.map(node => {
      const cityMarker = CITY_MARKERS.find(c => c.name === node.name)
      if (!cityMarker) return null
      const pixel = chart.convertToPixel('geo', cityMarker.value)
      if (!pixel) return null
      return {
        ...node,
        x: pixel[0],
        y: pixel[1],
        flip: pixel[1] > flipThreshold,
      }
    }).filter(Boolean)

    setPhotoPositions(positions)
  }, [])

  useEffect(() => {
    let chart = echarts.init(chartRef.current)
    instanceRef.current = chart
    let disposed = false

    fetch(MAP_URL)
      .then(res => res.json())
      .then(geoJson => {
        if (disposed) return
        echarts.registerMap('china', geoJson)
        renderChart(chart)
        requestAnimationFrame(() => computePositions())
      })
      .catch(err => {
        console.error('Failed to load China map data:', err)
      })

    const handleResize = () => {
      if (disposed) return
      chart.resize()
      requestAnimationFrame(() => computePositions())
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      disposed = true
      chart.dispose()
    }
  }, [computePositions])

  const renderChart = (chart) => {
    const option = {
      backgroundColor: 'transparent',
      geo: {
        map: 'china',
        roam: false,
        layoutCenter: ['48%', '50%'],
        layoutSize: 660,
        label: { show: false },
        itemStyle: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              { offset: 0, color: 'rgba(0, 212, 255, 0.08)' },
              { offset: 1, color: 'rgba(0, 212, 255, 0.02)' },
            ],
          },
          borderColor: 'rgba(0, 212, 255, 0.6)',
          borderWidth: 1,
          shadowColor: 'rgba(0, 212, 255, 0.3)',
          shadowBlur: 15,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
        emphasis: {
          label: { show: false },
          itemStyle: {
            areaColor: 'rgba(0, 212, 255, 0.15)',
            borderColor: 'rgba(0, 212, 255, 0.8)',
            borderWidth: 1.5,
          },
        },
        select: {
          label: { show: false },
          itemStyle: { areaColor: 'rgba(0, 212, 255, 0.25)' },
        },
      },
      series: [
        {
          name: '城市节点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: CITY_MARKERS.map(c => ({ name: c.name, value: c.value })),
          symbolSize: 5,
          label: {
            show: true,
            formatter: '{b}',
            position: 'right',
            color: '#88a8b8',
            fontSize: 9,
            textShadowColor: 'rgba(0, 0, 0, 0.9)',
            textShadowBlur: 3,
          },
          itemStyle: {
            color: '#00d4ff',
            shadowBlur: 8,
            shadowColor: 'rgba(0, 212, 255, 0.6)',
          },
          emphasis: {
            scale: 1.5,
            itemStyle: {
              color: '#fff',
              shadowBlur: 15,
            },
            label: {
              show: true,
              color: '#fff',
              fontSize: 12,
              fontWeight: 'bold',
            },
          },
          zlevel: 3,
        },
        {
          name: '脉冲动画',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: CITY_MARKERS.map(c => ({ name: c.name, value: c.value })),
          symbolSize: 6,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
            scale: 3,
            period: 3,
          },
          emphasis: { scale: false },
          itemStyle: {
            color: '#00d4ff',
            shadowBlur: 10,
            shadowColor: 'rgba(0, 212, 255, 0.8)',
          },
          zlevel: 2,
        },
      ],
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(10, 15, 24, 0.9)',
        borderColor: 'rgba(0, 212, 255, 0.3)',
        borderWidth: 1,
        textStyle: {
          color: '#c0d8e8',
          fontSize: 13,
        },
        formatter: (params) => {
          const isPhotoCity = PHOTO_NODES.some(p => p.name === params.name)
          if (isPhotoCity) {
            return `<div style="padding:4px 8px">
              <span style="color:#00d4ff">●</span> ${params.name}<br/>
              <span style="color:#888;font-size:11px">线下社区 · 悬停查看详情</span>
            </div>`
          }
          return `<div style="padding:4px 8px">
            <span style="color:#00d4ff">●</span> ${params.name}
          </div>`
        },
      },
    }
    chart.setOption(option)
  }

  return (
    <div ref={containerRef} className="china-map-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        ref={chartRef}
        className="china-map"
        style={{ width: '100%', height: '100%', minHeight: 680 }}
      />
      <div className="china-map__nodes">
        {photoPositions.map(node => (
          <PhotoPin key={node.name} node={node} />
        ))}
      </div>
    </div>
  )
}

function PhotoPin({ node }) {
  return (
    <div
      className={`map-node${node.flip ? ' map-node--flip' : ''}`}
      style={{
        left: node.x,
        top: node.y,
      }}
    >
      <div className="map-node__glow-ring" />
      <div className="map-node__popup">
        <div className="map-node__popup-img">
          <img src={node.image} alt={node.title} />
        </div>
        <div className="map-node__popup-info">
          <span className="map-node__popup-title">{node.title}</span>
          <span className="map-node__popup-desc">{node.desc}</span>
        </div>
        <div className="map-node__popup-arrow" />
      </div>
    </div>
  )
}
