"use client"

import React, { FC } from 'react'
import styles from './MakeUp.module.scss'
import TitleWithOutBorder from '@/app/ui/TitleWithOutBorder/TitleWithOutBorder'
import { motion } from 'framer-motion';


const MakeUp: FC<{isVisible: boolean}> = ({isVisible}) => {

  const blockVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className={styles.MakeUpWrapper}>
       <div className={styles.textMakeUp}>
          <ul>
            <li>
              <span>Дневной / Вечерний - <span className={styles.price}>5.000₽</span></span>
            </li>
            <li>
              <span>Креативный / Свадебный - <span className={styles.price}>6.000₽</span></span>
            </li>

          </ul>
        </div>

        <motion.div
         
            variants={blockVariantsRight}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
        >
          <TitleWithOutBorder name="Макияж"/>
        </motion.div>
    </div>
  )
}

export default MakeUp
