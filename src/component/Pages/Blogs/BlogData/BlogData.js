import React, { Fragment } from "react";
import BlogBanner from "../BlogBanner/BlogBanner";
import styles from "./BlogData.module.css"
import Blogcontent from '../Blog.json'
import { useParams } from "react-router-dom";
import Relatedblog from "./RelatedBlog/Relatedblog";


function BlogData() {

  const blogId = useParams()
  // console.log(blogId , 'usestat')
  let x = []
 
  for (let key in  blogId)
  {
    x = blogId[key]
  }

  return (
    <Fragment>
      <BlogBanner/>
      <div className={styles.bodyCoontiner}>
      <div className={styles.leftcontainer}>
        <img
          width="100%"
          src={Blogcontent[x - 1].image}
        />
        <div className={styles.servicecontent}>
          <h1>{Blogcontent[x - 1].title}</h1>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: Blogcontent[x - 1].htmlsection }}/>
        </div>
      </div>
    
      {/* <Relatedblog/> */}
    </div>
    
    </Fragment>
  );
}

export default BlogData;
