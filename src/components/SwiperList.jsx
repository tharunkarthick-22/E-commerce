import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import headphones from "../assets/banner-png/nexCart_banner_headphones.png";
import laptops from "../assets/banner-png/nexCart_banner_laptops.png";
import mobiles from "../assets/banner-png/nexCart_banner_mobiles.png";
import monitors from "../assets/banner-png/nexCart_banner_monitors.png";
import tablets from "../assets/banner-png/nexCart_banner_tablets.png";
import tws from "../assets/banner-png/nexCart_banner_tws.png";


const SwiperList = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-78"

        // Responsive slides
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 1,
          },

          // Tablet
          576: {
            slidesPerView: 2,
          },

          // Desktop
          992: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={headphones} alt="Headphones" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={laptops} alt="Laptops" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={mobiles} alt="Mobiles" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={monitors} alt="Monitors" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={tablets} alt="Tablets" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={tws} alt="TWS" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperList;
