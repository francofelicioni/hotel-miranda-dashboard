import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from 'swiper';

import roomImg1 from './1.jpg'
import roomImg2 from './2.jpg'
import roomImg3 from './3.jpg'
import roomImg4 from './4.jpg'

// Import Swiper styles
import "swiper/css";
import {
   ImageSlider,
   Container,
   Description,
   StateFlag
} from "./Slider_sc";

const Slider = ({description, state}) => {

   return (
      <Swiper
         modules={[Navigation, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         // onSlideChange={() => console.log("slide change")}
         // onSwiper={(swiper) => console.log(swiper)}
         autoplay={{ delay: 5000 }}
         navigation
         style={{ height: "600px", borderRadius: "0 10px 10px 0" }}
         loop
      >
         <SwiperSlide style={{ position: "relative" }}>
            <StateFlag state={state}>{state}</StateFlag>
            <ImageSlider src={roomImg1} alt="Room"/>
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