import React from "react";
import styles from "./VideoContainer.module.css";
import { AiFillYoutube } from "react-icons/ai";

function VideoContainer() {
  return (
    <div className={styles.mediaContiner}>
      <h1>Our Videos</h1>
      <div className={styles.subscribe}>
        <p>Subscribe our YouTube Channel</p>
        <a href="https://www.youtube.com/" className={styles.email}>
                  <button>
                    <AiFillYoutube size={30}/>
                     YouTube
                  </button>
                </a>
      </div>
      <div data-aos="fade-down" className={styles.videoContainer}>
        <iframe
          width="300px"
          height="215px"
          src="https://www.youtube.com/embed/jV8B24rSN5o"
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:215px}img,span{position:absolute;width:300;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/53awYthbp1o?autoplay=1><img src=https://img.youtube.com/vi/jV8B24rSN5o/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span style= 'margin-left:45%'>▶</span></a>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
        ></iframe>
        <iframe
          width="300px"
          height="215px"
          src="https://www.youtube.com/embed/jV8B24rSN5o"
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:215px}img,span{position:absolute;width:300;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/53awYthbp1o?autoplay=1><img src=https://img.youtube.com/vi/jV8B24rSN5o/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span style= 'margin-left:45%'>▶</span></a>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
        ></iframe>
        <iframe
          width="300px"
          height="215px"
          src="https://www.youtube.com/embed/jV8B24rSN5o"
          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:215px}img,span{position:absolute;width:300;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/53awYthbp1o?autoplay=1><img src=https://img.youtube.com/vi/jV8B24rSN5o/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span style= 'margin-left:45%'>▶</span></a>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
        ></iframe>
      </div>
      <div className={styles.viewAll}>
      <button>view all</button>
      </div>
    </div>
  );
}

export default VideoContainer;
