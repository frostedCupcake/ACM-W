import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative } from 'swiper';
import Image from 'next/image';

const EventCarousel = ({ imageLinks }) => {
  return (
    <div className="md:w-[38rem] md:h-[28rem] w-[18rem] xs:w-[25rem] 5xl:w-[30rem] h-[15rem] xs:h-[18rem] 5xl:h-[20rem] rounded-sm shadow-xl">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper3"
      >
        {imageLinks.map((itemKey, index) => {
          return (
            <SwiperSlide>
              <Image
                width="600"
                height="600"
                className="md:w-[38rem] md:h-[28rem] w-[18rem] xs:w-[25rem] 5xl:w-[30rem] h-[15rem] xs:h-[18rem] 5xl:h-[20rem] rounded-sm shadow-xl"
                src={itemKey}
                key={index}
                alt={`event logo ${index}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
