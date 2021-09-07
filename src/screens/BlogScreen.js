import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css';

import { useTranslation } from 'react-i18next';

const BlogScreen = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isSorted, setIsSorted] = useState('');
  const [isFiltered, setIsFiltered] = useState('');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const blogDataFromi18n = i18n.t('blog.blogPostData.posts', {
      returnObjects: true,
    });
    setPosts(blogDataFromi18n);
    setFilteredPosts(blogDataFromi18n);
  }, [i18n, t]);

  const handleFilter = (value) => {
    console.log('posts: ' + posts);
    switch (value) {
      case 'all':
        setFilteredPosts(posts);
        break;
      case 'news':
        const news = posts.filter(
          (post) => post.category === 'news' || post.category === 'nyheter'
        );
        setFilteredPosts(news);
        break;
      case 'articles':
        const articles = posts.filter(
          (post) => post.category === 'article' || post.category === 'artikel'
        );
        setFilteredPosts(articles);
        break;
      default:
        setFilteredPosts(filteredPosts);
    }

    setIsFiltered(value);
  };

  const handleSort = (value) => {
    const sortedFilteredPosts = [...filteredPosts].sort(function (a, b) {
      var aDate = new Date(a.date);
      var bDate = new Date(b.date);

      if (value === 'latest') return bDate - aDate;
      else return aDate - bDate;
    });

    const sortedPosts = [...posts].sort(function (a, b) {
      var aDate = new Date(a.date);
      var bDate = new Date(b.date);

      if (value === 'latest') return bDate - aDate;
      else return aDate - bDate;
    });

    setFilteredPosts(sortedFilteredPosts);
    setPosts(sortedPosts);
    setIsSorted(value);
  };

  return (
    <section>
      <main className={Styles.mainContainer}>
        <label>{t('blog.blogPostData.filters.filterLabel')}:</label>
        <select id='filter' onChange={(e) => handleFilter(e.target.value)}>
          <option value='all'>{t('blog.blogPostData.filters.all')}</option>
          <option value='news'>{t('blog.blogPostData.filters.news')}</option>
          <option value='articles'>
            {t('blog.blogPostData.filters.articles')}
          </option>
        </select>
        <label>{t('blog.blogPostData.filters.sortLabel')}:</label>
        <select
          id='sort'
          onChange={(e) => handleSort(e.target.value, filteredPosts, posts)}
        >
          <option value='latest'>
            {t('blog.blogPostData.filters.latest')}
          </option>
          <option value='oldest'>
            {t('blog.blogPostData.filters.oldest')}
          </option>
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
                <p className={Styles.blogText}>{post.text}</p>
                <div className={Styles.blogPostBottom}>
                  <p className={Styles.blogAuthor}>
                    {t('blog.publishedText')} {post.author}
                  </p>
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
