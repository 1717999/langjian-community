import React, { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import './ExpandableCard.css';

const ExpandableCard = ({ cards }) => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {createPortal(
        active && typeof active === 'object' ? (
          <>
            <div className="expandable-overlay" onClick={() => setActive(null)} />
            <div className="expandable-modal-wrapper">
              <button
                className="expandable-close-btn"
                onClick={() => setActive(null)}
                aria-label="关闭"
              >
                ×
              </button>
              <div ref={ref} className="expandable-modal">
                <div className="expandable-modal-image">
                  <img src={active.src} alt={active.title} />
                </div>

                <div className="expandable-modal-body">
                  <div className="expandable-modal-header">
                    <div className="expandable-modal-text">
                      <h3 className="expandable-modal-title">{active.title}</h3>
                      <p className="expandable-modal-desc">{active.description}</p>
                    </div>
                  </div>
                  <div className="expandable-modal-content">
                    <div className="expandable-modal-detail">
                      {typeof active.content === 'function'
                        ? active.content()
                        : active.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null,
        document.body
      )}
      <ul className="expandable-list">
        {cards.map((card, index) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}-${index}`}
            onClick={() => setActive(card)}
            className="expandable-item"
          >
            <div className="expandable-item-inner">
              <motion.div layoutId={`image-${card.title}-${id}`} className="expandable-item-image">
                <img
                  src={card.src}
                  alt={card.title}
                />
              </motion.div>
              <div className="expandable-item-text">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="expandable-item-title"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="expandable-item-desc"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="expandable-item-btn"
            >
              {card.ctaText}
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default ExpandableCard;
