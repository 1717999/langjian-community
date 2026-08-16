import { useState } from 'react'
import { createPortal } from 'react-dom'
import './LayoutGrid.css'

/**
 * LayoutGrid — 四宫格可展开卡片
 *
 * cards 结构：{ id, content, className, thumbnail }
 * - id: 唯一标识
 * - content: 点击放大后展示的 JSX 内容
 * - className: 'layout-grid__card--wide' 表示跨 2 列（宽卡），空字符串为 1 列（窄卡）
 * - thumbnail: 图片 URL
 *
 * 交互：点击卡片 → 居中放大 + 半透明遮罩；点击遮罩 → 关闭
 */
export default function LayoutGrid({ cards }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="layout-grid">
      {cards.map((card, i) => (
        <div key={i} className={`layout-grid__cell ${card.className || ''}`}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelected(card)}
            className="layout-grid__card"
          >
            <img
              src={card.thumbnail}
              alt=""
              className="layout-grid__card-img"
            />
          </div>
        </div>
      ))}

      {selected &&
        createPortal(
          <div className="layout-grid__lightbox" onClick={() => setSelected(null)}>
            <div
              className="layout-grid__lightbox-card"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.thumbnail}
                alt=""
                className="layout-grid__lightbox-img"
              />
              <div className="layout-grid__lightbox-dim" />
              <div className="layout-grid__lightbox-content">
                {selected.content}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
