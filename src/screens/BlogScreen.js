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
                    <p>Snart hittar du de senaste inläggen och artiklarna här!</p>
                    {
                        blogData.map((blog) => {
                            return <section>
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