import React, { FC } from 'react'
import Image from 'next/image'
import styles from '../MyWorks.module.scss'

import ImgOne from '../../../../images/MyWorks/1.jpg'
import ImgTwo from '../../../../images/MyWorks/2.jpg'
import ImgThree from '../../../../images/MyWorks/3.jpg'
import ImgFour from '../../../../images/MyWorks/4.jpg'
import ImgFive from '../../../../images/MyWorks/5.jpg'
import ImgSix from '../../../../images/MyWorks/6.jpg'

// Слайдер
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderOne: FC<{isCenter: boolean, slidesPerGroup: number }> = ({isCenter, slidesPerGroup }) => {

    
  var settings = {
    dots: true,
    infinite: true,
    centerMode: isCenter,
    speed: 500,
    slidesToShow: slidesPerGroup,
    slidesToScroll: slidesPerGroup,
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
  )
}

export default SliderOne
