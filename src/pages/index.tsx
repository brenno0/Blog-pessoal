import React from "react";
import Header from "../components/header";
import { PreviewPosts } from '../components/PreviewPosts/index';

import { signIn,signOut,useSession } from "next-auth/client"
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom'


import Image  from 'next/image';
import HomeSvg from '../../public/Home.svg';

import {AiFillGithub,AiOutlineGoogle } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

import styles from '../styles/home.module.scss';
interface PostsData { 
  uid:string;
  lastPublicationDate:string;
  data:{
      image:{
        src:string;
      };
      title:string;
      description:string;
  }
}
interface PostsProps {
  posts:PostsData[];
}

export default function Home({posts}:PostsProps) {
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
        <PreviewPosts posts={posts}/>

    </>
  )
}
export const getStaticProps:GetStaticProps = async () => {

  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')
  ],{
    pageSize:100,
  }
  );

  const posts = response.results.map(post => {
      return {
        uid:post.uid,
        lastPublicationDate:post.last_publication_date,
        data:{
          image:{
            src:post.data.image.url,
          },
          title:post.data.title.map(title =>  {return title.text}),
          description:post.data.content.substr(0,50) + '...'
        },
      }
  })
  const log = posts.map(post => post.data.title)
  console.log('response',log)
  return{
    props:{
      posts,
    }
  }
}

