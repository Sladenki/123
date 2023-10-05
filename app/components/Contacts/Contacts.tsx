import React from 'react'
import styles from './Contacts.module.scss'
import Title from '@/app/ui/Title/Title'
import Image from 'next/image'
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link'

import InstagramSVG from '/public/images/socialNetworks/instagram.svg'
import TelegramSVG from '/public/images/socialNetworks/telegram.svg'
import VKSVG from '/public/images/socialNetworks/vk.svg'

const InstLink = 'https://www.instagram.com/aksinya_777'

const TgLink = 'https://t.me/aksinya_7777'

const VkLink = 'https://vk.com/aks777'

const Contacts = () => {
  return (
    <div className={styles.ContactsWrapper}>

        <div className={styles.title}>
            <Title name="Контакты"/>
        </div>
        

        <div className={styles.links}>
            <Link href={InstLink} target="_blank">
                <div className={styles.SocialBlock}>
                    <div className={styles.SocialNetworkItem}>
                        <ExportedImage src={InstagramSVG} width={30} height={30} alt="Instagram" />
                    </div>

                    <span className={styles.textLink}>@aksinya_777</span>
                </div>
            </Link>

            <Link href={TgLink} target="_blank">
                <div className={styles.SocialBlock}>
                    <div className={styles.SocialNetworkItem}>
                        <ExportedImage src={TelegramSVG} width={30} height={30} alt="Telegram" />
                    </div>

                    <span className={styles.textLink}>@aksinya_7777</span>
                </div>
            </Link>

            <Link href={VkLink} target="_blank">
                <div className={styles.SocialBlock}>
                    <div className={styles.SocialNetworkItem}>
                        <ExportedImage src={VKSVG} width={30} height={30} alt="VK" />
                    </div>

                    <span className={styles.textLink}>@aks777</span>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Contacts
