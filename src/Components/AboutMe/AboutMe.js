import React from 'react'
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.aboutMeDiv}>
        <img src="images/MyFace.jpg" alt="" />
        <div className={styles.aboutMeContent}>
          <p>
            Hi! I am an avid outdoorsman turned Software Engineer. I have participated in two bootcamps. One in highschool focused on Ruby on Rails. The other was focused on the react framework. What can I build for you?
          </p>
          </div>
    </div>
  )
}

export default AboutMe