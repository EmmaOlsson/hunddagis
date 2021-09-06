import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css';

import { useTranslation } from 'react-i18next';


const BlogScreen = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const blogDataFromi18n = i18n.t('blog.blogPostData', {
            returnObjects: true
        })
        setPosts(blogDataFromi18n);
        setFilteredPosts(blogDataFromi18n);
    }, [i18n, t])


    const handleFilter = (value) => {
        switch (value) {
            case 'all':
                setFilteredPosts(posts);
                break;
            case 'news':
                const news = posts.filter(
                    (post) => post.category === ('news' || 'nyhet')
                );
                setFilteredPosts(news);
                break;
            case 'articles':
                const articles = posts.filter(
                    (post) => post.category === ('article' || 'artikel')
                );
                setFilteredPosts(articles);
        }
    };

    const handleSort = (value) => {
        const sortedPosts = [...filteredPosts].sort(function (a, b) {
            var aDate = new Date(a.date);
            var bDate = new Date(b.date);

            if (value === 'latest') return bDate - aDate;
            else return aDate - bDate;
        });

        setFilteredPosts(sortedPosts);
    };

    return (
        <section>
            <main className={Styles.mainContainer}>
                <label for='filter'>Filtrera:</label>
                <select id='filter' onChange={(e) => handleFilter(e.target.value)}>
                    <option value='all'>Visa alla</option>
                    <option value='news'>Nyheter</option>
                    <option value='articles'>Artiklar</option>
                </select>
                <label for='sort'>Sort:</label>
                <select id='sort' onChange={(e) => handleSort(e.target.value)}>
                    <option value='latest'>Nyast först</option>
                    <option value='oldest'>Äldst först</option>
                </select>
                <article className={Styles.blogPosts}>
                    <h2>{t('blog.title')}</h2>
                    {filteredPosts.map((post) => {
                        return (
                            <section key={post.id} className={Styles.blogPostContent}>
                                <div className={Styles.blogPostTop}>
                                    <h3 className={Styles.blogTitle}>{post.title}</h3>
                                    <h5 className={Styles.blogCategory}>{post.category}</h5>
                                </div>
                                {/*                                     <h4 className={Styles.blogCategory}>{post.article}</h4>
 */}
                                <p className={Styles.blogText}>{post.text}</p>
                                <div className={Styles.blogPostBottom}>
                                    <p className={Styles.blogAuthor}>{t('blog.publishedText')} {post.author}</p>
                                    <p className={Styles.blogDate}>{post.date}</p>
                                </div>

                            </section>
                        );
                    })}
                </article>
            </main>
        </section>
    );
};

export default BlogScreen;
