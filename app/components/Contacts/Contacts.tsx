import React from 'react'
import styles from './Contacts.module.scss'
import Title from '@/app/ui/Title/Title'
import Image from 'next/image'

import InstagramSVG from '../../../images/socialNetworks/instagram.svg'
import TelegramSVG from '../../../images/socialNetworks/telegram.svg'
import VKSVG from '../../../images/socialNetworks/vk.svg'

const Contacts = () => {
  return (
    <div className={styles.ContactsWrapper}>

        <div className={styles.title}>
            <Title name="Контакты"/>
        </div>
        

        <div className={styles.links}>
            <div className={styles.SocialBlock}>
                <div className={styles.SocialNetworkItem}>
                    <Image src={InstagramSVG} width={30} height={30} alt="Instagram" />
                </div>

                <span className={styles.textLink}>@aksinya_777</span>
            </div>

            <div className={styles.SocialBlock}>
                <div className={styles.SocialNetworkItem}>
                    <Image src={TelegramSVG} width={30} height={30} alt="Telegram" />
                </div>

                <span className={styles.textLink}>@aksinya_7777</span>
            </div>

            <div className={styles.SocialBlock}>
                <div className={styles.SocialNetworkItem}>
                    <Image src={VKSVG} width={30} height={30} alt="VK" />
                </div>

                <span className={styles.textLink}>@aks777</span>
            </div>

        </div>

    </div>
  )
}

export default Contacts
