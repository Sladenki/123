import React from 'react'
import styles from './MyServices.module.scss'
import Title from '@/app/ui/Title/Title'

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
