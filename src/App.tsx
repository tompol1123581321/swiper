import React from 'react';
import './App.css';
import { LightBox, SlideType } from './SwiperComponent';
import 'swiper/swiper.min.css';
const slides: SlideType[] = [
  {
    data: [
      {
        src: '/imgs/1.jpg'
      }
    ],
    sharable: true,
    downloadable: true,
    type: 'img',
    id: '1'
  },
  {
    data: [
      {
        src: '/imgs/2.PNG'
      }
    ],
    sharable: true,
    downloadable: true,
    type: 'img',
    id: '2'
  },
  {
    data: [
      {
        src: '/imgs/3.jpg'
      }
    ],
    sharable: true,
    downloadable: true,
    type: 'img',
    id: '3'
  },
  {
    data: [
      {
        src: '/imgs/4.jpg'
      }
    ],
    sharable: true,
    downloadable: true,
    type: 'img',
    id: '4'
  }
];
function App() {
  return (
    <>
      <LightBox open={true} slides={slides} initSlideId="2" />
    </>
  );
}

export default App;
