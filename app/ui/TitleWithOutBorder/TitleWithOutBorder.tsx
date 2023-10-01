import React, { FC } from 'react'
import styles from './TitleWithOutBorder.module.scss'

const TitleWithOutBorder: FC<{name: string}> = ({ name }) => {
  return (
    <div className={styles.TitleWithOutBorderWrapper}>
        <span >
            {name}
        </span>
    </div>      
  )
}

export default TitleWithOutBorder
