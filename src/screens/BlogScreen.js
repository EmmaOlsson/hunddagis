import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css';

import { useTranslation } from 'react-i18next';

const BlogScreen = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const blogDataFromi18n = i18n.t('blog.blogPostData', {
      returnObjects: true,
    });
    setPosts(blogDataFromi18n);
    setFilteredPosts(blogDataFromi18n);
  }, [i18n, t]);

  const handleFilter = (value) => {
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
  };

  return (
    <section>
      <main className={Styles.mainContainer}>
        <label>Filtrera:</label>
        <select id='filter' onChange={(e) => handleFilter(e.target.value)}>
          <option value='all'>Visa alla</option>
          <option value='news'>Nyheter</option>
          <option value='articles'>Artiklar</option>
        </select>
        <label>Sort:</label>
        <select id='sort' onChange={(e) => handleSort(e.target.value)}>
          <option value='latest'>Nyast först</option>
          <option value='oldest'>Äldst först</option>
        </select>
        <div className={Styles.topAbout}>
          <article className={Styles.blogPosts}>
            <h2>{t('blog.title')}</h2>
            {filteredPosts.map((post) => {
              return (
                <section key={post.id} className={Styles.blogPostsContainer}>
                  <h3>{post.title}</h3>
                  <h4>{post.article}</h4>
                  <h5>{post.date}</h5>
                  <h5>{post.category}</h5>
                  <p>{post.text}</p>
                  <p>{post.author}</p>
                </section>
              );
            })}
          </article>
        </div>
      </main>
    </section>
  );
};

export default BlogScreen;
