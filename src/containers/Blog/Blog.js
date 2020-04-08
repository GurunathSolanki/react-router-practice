import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?query=postId',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path='/' exact component={Posts} />
        <Switch>
          <Route path='/new-post' component={NewPost} />
          <Route path='/:id' component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
