"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './MyWorks.module.scss'
import Title from '@/app/ui/Title/Title'

// Слайдер
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import ImgOne from '../../../images/MyWorks/1.jpg'
import ImgTwo from '../../../images/MyWorks/2.jpg'
import ImgThree from '../../../images/MyWorks/3.jpg'
import ImgFour from '../../../images/MyWorks/4.jpg'
import ImgFive from '../../../images/MyWorks/5.jpg'
import ImgSix from '../../../images/MyWorks/6.jpg'

const MyWorks = () => {

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slidesPerGroup, setSlidesPerGroup] = useState(3);
  const [isCenter, setIsCenter] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setSlidesPerView(2);
        setSlidesPerGroup(2);
      }

      if (window.innerWidth < 820) {
        setSlidesPerView(1);
        setSlidesPerGroup(1);
      }

      if (window.innerWidth > 1200) {
        setSlidesPerView(3);
        setSlidesPerGroup(3);
      }

      if (window.innerWidth < 600) {
        setIsCenter(false)
      }


    
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    centerMode: isCenter,
    speed: 500,
    slidesToShow: slidesPerGroup,
    slidesToScroll: slidesPerView,
    initialSlide: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       dots: false,
    //     },
    //   },
    // ],
  };

  return (
    <div className={styles.MyWorksWrapper}>
        <div className={styles.title}>
            <Title name="Мои работы"/>
        </div>

        <div className={styles.blocks}>

        <Slider {...settings}>
          <div className={styles.item} >
            <Image src={ImgOne} alt='Аватарка' className={styles.item} width={400} height={250} />
          </div>
          <div>
            <Image src={ImgTwo} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </div>
           <div>
            <Image src={ImgThree} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </div>
          <div>
            <Image src={ImgFour} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </div>
          <div>
            <Image src={ImgFive} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </div>
          <div>
            <Image src={ImgSix} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </div>
        </Slider>

    </div>

        {/* <div className={styles.blocks}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerGroup}
            spaceBetween={10}
            centeredSlides 
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className={styles.swiperContainer}

        >
          <SwiperSlide>
            <Image src={ImgOne} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </SwiperSlide>

          <SwiperSlide>
            <Image src={ImgTwo} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </SwiperSlide>

          <SwiperSlide>
            <Image src={ImgThree} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </SwiperSlide>

          <SwiperSlide>
            <Image src={ImgFour} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </SwiperSlide>

          <SwiperSlide>
            <Image src={ImgFive} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </SwiperSlide>

          <SwiperSlide>
            <Image src={ImgSix} alt='Аватарка' className={styles.item} width={400} height={250} /> 
          </SwiperSlide>
          
        </Swiper>
      </div> */}
       
    </div>
  )
}

export default MyWorks
