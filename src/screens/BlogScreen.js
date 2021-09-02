import React from 'react';
import Styles from '../css/blog.module.css'

const BlogScreen = () => {
    return <section>
        <main className={Styles.mainContainer}>
            <div className={Styles.topAbout}>
                <article className={Styles.blogPosts}>
                    <h2>Blogg</h2>
                    <p>Snart hittar du de senaste inläggen och artiklarna här!</p>
                </article>
                <aside className={Styles.latestPictures}>
                    <h2 className={Styles.pictureTitle}>Senaste bilderna</h2>
                </aside>
            </div>
        </main>
    </section>
}

export default BlogScreen;