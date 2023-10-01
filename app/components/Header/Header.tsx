"use client"

import React, { useEffect } from 'react'
import styles from './Header.module.scss'

const Header = () => {

  useEffect(() => {
    const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const aboutMeLink = document.getElementById('about-me-link');
    if (aboutMeLink) {
      aboutMeLink.addEventListener('click', () => handleScroll('about-me'));
    }

    const myWorksLink = document.getElementById('my-works-link');
    if (myWorksLink) {
      myWorksLink.addEventListener('click', () => handleScroll('my-works'));
    }

    const servicesLink = document.getElementById('services-link');
    if (servicesLink) {
      servicesLink.addEventListener('click', () => handleScroll('services'));
    }

    const contactsLink = document.getElementById('contacts-link');
    if (contactsLink) {
      contactsLink.addEventListener('click', () => handleScroll('contacts'));
    }

    return () => {
      if (aboutMeLink) {
        aboutMeLink.removeEventListener('click', () => handleScroll('about-me'));
      }
      if (myWorksLink) {
        myWorksLink.removeEventListener('click', () => handleScroll('my-works'));
      }
      if (servicesLink) {
        servicesLink.removeEventListener('click', () => handleScroll('services'));
      }
      if (contactsLink) {
        contactsLink.removeEventListener('click', () => handleScroll('contacts'));
      }
    };
  }, []);

  return (
    <div className={styles.HeaderWrapper}>
      <span id="about-me-link">Обо мне</span>
      <span id="my-works-link">Мои работы</span>
      <span id="services-link">Услуги</span>
      <span id="contacts-link">Контакты</span>
    </div>
  )
}

export default Header
