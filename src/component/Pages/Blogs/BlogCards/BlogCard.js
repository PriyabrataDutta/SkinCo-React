import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";
import blogs from "../Blog.json";


function BlogCard() {
  return (
    <div>
      {/* <div className={styles.breadcrumbs}><span>Home / Blogs</span>  </div> */}

      <div className={styles.cards}>
        {blogs.map((card, index)=> (<div>
          <div>
            <Link to={`/blogdata/${card.link}/${index + 1}`}>
              <img
                src={card.image}
                width="100%"
              />
            </Link>
          </div>
          <div className={styles.cardContent}>
            <h2>{card.title}</h2>
            <p>
             {card.maincontent}
            </p>
            <span>{card.date}</span>
          </div>
        </div>))} 
      </div>
    </div>
  );
}

export default BlogCard;
