import React, { FC } from 'react'
import styles from './Brows.module.scss'
import TitleWithOutBorder from '@/app/ui/TitleWithOutBorder/TitleWithOutBorder'
import { motion } from 'framer-motion';

const Brows: FC<{isVisible: boolean}> = ({isVisible}) => {

  const blockVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };


  return (
    <div className={styles.BrowsWrapper}>
      <motion.div
        variants={blockVariantsLeft}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <div>
          <TitleWithOutBorder name="Брови"/>
        </div>
      </motion.div>
       
      <div className={styles.textBrows}>
        <ul>
          <li>
            <span>Комплекс 1 - 1.500₽</span>
          </li>

          <span className={styles.desc}>Коррекция пинцет/воск + окрашивание</span>

          <li>
            <span>Комплекс 2 - 2.500₽</span>
          </li>

          <span className={styles.desc}>Долговременная укладка бровей + окрашивание + коррекция пинцетом, воском</span>

        </ul>
      </div>
    </div>
  )
}

export default Brows
