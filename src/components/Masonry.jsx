import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Masonry.css'

export default function Masonry({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.08,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) {
  const listRef = useRef(null)
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const el = listRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        if (width >= 900) setColumns(3)
        else if (width >= 600) setColumns(2)
        else setColumns(1)
      }
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = listRef.current
    if (!el) return

    const items = el.querySelectorAll('.item-wrapper')
    const fromVars =
      animateFrom === 'bottom'
        ? { y: 60, opacity: 0 }
        : animateFrom === 'top'
        ? { y: -60, opacity: 0 }
        : animateFrom === 'left'
        ? { x: -60, opacity: 0 }
        : { x: 60, opacity: 0 }

    gsap.fromTo(
      items,
      fromVars,
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [items, duration, ease, stagger, animateFrom])

  return (
    <div
      ref={listRef}
      className="list"
      style={{ columnCount: columns }}
    >
      {items.map((item) => (
        <div key={item.id} className="item-wrapper">
          <div className="item-img">
            <img src={item.img} alt="" loading="lazy" />
            <div className="item-overlay">
              {scaleOnHover && (
                <div className="item-overlay-scale" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
