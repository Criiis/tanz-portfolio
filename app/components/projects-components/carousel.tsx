// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default () => {
  return (
    <div className="py-5">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        // on mobile
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
          },
        }}
        navigation
      >
        <SwiperSlide>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates quidem ex
              illo ut quibusdam sint voluptas porro omnis! Placeat quo itaque excepturi! Veniam
              quasi rerum inventore nobis consequuntur animi!
            </p>
            <img src="/projects/new-look.png" className="w-full py-10" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates quidem ex
              illo ut quibusdam sint voluptas porro omnis! Placeat quo itaque excepturi! Veniam
              quasi rerum inventore nobis consequuntur animi!
            </p>
            <img src="/projects/new-look.png" className="w-full py-10" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates quidem ex
              illo ut quibusdam sint voluptas porro omnis! Placeat quo itaque excepturi! Veniam
              quasi rerum inventore nobis consequuntur animi!
            </p>
            <img src="/projects/new-look.png" className="w-full py-10" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates quidem ex
              illo ut quibusdam sint voluptas porro omnis! Placeat quo itaque excepturi! Veniam
              quasi rerum inventore nobis consequuntur animi!
            </p>
            <img src="/projects/new-look.png" className="w-full py-10" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
