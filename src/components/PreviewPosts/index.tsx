import Link from 'next/link';
import styles from './postsPreview.module.scss';
import moment from 'moment'

import { useState } from 'react';
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


export const PreviewPosts = ({posts}: PostsProps) => {
    return (
        <main className={styles.postsContainer}>
            {posts?.map(post => (
                <div className={styles.postContainer}>
                <img height={300} width={450}  className={styles.postImage} src={post.data.image.src} />
                <div className={styles.postDate}> {moment(post.lastPublicationDate).format('DD/MM/YYYY')} </div>
                <h2 className={styles.postTitle}> {post.data.title} </h2>
                <div className={styles.postDescription}>
                   {post.data.description}
                </div>

                <Link href='/'><a>READ MORE</a></Link>
            </div>
            ))}
        </main>
    )
}

