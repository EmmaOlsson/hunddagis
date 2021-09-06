import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css'

import { useTranslation } from 'react-i18next';

const BlogScreen = () => {

    const [blogData, setBlogData] = useState([])

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const blogDataFromi18n = i18n.t('blog.blogPostData', {
            returnObjects: true
        })
          setBlogData(blogDataFromi18n)
    }, [i18n, t])

    console.log('blogData', blogData)

    return <section>
        <main className={Styles.mainContainer}>
            <div className={Styles.topAbout}>
                <article className={Styles.blogPosts}>
                    <h2>{t('blog.title')}</h2>
                    {
                        blogData.map((blog) => {
                            return <section className={Styles.blogPostsContainer} key={blog.id}>
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