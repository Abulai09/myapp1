import './room.css'
import img1 from './img/IMAGE.png'
import img2 from './img/IMAGE (1).png'
import img3 from './img/IMAGE (2).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination,Autoplay} from 'swiper'
import 'swiper/css';

import 'swiper/css/autoplay'


const Rooms = () => {
  return (
    <div>

      <section id='rooms' className="rooms">
        <div className="rooms__container">
          <div className="rooms_head">
            <h3 className="headTitle">Newsroom</h3>
            <h2 className="title">Writing from Estate.</h2>
          </div>
          <Swiper
      spaceBetween={10}
      loop={true}
      modules={ [Navigation,Pagination,Autoplay]}
      slidesPerView={1}
      autoplay={true}
      breakpoints={{
        // when window width is >= 470px
        470: {
          slidesPerView: 3,
        },
        // when window width is >= 768px
        
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="sliderrrr">
        <div className="slider">
          <div className="img"><img src={img1} alt="img" /></div>
          <div className="info">
            <h3 className="headTitle">Press release</h3>
            <p className="text">Market watch: are condos still a good investment?</p>
            <span className="text">August 12, 2021</span>
          </div>
        </div>
      </SwiperSlide >
      <SwiperSlide>
        <div className="slider">
          <div className="img"><img src={img2} alt="img" /></div>
          <div className="info">
            <h3 className="headTitle">Press release</h3>
            <p className="text">Market watch: are condos still a good investment?</p>
            <span className="text">August 12, 2021</span>
          </div>
        </div>
      </SwiperSlide >
      <SwiperSlide className="sliderrrr">
        <div className="slider">
          <div className="img"><img src={img3} alt="img" /></div>
          <div className="info">
            <h3 className="headTitle">Press release</h3>
            <p className="text">Market watch: are condos still a good investment?</p>
            <span className="text">August 12, 2021</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="sliderrrr">
        <div className="slider">
          <div className="img"><img src={img2} alt="img" /></div>
          <div className="info">
            <h3 className="headTitle">Press release</h3>
            <p className="text">Market watch: are condos still a good investment?</p>
            <span className="text">August 12, 2021</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Rooms