import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    console.log('Inside componentDidMount');

    if (
      this.state.loadedPost === null ||
      this.props.match.params.id !== this.state.loadedPost.id
    ) {
      if (this.props.match.params.id) {
        console.log(
          '[FullPost] Getting data for ' + this.props.match.params.id
        );

        axios.get('/posts/' + this.props.match.params.id).then((response) => {
          this.setState({
            loadedPost: response.data,
          });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.id).then((response) => {
      console.log(response);
      // alert('Post Deleted Successfully !!');
      this.props.history.push('/');
    });
  };

  render() {
    console.log('Render : ', this.props.match.params.id);
    let post = null;
    if (this.state.loadedPost === null) {
      post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    } else {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button className='Delete' onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
