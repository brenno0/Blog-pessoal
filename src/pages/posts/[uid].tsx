import React from "react";
import Header from "../../components/header";
import style from '../../styles/post.module.scss';

export default function Post() {
    return (
        <>
        <Header />
        <div className={style.postContainer}>
            <div className={style.imageContainer}>
                <img height={500} width={1100} src="https://media.steelseriescdn.com/thumbs/blog/posts/6-ways-to-make-your-pc-setup-look-awesome/5a5af93b19cd4be5ba8ce4cc27467856.jpg.1920x1080_q100_crop-scale_optimize_upscale.jpg" alt="" />
            </div>
                <h3 className={style.postTitle}>BLOG DETAILS</h3>
                <p className={style.postText}>
                        Just like graphic design and web development, UX design trends come and go for a reason. UX is 
                    all about developing a better digital world for humanity. It’s a field that requires innovation, but 
                    that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
                    changes in the industry, as well as develop your UX skills.

                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take. 
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.
                </p>
            </div>
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

