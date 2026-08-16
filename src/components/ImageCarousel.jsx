import { useState } from 'react';
import './ImageCarousel.css';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="image-carousel">
      <div className="image-carousel__container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-carousel__slide ${
              index === currentIndex ? 'image-carousel__slide--active' : ''
            }`}
          >
            <img src={image} alt={`图片 ${index + 1}`} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="image-carousel__btn image-carousel__btn--prev"
            onClick={goToPrevious}
            aria-label="上一张"
          >
            ‹
          </button>
          <button
            className="image-carousel__btn image-carousel__btn--next"
            onClick={goToNext}
            aria-label="下一张"
          >
            ›
          </button>

          <div className="image-carousel__dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`image-carousel__dot ${
                  index === currentIndex ? 'image-carousel__dot--active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`跳到第 ${index + 1} 张`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
