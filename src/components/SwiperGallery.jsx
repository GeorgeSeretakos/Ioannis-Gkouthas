import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperGallery() {
  return (
    <>
      <div className="swiper-wrapper-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{clickable: true}}
          loop={true}
          autoplay={{delay: 3500}}
        >
          <SwiperSlide>
            <img src="/images/office/1.JPG" alt="Εσωτερικό Γραφείου 1" className="slide-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/office/2.JPG" alt="Εσωτερικό Γραφείου 2" className="slide-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/office/3.JPG" alt="Εσωτερικό Γραφείου 3" className="slide-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/office/4.JPG" alt="Εσωτερικό Γραφείου 4" className="slide-image"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/office/7.JPG" alt="Εσωτερικό Γραφείου 5" className="slide-image"/>
          </SwiperSlide>
        </Swiper>
      </div>

      <style>
        {`
          .swiper-wrapper-container {
          width: 100%;
          margin: auto;
        }

          .swiper-slide {
          height: 80vh;
        }

          .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

          @media (max-width: 1024px) {
          .swiper-slide {
          height: 85vh;
        }
        }

          @media (max-width: 768px) {
          .swiper-slide {
          height: 60vh;
        }
        }

          @media (max-width: 480px) {
          .swiper-slide {
          height: 50vh;
        }
        }

          .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }

          .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
        }
        `}
      </style>
    </>
  );
}