import { useState } from 'react';
import './MetroLineCard.css';

export default function MetroLineCard({ items }) {
  const [previewItem, setPreviewItem] = useState(null);

  const handleClick = (item) => {
    setPreviewItem(item);
  };

  const closePreview = () => {
    setPreviewItem(null);
  };

  return (
    <div className="metro-line">
      <div className="metro-line__track" />
      <div className="metro-line__card">
        {items.map((item, index) => (
          <div key={index} className="metro-line__group" onClick={() => handleClick(item)}>
            <div className="metro-line__point">
              <div className="metro-line__point-inner" />
            </div>
            <div className="metro-line__label">
              <span>{item.name}</span>
            </div>
            <div className="metro-line__info">
              <div className="metro-line__info-header">
                <span>{item.name}</span>
                <span className="metro-line__info-line">{item.line}</span>
              </div>
              <div className="metro-line__info-img">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 大图预览弹窗 */}
      {previewItem && (
        <div className="metro-line__preview-overlay" onClick={closePreview}>
          <div className="metro-line__preview-modal" onClick={(e) => e.stopPropagation()}>
            <button className="metro-line__preview-close" onClick={closePreview}>×</button>
            <div className="metro-line__preview-header">
              <h3>{previewItem.name}</h3>
              <span className="metro-line__preview-line">{previewItem.line}</span>
            </div>
            <div className="metro-line__preview-img-wrap">
              <img src={previewItem.image} alt={previewItem.name} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
