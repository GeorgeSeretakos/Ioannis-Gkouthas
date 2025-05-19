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
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3500 }}
        >
          <SwiperSlide>
            <img src="/src/assets/images/office/1.jpg" alt="Εσωτερικό Γραφείου 1" className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/images/office/3.jpg" alt="Εσωτερικό Γραφείου 2" className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/images/office/5.jpg" alt="Εσωτερικό Γραφείου 3" className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/images/office/7.jpg" alt="Εσωτερικό Γραφείου 3" className="slide-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/images/office/12.jpg" alt="Εσωτερικό Γραφείου 3" className="slide-image" />
          </SwiperSlide>
        </Swiper>
      </div>

      <style>
        {`
          .swiper-wrapper-container {
            width: 100%;
            margin: auto;
          }

          .slide-image {
            width: 100%;
            max-height: 80vh;
            object-fit: cover;
          }

          /* White pagination bullets */
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
