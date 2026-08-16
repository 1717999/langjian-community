import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const handleMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY

      const target = e.target
      const isInteractive =
        target.closest('a, button, .btn, [role="button"], .seniors__person, .courses__nav-item, .courses__sub-card, .offline__lightbox-nav, .contact-social-item, .map-node, input, textarea, select, label')
      setHover(!!isInteractive)
    }

    const handleDown = () => setClicked(true)
    const handleUp = () => setClicked(false)

    const handleLeave = () => {
      mousePos.current.x = -100
      mousePos.current.y = -100
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    const ringLerp = 0.25
    const dotLerp = 0.55

    let rafId
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotLerp
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotLerp

      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      dot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor__ring${hover ? ' is-hover' : ''}${clicked ? ' is-clicked' : ''}`}
      />
      <div
        ref={dotRef}
        className={`custom-cursor__dot${clicked ? ' is-clicked' : ''}`}
      />
    </>
  )
}
