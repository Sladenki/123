import React, { FC } from 'react'
import styles from './MyServices.module.scss'
import Title from '@/app/ui/Title/Title'
import MakeUp from './MakeUp/MakeUp'
import VisagisteLearning from './VisagisteLearning/VisagisteLearning'
import Styling from './Styling/Styling'
import Brows from './Brows/Brows'
import BrowsLearning from './BrowsLearning/BrowsLearning'

const MyServices = () => {
  return (
    <div className={styles.MyServicesWrapper}>
      <span className={styles.title} >
          <Title name="Услуги"/>
      </span>

      <div className={styles.aboutPrice}>
        Обучение - Путь ТОП - Визажиста с «0»  рассчитывается индивидуально исходя из ваших предпочтений, пиши слово «профессия» и я проведу бесплатную консультацию🥰
      </div>
        
    </div>
  )
}

export default MyServices
