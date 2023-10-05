"use client"

import React, { FC } from 'react'
import styles from './ForYou.module.scss'
import TitleWithOutBorder from '@/app/ui/TitleWithOutBorder/TitleWithOutBorder'
import { motion } from 'framer-motion'


const textOne = 'МАКИЯЖ ЛЮБОЙ СЛОЖНОСТИ 🔝 от дневного до грима!'

const textTwo = 'ОБУЧАЮЩИЙ КУРС САМ СЕБЕ ВИЗАЖИСТ и ТОП ВИЗАЖИСТ С «0»'

const textThree = 'БРОВИ (окрашивание, долговременная укладка, коррекция, ботокс)'

const textFour = 'ОБУЧАЮЩИЙ КУРС САМ СЕБЕ БРОВИСТ и Профессия бровист с «0»'

const textFive = 'УКЛАДКИ'




const ForYou: FC<{isVisible: boolean}> = ({isVisible}) => {
  const blockVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div className={styles.ForYouWrapper}>
        <motion.div
          variants={blockVariantsLeft}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          >
          <span className={styles.forYouTitle}>
            <TitleWithOutBorder name="Для вас"/>
          </span>
        </motion.div>

        <div className={styles.textForYou}>
          <ul>

            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <span>{textOne}</span>
            </motion.li>

            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <span>{textTwo}</span>
            </motion.li>

            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <span>{textThree}</span>
            </motion.li>

            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
            >
              <span>{textFour}</span>
            </motion.li>

            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.9 }}
            >
              <span>{textFive}</span>
            </motion.li>

          </ul>
        </div>
    </div>
  )
}

export default ForYou
