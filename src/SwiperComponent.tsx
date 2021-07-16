import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type SlideData = {
  src: string;
};
export type SlideType = {
  type: string;
  data: SlideData[];
  sharable: boolean;
  downloadable: boolean;
  id: string;
};
type LightBoxProps = {
  open: boolean;
  initSlideId: string;
  slides: SlideType[];
};

export const LightBox: React.FC<LightBoxProps> = ({ open, initSlideId, slides }) => {
  return open ? (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
      }}
    >
      <Swiper
        style={{
          width: '80vw',
          height: '80vh',
          backgroundColor: 'gray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        initialSlide={parseInt(initSlideId) - 1}
        className="mySwiper"
      >
        {slides.map(s => {
          if (s.data.length === 1) {
            return (
              <SwiperSlide
                style={{
                  width: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={s.data[0].src} alt="" />
              </SwiperSlide>
            );
          } else {
            return (
              <Swiper direction="horizontal">
                {s.data.map(s => (
                  <SwiperSlide>
                    <img style={{ maxWidth: '100%' }} src={s.src} alt=""></img>
                  </SwiperSlide>
                ))}
              </Swiper>
            );
          }
        })}
      </Swiper>
    </div>
  ) : null;
};
