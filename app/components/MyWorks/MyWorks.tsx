import React from 'react'
import styles from './MyWorks.module.scss'
import Title from '@/app/ui/Title/Title'

const MyWorks = () => {


  return (
    <div className={styles.MyWorksWrapper}>
        <div className={styles.title}>
            <Title name="Мои работы"/>
        </div>
       

        <div className={styles.blocks}>
            <div className={styles.item}>1</div>
            <div className={styles.item}>2</div>
            <div className={styles.item}>3</div>
            <div className={styles.item}>4</div>
            <div className={styles.item}>5</div>
            <div className={styles.item}>6</div>
        </div>
    </div>
  )
}

export default MyWorks
