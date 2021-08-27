import React from "react";
import Header from "../components/header";
import styles from '../styles/home.module.scss';
import Image  from 'next/image';
import HomeSvg from '../../public/Home.svg';
import { AiOutlineTwitter,AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Blog posts</h2>
          <h2 className={styles.subtitle}>I think so, this is it.</h2>
          <p>
            Design begins after I begin to think about how to present an experience 
            most successfully, whether a button I put in can solve a problem.
            The only point in design is not ui design, if the user does not have a
            good experience at the end of the product,
            the design will be considered unsuccessful in my opinion.
          </p>
        <div className={styles.formContainer}>
            <button type="button" className={`${styles.twitter} ${styles.buttonLogin}`}><AiOutlineTwitter  size="20" color="#FFF"/><span>Twitter</span></button>
            <button type="button" className={`${styles.linkedin} ${styles.buttonLogin}`}><FaLinkedinIn size="20"  color="#FFF" /><span>Linkedin</span></button>
            <button type="button" className={`${styles.github} ${styles.buttonLogin}`}><AiFillGithub  size="20" color="#FFF" /><span>github</span></button>
        </div>
        </div>
      
        <div className={styles.images}>
          <Image src={HomeSvg} alt="Guy Reading A Book" />
        </div>
      </div>
    </>
  )
}
