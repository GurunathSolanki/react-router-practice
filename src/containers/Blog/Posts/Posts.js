import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
    selectedPost: null,
  };

  postSelectHandler = (id) => {
    this.props.history.push('/' + id);
  };

  componentDidMount() {
    console.log('[Blog] componentDidMount called !!', this.props);

    axios
      .get('/posts')
      .then((response) => {
        // console.log(response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: 'Max',
          };
        });
        this.setState({
          posts: updatedPosts,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let posts = null;
    posts = this.state.posts.map((post) => {
      return (
        // <Link to={'/' + post.id} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          selected={() => this.postSelectHandler(post.id)}
        />
        // </Link>
      );
    });

    return <section className='Posts'>{posts}</section>;
  }
}

export default Posts;
