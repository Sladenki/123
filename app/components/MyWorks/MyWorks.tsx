"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './MyWorks.module.scss'
import Title from '@/app/ui/Title/Title'

// Слайдер
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Первый слайдер
import ImgOneOne from '../../../images/MyWorks/one/1.jpeg'
import ImgOneTwo from '../../../images/MyWorks/one/2.jpeg'
import ImgOneThree from '../../../images/MyWorks/one/3.jpeg'
import ImgOneFour from '../../../images/MyWorks/one/4.jpeg'
import ImgOneFive from '../../../images/MyWorks/one/5.jpg'
import ImgOneSix from '../../../images/MyWorks/one/6.jpg'
import ImgOneSeven from '../../../images/MyWorks/one/7.jpg'
import ImgOneEight from '../../../images/MyWorks/one/8.jpeg'
import ImgOneNine from '../../../images/MyWorks/one/9.jpeg'
import ImgOneTen from '../../../images/MyWorks/one/10.jpeg'
import ImgOneEleven from '../../../images/MyWorks/one/11.jpeg'

// Второй слайдер
import ImgTwoOne from '../../../images/MyWorks/two/1.jpeg'
import ImgTwoTwo from '../../../images/MyWorks/two/2.jpeg'
import ImgTwoThree from '../../../images/MyWorks/two/3.jpg'
import ImgTwoFour from '../../../images/MyWorks/two/4.jpg'
import ImgTwoFive from '../../../images/MyWorks/two/5.jpg'
import ImgTwoSix from '../../../images/MyWorks/two/6.jpg'
import ImgTwoSeven from '../../../images/MyWorks/two/7.jpg'
import ImgTwoEight from '../../../images/MyWorks/two/8.jpg'
import ImgTwoNine from '../../../images/MyWorks/two/9.jpeg'
import ImgTwoTen from '../../../images/MyWorks/two/10.jpeg'
import ImgTwoEleven from '../../../images/MyWorks/two/11.jpeg'

// Третий слайдер
import ImgThreeOne from '../../../images/MyWorks/three/1.jpg'
import ImgThreeTwo from '../../../images/MyWorks/three/2.jpeg'
import ImgThreeThree from '../../../images/MyWorks/three/3.jpg'
import ImgThreeFour from '../../../images/MyWorks/three/4.jpg'
import ImgThreeFive from '../../../images/MyWorks/three/5.png'
import ImgThreeSix from '../../../images/MyWorks/three/6.jpeg'
import ImgThreeSeven from '../../../images/MyWorks/three/7.jpeg'
import ImgThreeEight from '../../../images/MyWorks/three/8.jpg'
import ImgThreeNine from '../../../images/MyWorks/three/9.jpg'
import ImgThreeTen from '../../../images/MyWorks/three/10.jpg'
import ImgThreeEleven from '../../../images/MyWorks/three/11.jpeg'

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
  };

  return (
    <div className={styles.MyWorksWrapper}>
        <div className={styles.title}>
            <Title name="Мои работы"/>
        </div>

        {/* 1 */}
        <div className={styles.blocks}>
          <Slider {...settings}>
            <div className={styles.item} >
              <Image src={ImgOneOne} alt='Аватарка' className={styles.item} width={270} height={300} />
            </div>
            <div>
              <Image src={ImgOneTwo} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneThree} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneFour} alt='Аватарка' className={styles.item} width={320} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneFive} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneSix} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneSeven} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneEight} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneNine} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneTen} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
            <div>
              <Image src={ImgOneEleven} alt='Аватарка' className={styles.item} width={270} height={300} /> 
            </div>
          </Slider>
      </div>

      {/* 2 */}
      <div className={styles.blocks}>
        <Slider {...settings}>
          <div className={styles.item} >
            <Image src={ImgTwoOne} alt='Аватарка' className={styles.item} width={270} height={300} />
          </div>
          <div>
            <Image src={ImgTwoTwo} alt='Аватарка' className={styles.item} width={250} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoThree} alt='Аватарка' className={styles.item} width={260} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoFour} alt='Аватарка' className={styles.item} width={280} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoFive} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoSix} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoSeven} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoEight} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoNine} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoTen} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgTwoEleven} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
        </Slider>
      </div>

      {/* 3 */}
      <div className={styles.blocks}>
        <Slider {...settings}>
          <div className={styles.item} >
            <Image src={ImgThreeOne} alt='Аватарка' className={styles.item} width={270} height={300} />
          </div>
          <div>
            <Image src={ImgThreeTwo} alt='Аватарка' className={styles.item} width={260} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeThree} alt='Аватарка' className={styles.item} width={330} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeFour} alt='Аватарка' className={styles.item} width={250} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeFive} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeSix} alt='Аватарка' className={styles.item} width={350} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeSeven} alt='Аватарка' className={styles.item} width={350} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeEight} alt='Аватарка' className={styles.item} width={280} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeNine} alt='Аватарка' className={styles.item} width={270} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeTen} alt='Аватарка' className={styles.item} width={340} height={300} /> 
          </div>
          <div>
            <Image src={ImgThreeEleven} alt='Аватарка' className={styles.item} width={300} height={300} /> 
          </div>
        </Slider>
      </div>

    </div>
  )
}

export default MyWorks
