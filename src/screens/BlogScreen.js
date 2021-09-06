import React, { useState, useEffect } from 'react';
import Styles from '../css/blog.module.css';

import blogPosts from '../assets/data/blogPosts';

const BlogScreen = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
    setFilteredPosts(blogPosts);
  }, []);

  const latestFirst = (posts) => {
    const sortedPosts = [...posts].sort(function (a, b) {
      var aDate = new Date(a.date);
      var bDate = new Date(b.date);
      return bDate - aDate;
    });

    console.log(sortedPosts);

    setFilteredPosts(sortedPosts);
  };

  const oldestFirst = (posts) => {
    const sortedPosts = [...posts].sort(function (a, b) {
      var aDate = new Date(a.date);
      var bDate = new Date(b.date);
      return aDate - bDate;
    });

    console.log(sortedPosts);

    setFilteredPosts(sortedPosts);
  };

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

  return (
    <section>
      <main className={Styles.mainContainer}>
        <button onClick={() => latestFirst(filteredPosts)}>
          Sortera nyast först
        </button>
        <button onClick={() => oldestFirst(filteredPosts)}>
          Sortera äldst först
        </button>
        <label for='cars'>Filtrera:</label>
        <select id='filter' onChange={(e) => handleFilter(e.target.value)}>
          <option value='all'>Visa alla</option>
          <option value='news'>Nyheter</option>
          <option value='articles'>Artiklar</option>
        </select>
        <div className={Styles.topAbout}>
          <article className={Styles.blogPosts}>
            <h2>Blogg</h2>
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
