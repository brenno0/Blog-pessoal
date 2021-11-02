import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";
import Header from "../../components/header";
import { getPrismicClient } from "../../services/prismic";
import style from '../../styles/post.module.scss';
import Prismic from '@prismicio/client';
import { RichText } from "prismic-dom";

interface PostData { 
  post:{
    uid:string;
    data:{
        image:{
          src:string;
        };
        title:string;
        content:string;
    }
  }
  
}

export default function Post({ post }: PostData) {
  
  useEffect(()=> {

  },[])
    return (
        <>
        <Header />
        <div className={style.postContainer}>
            <div className={style.imageContainer}>
                <img height={500} width={800} src={String(post.data.image.src)} alt="" />
            </div>
                <h3 className={style.postTitle}>{post.data.title}</h3>
                <p className={style.postText}>
                  {post.data.content}
                </p>
            </div>
        </>
    )
   
}

export const getStaticPaths: GetStaticPaths = async context => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.Predicates.at('document.type', 'publication'),
  ]);

  const paths = posts.results.map(post => {
    return {
      params: {
        uid: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps:GetStaticProps = async context => {

    const prismic = getPrismicClient();
    const { uid } = context.params;
  const response = await prismic.getByUID('publication', String(uid), {});
  
  const post =  {
    uid:response.uid,
    data:{
      image:{
        src:response.data.image.url,
      },
      title:response.data.title.map(title =>  {return title.text}),
      content:response.data.content
    },
  }
    return{
      props:{
        post,
      }
    }
  }

