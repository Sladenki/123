"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './MyWorks.module.scss'
import Title from '@/app/ui/Title/Title'

// Слайдер
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Первый слайдер
import ImgOneOne from '../../../images/MyWorks/1/1.jpeg'
import ImgOneTwo from '../../../images/MyWorks/1/2.jpeg'
import ImgOneThree from '../../../images/MyWorks/1/3.jpeg'
import ImgOneFour from '../../../images/MyWorks/1/4.jpeg'
import ImgOneFive from '../../../images/MyWorks/1/5.jpeg'
import ImgOneSix from '../../../images/MyWorks/1/6.jpeg'
import ImgOneSeven from '../../../images/MyWorks/1/7.jpeg'
import ImgOneEight from '../../../images/MyWorks/1/8.jpg'
import ImgOneNine from '../../../images/MyWorks/1/9.jpeg'
import ImgOneTen from '../../../images/MyWorks/1/10.jpg'
import ImgOneEleven from '../../../images/MyWorks/1/11.jpg'

// Второй слайдер
import ImgTwoOne from '../../../images/MyWorks/2/1.jpg'
import ImgTwoTwo from '../../../images/MyWorks/2/2.jpeg'
import ImgTwoThree from '../../../images/MyWorks/2/3.jpg'
import ImgTwoFour from '../../../images/MyWorks/2/4.jpg'
import ImgTwoFive from '../../../images/MyWorks/2/5.jpeg'
import ImgTwoSix from '../../../images/MyWorks/2/6.jpeg'
import ImgTwoSeven from '../../../images/MyWorks/2/7.jpeg'
import ImgTwoEight from '../../../images/MyWorks/2/8.jpg'
import ImgTwoNine from '../../../images/MyWorks/2/9.jpeg'
import ImgTwoTen from '../../../images/MyWorks/2/10.jpg'
import ImgTwoEleven from '../../../images/MyWorks/2/11.jpg'

// Третий слайдер
import ImgThreeOne from '../../../images/MyWorks/3/1.png'
import ImgThreeTwo from '../../../images/MyWorks/3/2.jpg'
import ImgThreeThree from '../../../images/MyWorks/3/3.jpg'
import ImgThreeFour from '../../../images/MyWorks/3/4.jpeg'
import ImgThreeFive from '../../../images/MyWorks/3/5.jpg'
import ImgThreeSix from '../../../images/MyWorks/3/6.jpg'
import ImgThreeSeven from '../../../images/MyWorks/3/7.jpeg'
import ImgThreeEight from '../../../images/MyWorks/3/8.jpg'
import ImgThreeNine from '../../../images/MyWorks/3/9.jpeg'
import ImgThreeTen from '../../../images/MyWorks/3/10.jpeg'
import ImgThreeEleven from '../../../images/MyWorks/3/11.jpg'

// Просмотр фото
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

const MyWorks = () => {

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slidesPerGroup, setSlidesPerGroup] = useState(3);
  const [isCenter, setIsCenter] = useState(true)
  const [isDots, setIsDots] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setSlidesPerView(3);
        setSlidesPerGroup(3);
      }


      if (window.innerWidth < 1200) {
        setSlidesPerView(2);
        setSlidesPerGroup(2);
      }

      if (window.innerWidth < 890) {
        setSlidesPerView(1);
        setSlidesPerGroup(1);
        setIsDots(false)
      }

    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    dots: isDots,
    infinite: true,
    // centerMode: isCenter,
    speed: 500,
    slidesToShow: slidesPerGroup,
    slidesToScroll: slidesPerView,
    initialSlide: 0,
  };





  return (
    <div className={styles.MyWorksWrapper}>
        <div className={styles.title}>
            <Title name="Мои работы"/>
        </div>

        {/* 1 */}
        <div className={styles.blocks}>
       
          <Slider {...settings}>
         
                  
            <div className={styles.itemWrapper}>
              <div className={styles.item} >
          
              <PhotoProvider>
              <PhotoView  src='https://disk.yandex.ru/i/hH-UK4qHXPkmoQ'>
                    <Image src={ImgOneOne} alt='Аватарка' className={`${styles.item} `}  />
                    </PhotoView>
                    </PhotoProvider>
                 
             
              </div>
            </div>
           
                

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneTwo} alt='Аватарка' className={`${styles.item} `} />  
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneThree} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneFour} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>
            
            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneFive} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneSix} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneSeven} alt='Аватарка' className={`${styles.large} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneEight} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneNine} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneTen} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <Image src={ImgOneEleven} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>
          </Slider>
          
      </div>

      {/* 2 */}
      <div className={styles.blocks}>
        <Slider {...settings}>
          <div className={styles.itemWrapper}>
            <div className={styles.item} >
              <Image src={ImgTwoOne} alt='Аватарка' className={`${styles.item}`} />
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoTwo} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>
          
          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoThree} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoFour} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoFive} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoSix} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoSeven} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoEight} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoNine} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoTen} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgTwoEleven} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

        </Slider>
      </div>

      {/* 3 */}
      <div className={styles.blocks}>
        <Slider {...settings}>

          <div className={styles.itemWrapper}>
            <div className={styles.item} >
              <Image src={ImgThreeOne} alt='Аватарка' className={`${styles.tall}`} />
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeTwo} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeThree} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeFour} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeFive} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeSix} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeSeven} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeEight} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeNine} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeTen} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <Image src={ImgThreeEleven} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>
          
        </Slider>
      </div>

    </div>
  )
}

export default MyWorks
