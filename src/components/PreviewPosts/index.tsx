import Link from 'next/link';
import styles from './postsPreview.module.scss';
import moment from 'moment'

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/dist/client/router';
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
    posts?:PostsData[];
  }

export const PreviewPosts = ({posts}: PostsProps,) => {

  const router = useRouter();
  const [ session,status ] = useSession()

  const handleRedirectClickedLink = (e) => {
    if(session){
      const uid = posts.map(post => post.uid)
      router.push(`/posts/${uid}`)
    }else {
      signIn('google')
    }
    console.log('session',session)
  }
    

    return (
        <main className={styles.postsContainer}>
            {posts?.map(post => (
                <div key={post.uid} className={styles.postContainer}>
                <img height={300} width={450}  className={styles.postImage} src={post.data.image.src} />
                <div className={styles.postDate}> {moment(post.lastPublicationDate).format('DD/MM/YYYY')} </div>
                <h2 className={styles.postTitle}> {post.data.title} </h2>
                <div className={styles.postDescription}>
                   {post.data.description}
                </div>

                <button className={styles.buttonProperties} onClick={(e) => handleRedirectClickedLink(e)}><a>READ MORE</a></button>
            </div>
            ))}
        </main>
    )
}

