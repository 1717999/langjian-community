import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { motion } from 'motion/react';
import './StickyScroll.css';

const Gallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="sticky-scroll__gallery">
      <div className="sticky-scroll__gallery-main">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`sticky-scroll__gallery-img ${i === index ? 'sticky-scroll__gallery-img--active' : ''}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="sticky-scroll__gallery-nav sticky-scroll__gallery-nav--prev" onClick={prev}>‹</button>
          <button className="sticky-scroll__gallery-nav sticky-scroll__gallery-nav--next" onClick={next}>›</button>
          <div className="sticky-scroll__gallery-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`sticky-scroll__gallery-dot ${i === index ? 'sticky-scroll__gallery-dot--active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function StickyScroll({ content, contentClassName }) {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end end'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    '#111113',
    '#111113',
    '#111113',
    '#111113',
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={`sticky-scroll ${contentClassName || ''}`}
      ref={ref}
    >
      <div className="sticky-scroll__left">
        <div className="sticky-scroll__content">
          {content.map((item, index) => (
            <div key={item.title + index} className="sticky-scroll__item">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="sticky-scroll__title"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="sticky-scroll__desc"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="sticky-scroll__bottom" />
        </div>
      </div>
      <div className="sticky-scroll__right">
        {content.map((item, index) => (
          <div
            key={item.title + '-right'}
            className={`sticky-scroll__gallery-wrap ${activeCard === index ? 'sticky-scroll__gallery-wrap--active' : ''}`}
          >
            {item.images && <Gallery images={item.images} />}
            {item.content && item.content}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
