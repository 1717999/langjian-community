import { useState, useRef, useCallback, useEffect } from 'react'
import './DraggableFeedback.css'

const generateImages = () => {
  const images = []
  images.push('/20.png')
  for (let i = 2; i <= 45; i++) {
    images.push(`/20 (${i}).png`)
  }
  return images
}

const FEEDBACK_IMAGES = generateImages()

const randomBetween = (min, max) => Math.random() * (max - min) + min

export default function DraggableFeedback() {
  const containerRef = useRef(null)
  const [cardStates, setCardStates] = useState([])
  const [zCounter, setZCounter] = useState(100)
  const dragRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const states = FEEDBACK_IMAGES.map((src, i) => {
      const angle = randomBetween(-18, 18)
      const radiusX = rect.width * 0.38
      const radiusY = rect.height * 0.32
      const circleAngle = (i / FEEDBACK_IMAGES.length) * Math.PI * 2
      const offsetX = Math.cos(circleAngle) * radiusX * randomBetween(0.7, 1)
      const offsetY = Math.sin(circleAngle) * radiusY * randomBetween(0.5, 0.95)
      
      return {
        id: i,
        src,
        x: offsetX + randomBetween(-40, 40),
        y: offsetY + randomBetween(-30, 30),
        rotation: angle,
        scale: randomBetween(0.95, 1.35),
        zIndex: i,
      }
    })

    setCardStates(states)
  }, [])

  const handlePointerDown = useCallback((e, id) => {
    e.preventDefault()
    const card = cardStates.find(c => c.id === id)
    if (!card) return

    const newZ = zCounter + 1
    setZCounter(newZ)

    setCardStates(prev =>
      prev.map(c =>
        c.id === id
          ? { ...c, zIndex: newZ, scale: 1.08 }
          : c
      )
    )

    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origX: card.x,
      origY: card.y,
      pointerId: e.pointerId,
    }

    e.currentTarget.setPointerCapture(e.pointerId)
  }, [cardStates, zCounter])

  const handlePointerMove = useCallback((e) => {
    if (!dragRef.current) return
    if (e.pointerId !== dragRef.current.pointerId) return

    const { id, startX, startY, origX, origY } = dragRef.current
    const dx = e.clientX - startX
    const dy = e.clientY - startY

    setCardStates(prev =>
      prev.map(c =>
        c.id === id
          ? { ...c, x: origX + dx, y: origY + dy }
          : c
      )
    )
  }, [])

  const handlePointerUp = useCallback((e) => {
    if (!dragRef.current) return
    if (e.pointerId !== dragRef.current.pointerId) return

    const { id } = dragRef.current
    
    setCardStates(prev =>
      prev.map(c =>
        c.id === id
          ? { ...c, scale: 1 }
          : c
      )
    )

    dragRef.current = null
  }, [])

  const resetLayout = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()

    setCardStates(prev =>
      prev.map((c, i) => {
        const angle = randomBetween(-18, 18)
        const radiusX = rect.width * 0.38
        const radiusY = rect.height * 0.32
        const circleAngle = (i / FEEDBACK_IMAGES.length) * Math.PI * 2
        const offsetX = Math.cos(circleAngle) * radiusX * randomBetween(0.7, 1)
        const offsetY = Math.sin(circleAngle) * radiusY * randomBetween(0.5, 0.95)
        
        return {
          ...c,
          x: offsetX + randomBetween(-40, 40),
          y: offsetY + randomBetween(-30, 30),
          rotation: angle,
          scale: randomBetween(0.95, 1.35),
        }
      })
    )
  }, [])

  return (
    <div className="feedback-section">
      <div className="feedback-header">
        <div className="feedback-tag">
          <span className="feedback-tag-line" />
          社区反馈
        </div>
        <h2 className="feedback-title">
          <span>学员心声</span>
          <br />
          <span className="feedback-title-accent">真实反馈</span>
        </h2>
        <p className="feedback-desc">
          听听学长学姐们怎么说——
          <br />
          他们的成长故事，就是我们最好的证明。
        </p>
      </div>

      <div className="feedback-container" ref={containerRef}>
        <div className="feedback-center-text">
          <span>✦</span>
          <p>拖动卡片<br />查看更多反馈</p>
          <span>✦</span>
        </div>
        
        {cardStates.map((card) => (
          <div
            key={card.id}
            className="feedback-card"
            style={{
              transform: `translate(-50%, -50%) translate(${card.x}px, ${card.y}px) rotate(${card.rotation}deg) scale(${card.scale})`,
              zIndex: card.zIndex,
            }}
            onPointerDown={(e) => handlePointerDown(e, card.id)}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <img src={card.src} alt="学员反馈" loading="lazy" draggable={false} />
          </div>
        ))}

        <button className="feedback-reset" onClick={resetLayout}>
          ↻ 重新堆叠
        </button>
      </div>
    </div>
  )
}
