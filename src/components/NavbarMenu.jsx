import React from 'react'
import { motion } from 'motion/react'
import './NavbarMenu.css'

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="nm-item">
      <motion.p
        transition={{ duration: 0.3 }}
        className="nm-item-text"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="nm-item-popup-wrapper">
              <motion.div
                transition={transition}
                layoutId="active"
                className="nm-item-popup"
              >
                <motion.div
                  layout
                  className="nm-item-popup-inner"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="nm-menu"
    >
      {children}
    </nav>
  )
}

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="nm-product-item">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="nm-product-img"
      />
      <div>
        <h4 className="nm-product-title">{title}</h4>
        <p className="nm-product-desc">{description}</p>
      </div>
    </a>
  )
}

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a {...rest} className="nm-hover-link">
      {children}
    </a>
  )
}
