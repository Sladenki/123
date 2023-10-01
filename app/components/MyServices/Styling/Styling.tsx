import React, { FC } from 'react'
import styles from './Styling.module.scss'
import TitleWithOutBorder from '@/app/ui/TitleWithOutBorder/TitleWithOutBorder'
import { motion } from 'framer-motion'

const textOne = 'Волны'

const textTwo = 'Кудри'

const textTree = 'Локоны'

const textFour = 'Пучки'

const Styling: FC<{isVisible: boolean}> = ({isVisible}) => {

  const blockVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };


  return (
    <div className={styles.StylingWrapper}>

        <div className={styles.textStyling}>
          <ul>
            <li><span>{textOne}</span></li>
            <li><span>{textTwo}</span></li>
            <li><span>{textTree}</span></li>
            <li><span>{textFour}</span></li>
          </ul>
        </div>

        
        <motion.div
            variants={blockVariantsRight}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
          >
        <div className={styles.titleList}>
            <TitleWithOutBorder name="Укладки"/>
            <TitleWithOutBorder name="2.000 ₽"/>
        </div>
        </motion.div>

    </div>
  )
}

export default Styling
