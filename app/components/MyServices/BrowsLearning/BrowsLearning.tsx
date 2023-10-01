import React, { FC } from 'react'
import styles from './BrowsLearning.module.scss'
import TitleWithOutBorder from '@/app/ui/TitleWithOutBorder/TitleWithOutBorder'
import { motion } from 'framer-motion'

const textOne = 'Самостоятельно оформлять себе брови в домашних условиях'

const textTwo = 'Правильно использовать и наносить составы для ламинирования бровей'

const textTree = 'Подбирать правильную цветовую палитру под ваш цветотип внешности'

const textFour = 'Окрашивать стойким красителем и делать себе коррекцию бровей в домашних условиях'

const textFive = 'Подбирать правильную форму бровей под вашу форму лица'

const textSix = 'Оформлять брови декоративной косметикой'

const textSeven = 'Дам информацию где купить необходимые составы🤗 '

const BrowsLearning: FC<{isVisible: boolean}> = ({isVisible}) => {

  const blockVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className={styles.BrowsLearningWrapper}>

        <div className={styles.textBrowsLearning}>
            <span className={styles.YouWillLearn}>Вы научитесь:</span>
          <ul>
            <li><span>{textOne}</span></li>
            <li><span>{textTwo}</span></li>
            <li><span>{textTree}</span></li>
            <li><span>{textFour}</span></li>
            <li><span>{textFive}</span></li>
            <li><span>{textSix}</span></li>
            <li><span>{textSeven}</span></li>
          </ul>
        </div>

        <motion.div
          variants={blockVariantsRight}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.titleList}>
            <TitleWithOutBorder name="Обучение"/>
            <TitleWithOutBorder name="'Сам себе бровист'"/>
            <TitleWithOutBorder name="10.000 ₽"/>
          </div>
        </motion.div>
    </div>
  )
}

export default BrowsLearning
