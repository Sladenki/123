import React, { FC } from 'react'
import styles from './Title.module.scss'

const Title: FC<{name: string}> = ({ name }) => {
  return (
    <div className={styles.TitleWrapper}>
        <span >
            {name}
        </span>
    </div>

  )
}

export default Title
