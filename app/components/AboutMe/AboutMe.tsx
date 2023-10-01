"use client"

import React from 'react'
import Image from 'next/image'
import styles from './AboutMe.module.scss'

// Аватарка
import Ava from '../../../images/ava.jpeg'
import Title from '../../ui/Title/Title'
import { motion } from 'framer-motion'

const textOne = 'Меня зовут Аксинья, я влюблена в   создание макияжа ещё с раннего детства и по сей день развиваюсь в этой сфере🙏🏻'

const textTwo = 'Вошла в ТОР 100 лучших визажистов МИРА🌎'

const textThree = 'Создала уникальный курс Путь ВИЗАЖИСТА С «0» до 100.000₽ где собраны все виды макияжа и месяц моего наставления доведет до стабильного заработка💸'

const blockVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const blockVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const AboutMe = () => {
  return (
    <>
      <div className={styles.AboutMeWrapper}>
  
        <motion.div
            variants={blockVariantsLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
          <Image src={Ava} alt='Аватарка' className={styles.AvaPhoto} width={140} height={140} /> 
        </motion.div>

        <div className={styles.textAboutMe}>
          <ul>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <span>{textOne}</span>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <span>{textTwo}</span>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <span>{textThree}</span>
            </motion.li>
          </ul>
        </div>

        <motion.div
            variants={blockVariantsRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
          <div className={styles.title}>
            <Title name="Обо мне"/>
          </div>
        </motion.div>
      </div>


      <div className={styles.AboutMeWrapperSmall}>
        <motion.div
            variants={blockVariantsRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
          <div className={styles.title}>
            <Title name="Обо мне"/>
          </div>
        </motion.div>

        <motion.div
            variants={blockVariantsLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
          <Image src={Ava} alt='Аватарка' className={styles.AvaPhoto} width={140} height={140} /> 
        </motion.div>

        <div className={styles.textAboutMe}>
          <ul>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <span>{textOne}</span>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <span>{textTwo}</span>
            </motion.li>
            <motion.li
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <span>{textThree}</span>
            </motion.li>
            </ul>
        </div>
      </div>
    </>

  )
}

export default AboutMe
