"use client"

import styles from './page.module.scss'

import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import ForYou from './components/ForYou/ForYou'
import MyWorks from './components/MyWorks/MyWorks'
import MyServices from './components/MyServices/MyServices'
import Contacts from './components/Contacts/Contacts'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import MakeUp from './components/MyServices/MakeUp/MakeUp'
import VisagisteLearning from './components/MyServices/VisagisteLearning/VisagisteLearning'
import Styling from './components/MyServices/Styling/Styling'
import Brows from './components/MyServices/Brows/Brows'
import BrowsLearning from './components/MyServices/BrowsLearning/BrowsLearning'

export default function Home() {

  {/* Макияж */}
  const [isVisibleMakeUp, setIsVisibleMakeUp] = useState(false);

  {/* Обучение сам себе визажист */}
  const [isVisagisteLearning, setIsVisagisteLearning] = useState(false);

  {/* Укладки */}
  const [isVisibleStyling, setIsVisibleStyling] = useState(false);

  {/* Брови */}
  const [isVisibleBrows, setIsVisibleBrows] = useState(false);

  {/* Обучение бровист */}
  const [isVisibleBrowsLearning, setIsVisibleBrowsLearning] = useState(false);

  // Для вас
  const [isVisibleForYou, setIsVisibleForYou] = useState(false);


  // Ссылки на блоки
  const refMakeUp = useRef(null);
  const refVisagisteLearning = useRef(null);
  const refStyling= useRef(null);
  const refBrows = useRef(null);
  const refBrowsLearning = useRef(null);
  const refForYou = useRef(null);
  
  // Проверка на видимость
  const inViewMakeUp = useInView(refMakeUp);
  const inViewVisagisteLearning = useInView(refVisagisteLearning);
  const inViewStyling = useInView(refStyling);
  const inViewBrows = useInView(refBrows);
  const inViewBrowsLearning = useInView(refBrowsLearning);
  const inViewForYou = useInView(refForYou);
  
  useEffect(() => {
    if (inViewMakeUp) {
      setIsVisibleMakeUp(true);
    }

    if (inViewVisagisteLearning) {
      setIsVisagisteLearning(true);
    }

    if (inViewStyling) {
      setIsVisibleStyling(true);
    }

    if (inViewBrows) {
      setIsVisibleBrows(true);
    }

    if (inViewBrowsLearning) {
      setIsVisibleBrowsLearning(true);
    }

    if (inViewForYou) {
      setIsVisibleForYou(true);
    }

  }, [inViewMakeUp, inViewVisagisteLearning, inViewStyling, inViewBrows, inViewBrowsLearning, inViewForYou]);

  
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <Header/>
      </div>
      

      <div className={styles.AboutMe} id="about-me">
        <AboutMe/>
      </div>

      <div ref={refForYou} className={styles.ForYou}>
        <ForYou isVisible={isVisibleForYou} />
      </div>

      <div className={styles.MyWorks} id="my-works">
        <MyWorks/>
      </div>

      {/* Услуги */}
      <div className={styles.MyServices} id="services">
        <MyServices/>

        <div ref={refMakeUp} className={styles.MakeUp}>
          <MakeUp isVisible={isVisibleMakeUp} />
        </div>

        <div ref={refVisagisteLearning}  className={styles.VisagisteLearning}> 
          <VisagisteLearning isVisible={isVisagisteLearning} />
        </div>

        <div ref={refStyling} className={styles.Styling}>
          <Styling isVisible={isVisibleStyling} />
        </div>

        <div ref={refBrows} className={styles.Brows}>
          <Brows isVisible={isVisibleBrows} />
        </div>

        <div ref={refBrowsLearning} className={styles.BrowsLearning}>
          <BrowsLearning isVisible={isVisibleBrowsLearning} />
        </div>
      </div>


      <div className={styles.Contacts} id="contacts">
        <Contacts/>
      </div>
     
    </div>
  )
}
