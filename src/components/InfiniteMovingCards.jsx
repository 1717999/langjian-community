import React, { useEffect, useState, useRef } from 'react'
import './InfiniteMovingCards.css'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className = '',
}) => {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })
      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={`imc-scroller ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`imc-list${start ? ' imc-list--animate' : ''}${pauseOnHover ? ' imc-list--pause' : ''}`}
      >
        {items.map((item, idx) => (
          <li className="imc-item" key={idx}>
            <img src={item} alt="" className="imc-img" />
          </li>
        ))}
      </ul>
    </div>
  )
}
