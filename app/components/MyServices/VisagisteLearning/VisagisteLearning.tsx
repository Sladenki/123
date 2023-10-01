import React, { FC } from 'react'
import styles from './VisagisteLearning.module.scss'
import TitleWithOutBorder from '@/app/ui/TitleWithOutBorder/TitleWithOutBorder'
import { motion } from 'framer-motion'

const textOne = 'Поэтапно научимся делать дневной и вечерний макияж'

const textTwo = 'Научимся правильно расставлять акценты'

const textTree = 'Поговорим о особенностях лица и кожи'

const textFour = 'Подберем cрeдcтва по типу кожи'

const textFive = 'Расскажу свои лайфхаки и конечно подберу косметичку по бюджету💄'

const VisagisteLearning: FC<{isVisible: boolean}> = ({isVisible}) => {

  const blockVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className={styles.VisagisteLearningWrapper}>
      <motion.div
        variants={blockVariantsLeft}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
     >
        <div className={styles.titleList}>
          <TitleWithOutBorder name="Обучение"/>
          <TitleWithOutBorder name="'Сам себе визажист'"/>
          <TitleWithOutBorder name="10.000 ₽"/>
        </div>
      </motion.div>
 
        <div className={styles.textVisagisteLearning}>
          <ul>
            <li><span>{textOne}</span></li>
            <li><span>{textTwo}</span></li>
            <li><span>{textTree}</span></li>
            <li><span>{textFour}</span></li>
            <li><span>{textFive}</span></li>
          </ul>
        </div>
    </div>
  )
}

export default VisagisteLearning
