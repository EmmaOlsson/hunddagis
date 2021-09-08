import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css';

import { useTranslation } from 'react-i18next';

const BlogScreen = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('latest');

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const blogDataFromi18n = i18n.t('blog.blogPostData', {
      returnObjects: true,
    });

    const sortedDataFromi18n = sortPosts(sort, blogDataFromi18n);
    setPosts(sortedDataFromi18n);
    handleFilter(filter, sortedDataFromi18n);
  }, [i18n, t, filter, sort]); // eslint-disable-line react-hooks/exhaustive-deps
  //  using eslint-disable to remove dependency-warning as I for now dont find a better solution that doesnt include me repeating a lot of code

  const handleFilter = (value, posts) => {
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

    setFilter(value);
  };

  const handleSort = (value) => {
    const sortedFilteredPosts = sortPosts(value, filteredPosts);
    const sortedPosts = sortPosts(value, posts);

    setFilteredPosts(sortedFilteredPosts);
    setPosts(sortedPosts);
    setSort(value);
  };

  const sortPosts = (value, posts) => {
    const sortedPosts = [...posts].sort(function (a, b) {
      if (value === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      }
      return new Date(b.date) - new Date(a.date);
    });

    return sortedPosts;
  };

  return (
    <section>
      <main className={Styles.mainContainer}>
        <article className={Styles.blogPosts}>
          <div className={Styles.topContainer}>
            <h2>{t('blog.title')}</h2>
            <section className={Styles.selectContainer}>
              <label className={Styles.label}>
                {t('blog.filter.filterLabel')}:
              </label>
              <select
                className={Styles.select}
                id={Styles.filter}
                onChange={(e) => handleFilter(e.target.value, posts)}
              >
                <option className={Styles.option} value='all'>
                  {t('blog.filter.all')}
                </option>
                <option className={Styles.option} value='news'>
                  {t('blog.filter.news')}
                </option>
                <option className={Styles.option} value='articles'>
                  {t('blog.filter.articles')}
                </option>
              </select>
              <label>{t('blog.filter.sortLabel')}:</label>
              <select
                className={Styles.select}
                id={Styles.sort}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option className={Styles.option} value='latest'>
                  {t('blog.filter.latest')}
                </option>
                <option className={Styles.option} value='oldest'>
                  {t('blog.filter.oldest')}
                </option>
              </select>
            </section>
          </div>
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
