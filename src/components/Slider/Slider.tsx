import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import { ImageSlider, Container, Description, StateFlag } from "./Slider_sc";

const roomImg1 = './1.jpg';
const roomImg2 = './1.jpg';
const roomImg3 = './1.jpg';
const roomImg4 = './1.jpg';

interface SliderInt {
  description: string;
  state: string;
}

const Slider = ({ description, state }: SliderInt): JSX.Element => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 5000 }}
      navigation
      style={{ height: "600px", borderRadius: "0 10px 10px 0" }}
      loop
    >
      <SwiperSlide style={{ position: "relative" }}>
        <StateFlag state={state}>{state}</StateFlag>
        <ImageSlider src={roomImg1} alt="Room" />
        <Container>
          <Description>{description.slice(0, 150)}</Description>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <StateFlag state={state}>{state}</StateFlag>
        <ImageSlider src={roomImg2} alt="Room" />
        <Container>
          <Description>{description.slice(0, 150)}</Description>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <StateFlag state={state}>{state}</StateFlag>
        <ImageSlider src={roomImg3} alt="Room" />
        <Container>
          <Description>{description.slice(0, 150)}</Description>
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <StateFlag state={state}>{state}</StateFlag>
        <ImageSlider src={roomImg4} alt="Room" />
        <Container>
          <Description>{description.slice(0, 150)}</Description>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
