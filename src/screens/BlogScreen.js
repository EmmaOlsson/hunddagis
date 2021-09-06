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

  const showArticles = (posts) => {
    const articles = posts.filter(
      (post) => post.category === ('article' || 'artikel')
    );
    console.log(articles);
    setFilteredPosts(articles);
  };

  const showNews = (posts) => {
    const articles = posts.filter(
      (post) => post.category === ('news' || 'nyhet')
    );
    console.log(articles);
    setFilteredPosts(articles);
  };

  return (
    <section>
      <main className={Styles.mainContainer}>
        <button onClick={() => showArticles(posts)}>
          Visa endast artiklar
        </button>
        <button onClick={() => showNews(posts)}>Visa endast nyheter</button>
        <button onClick={() => setFilteredPosts(posts)}>Visa alla</button>
        <button>Sortera nyast först</button>
        <button>Sortera äldst först</button>
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
          <aside className={Styles.latestPictures}>
            <h2 className={Styles.pictureTitle}>Senaste bilderna</h2>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default BlogScreen;
