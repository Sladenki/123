"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ExportedImage from "next-image-export-optimizer";
import styles from './MyWorks.module.scss'
import Title from '@/app/ui/Title/Title'

// Слайдер
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Первый слайдер
import ImgOneOne from '/public/images/MyWorks/1/1.jpeg'
import ImgOneTwo from '/public/images/MyWorks/1/2.jpeg'
import ImgOneThree from '/public/images/MyWorks/1/3.jpeg'
import ImgOneFour from '/public/images/MyWorks/1/4.jpeg'
import ImgOneFive from '/public/images/MyWorks/1/5.jpeg'
import ImgOneSix from '/public/images/MyWorks/1/6.jpeg'
import ImgOneSeven from '/public/images/MyWorks/1/7.jpeg'
import ImgOneEight from '/public/images/MyWorks/1/8.jpg'
import ImgOneNine from '/public/images/MyWorks/1/9.jpeg'
import ImgOneTen from '/public/images/MyWorks/1/10.jpg'
import ImgOneEleven from '/public/images/MyWorks/1/11.jpg'

// Второй слайдер
import ImgTwoOne from '/public/images/MyWorks/2/1.jpg'
import ImgTwoTwo from '/public/images/MyWorks/2/2.jpeg'
import ImgTwoThree from '/public/images/MyWorks/2/3.jpg'
import ImgTwoFour from '/public/images/MyWorks/2/4.jpg'
import ImgTwoFive from '/public/images/MyWorks/2/5.jpeg'
import ImgTwoSix from '/public/images/MyWorks/2/6.jpeg'
import ImgTwoSeven from '/public/images/MyWorks/2/7.jpeg'
import ImgTwoEight from '/public/images/MyWorks/2/8.jpg'
import ImgTwoNine from '/public/images/MyWorks/2/9.jpeg'
import ImgTwoTen from '/public/images/MyWorks/2/10.jpg'
import ImgTwoEleven from '/public/images/MyWorks/2/11.jpg'

// Третий слайдер
import ImgThreeOne from '/public/images/MyWorks/3/1.png'
import ImgThreeTwo from '/public/images/MyWorks/3/2.jpg'
import ImgThreeThree from '/public/images/MyWorks/3/3.jpg'
import ImgThreeFour from '/public/images/MyWorks/3/4.jpeg'
import ImgThreeFive from '/public/images/MyWorks/3/5.jpg'
import ImgThreeSix from '/public/images/MyWorks/3/6.jpg'
import ImgThreeSeven from '/public/images/MyWorks/3/7.jpeg'
import ImgThreeEight from '/public/images/MyWorks/3/8.jpg'
import ImgThreeNine from '/public/images/MyWorks/3/9.jpeg'
import ImgThreeTen from '/public/images/MyWorks/3/10.jpeg'
import ImgThreeEleven from '/public/images/MyWorks/3/11.jpg'

// Просмотр фото

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
                <ExportedImage src={ImgOneOne} alt='Аватарка' className={`${styles.item} `}  />
              </div>
            </div>
           
            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneTwo} alt='Аватарка' className={`${styles.item} `} />  
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneThree} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneFour} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>
            
            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneFive} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneSix} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneSeven} alt='Аватарка' className={`${styles.large} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneEight} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneNine} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneTen} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>

            <div className={styles.itemWrapper}>
              <div>
                <ExportedImage src={ImgOneEleven} alt='Аватарка' className={`${styles.item} `} /> 
              </div>
            </div>
          </Slider>
          
      </div>

      {/* 2 */}
      <div className={styles.blocks}>
        <Slider {...settings}>
          <div className={styles.itemWrapper}>
            <div className={styles.item} >
              <ExportedImage src={ImgTwoOne} alt='Аватарка' className={`${styles.item}`} />
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoTwo} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>
          
          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoThree} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoFour} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoFive} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoSix} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoSeven} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoEight} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoNine} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoTen} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgTwoEleven} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

        </Slider>
      </div>

      {/* 3 */}
      <div className={styles.blocks}>
        <Slider {...settings}>

          <div className={styles.itemWrapper}>
            <div className={styles.item} >
              <ExportedImage src={ImgThreeOne} alt='Аватарка' className={`${styles.tall}`} />
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeTwo} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeThree} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeFour} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeFive} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeSix} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeSeven} alt='Аватарка' className={`${styles.item}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeEight} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeNine} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeTen} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>

          <div className={styles.itemWrapper}>
            <div>
              <ExportedImage src={ImgThreeEleven} alt='Аватарка' className={`${styles.large}`} /> 
            </div>
          </div>
          
        </Slider>
      </div>

    </div>
  )
}

export default MyWorks
