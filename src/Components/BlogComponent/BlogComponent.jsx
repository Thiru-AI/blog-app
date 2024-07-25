import React, { useState, useEffect } from 'react';
import Post from '../PostComponent/PostComponent';
import './BlogComponent.css'

const BlogComponent = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Internet', content: 'Welcome to the digital age, where the internet has become as essential as the very air we breathe! Isn it astounding how this vast network has transformed everything from how we communicate to how we learn and shop? With my personal journey spanning over two decades of embracing the World Wide Web.' },
    { id: 2, title: 'Mobiles', content: 'Welcome to our digital wonderland where the power of mobiles is a revolution in our pockets! Can you imagine a world without the magic of instant communication, on-the-go internet access, and a myriad of apps designed to streamline your day? Neither can we! Recent research indicates that over 80% of Americans own a smartphone' },
    { id: 3, title: 'Blog ', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dolores velit quibusdam optio nisi officia, doloribus facilis asperiores laborum itaque culpa necessitatibus blanditiis rerum, totam nobis est id consectetur voluptate.' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostData = { id: posts.length + 1, title: newPost.title, content: newPost.content };
    setPosts([...posts, newPostData]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPost.title} onChange={(event) => setNewPost({ ...newPost, title: event.target.value })} />
        <br />
        <label>Content:</label>
        <textarea value={newPost.content} onChange={(event) => setNewPost({ ...newPost, content: event.target.value })} />
        <br />
        <button type="submit">Create Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogComponent;