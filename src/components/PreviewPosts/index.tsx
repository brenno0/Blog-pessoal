import Image from 'next/image';
import Link from 'next/link';

import styles from './postsPreview.module.scss';

import ComputerImage from '../../assets/images/Computer1.png'

import { GetStaticProps } from 'next';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';


interface PostsData { 
    uid:string;
    lastPublicationDate:string;
    data:{
        image:string;
        title:string;
        description:string;
    }
}
interface PreviewPostsProps {
    posts:PostsData[];
}

export const PreviewPosts = ({posts}:PreviewPostsProps) => {
    console.log('posts',posts);
    return (
        <main className={styles.postsContainer}>
            <div className={styles.postContainer}>
                <Image height={300} width={450} src={ComputerImage} className={styles.postImage}></Image>
                <div className={styles.postDate}>NOV 23 2021</div>
                <h2 className={styles.postTitle}>Brenno Rodrgues de Assis</h2>
                <div className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis ac nibh vel tellus bibendum iaculis. Integer non semper libero. 
                    Morbi non enim sapien. 
                    Proin bibendum ante nec lorem euismod, sed blandit lacus porta. 
                    Sed erat elit, sollicitudin eu porta eget, volutpat ut orci. Quisque eget ante accumsan, vehicula neque non, cursus mi. 
                   
                </div>

                <Link href='/'><a>READ MORE</a></Link>
            </div>
        </main>
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
                image:post.data.image,
                title:post.data.title,
                description:post.data.title.split("</p>").replace("<p>","")
            },
        }
    })
    return{
        props:{
            posts,
        }
    }
    
}