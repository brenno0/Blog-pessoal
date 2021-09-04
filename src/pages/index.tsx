import React from "react";
import { signIn,signOut,useSession } from "next-auth/client"
import Header from "../components/header";
import styles from '../styles/home.module.scss';
import Image  from 'next/image';
import HomeSvg from '../../public/Home.svg';
import {AiFillGithub,AiOutlineGoogle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

export default function Home() {
  const [session,loading] = useSession()


  const handleWithGithubLogin = () => {
    if(!session) {
      signIn('github')
    }else {
      // history.push('/posts')
    }
  }
  const handleFacebookLogin = () => {
    if(!session) {
      signIn('facebook')
    }else {
      // history.push('/posts')
    }
  }
  const handleGoogleLogin = () => {
    if(!session) {
      signIn('google')
    }else {
      // history.push('/posts')
    }
  }
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
            <button type="button" onClick={() => handleGoogleLogin()} className={`${styles.google} ${styles.buttonLogin}`}><AiOutlineGoogle  size="20" color="#FFF"/><span>Google</span></button>
            <button type="button" onClick={() => handleFacebookLogin()} className={`${styles.linkedin} ${styles.buttonLogin}`}><AiFillFacebook size="20"  color="#FFF" /><span>Facebook</span></button>
            <button type="button" onClick={() => handleWithGithubLogin()} className={`${styles.github} ${styles.buttonLogin}`}><AiFillGithub  size="20" color="#FFF" /><span>github</span></button>
        </div>
        </div>
      
        <div className={styles.images}>
          <Image src={HomeSvg} alt="Guy Reading A Book" />
        </div>
      </div>
    </>
  )
}
