import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css'

import blogPosts from '../assets/data/blogPosts'

const BlogScreen = () => {

    const [blogData, setBlogData] = useState([])

    useEffect(() => {
  
          setBlogData(blogPosts)
  
    }, [])

    console.log('blogdata', blogData)

    return <section>
        <main className={Styles.mainContainer}>
            <div className={Styles.topAbout}>
                <article className={Styles.blogPosts}>
                    <h2>Blogg</h2>
                    {
                        blogData.map((blog) => {
                            return <section className={Styles.blogPostsContainer}>
                                <h3>{blog.title}</h3>
                                <h4>{blog.article}</h4>
                                <h5>{blog.date}</h5>
                                <h5>{blog.category}</h5>
                                <p>{blog.text}</p>
                                <p>{blog.author}</p>
                            </section>
                        })
                    }
                </article>
                <aside className={Styles.latestPictures}>
                    <h2 className={Styles.pictureTitle}>Senaste bilderna</h2>
                </aside>
            </div>
        </main>
    </section>
}

export default BlogScreen;