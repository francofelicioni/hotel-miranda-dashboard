import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import Reviews from "./Reviews";

const ReviewsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000 }}
      //   navigation
      style={{ height: "600px", borderRadius: "0 10px 10px 0" }}
      loop
    >
      <SwiperSlide>
        <Reviews
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://i.pravatar.cc/150?img=31"
          name="Mariah Leonne"
          time="0m ago"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Reviews
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://i.pravatar.cc/150?img=35"
          name="Susan Anderson"
          time="1m ago"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Reviews
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://i.pravatar.cc/150?img=36"
          name="Bella Saphira"
          time="2m ago"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Reviews
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://i.pravatar.cc/150?img=8"
          name="Thomas Al-Ghazali"
          time="5m ago"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Reviews
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://i.pravatar.cc/150?img=9"
          name="John Maffud"
          time="8m ago"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Reviews
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://i.pravatar.cc/150?img=19"
          name="Moria Kelly"
          time="9m ago"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewsSlider;
