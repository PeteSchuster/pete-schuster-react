import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Blog extends Component {
  componentDidMount() {
    let dataURL = `https://peteschuster.com/wp-json/wp/v2/posts`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }

  listPosts(posts) {
    const items = posts.map(post => {
      return (
        <div class="post">
          <Link to={post.link}>{post.title.rendered}</Link>
        </div>
      );
    });

    return (
      <div class="posts">
        {items}
      </div>
    )
  }

  render() {
    const { posts } = this.state;

    if (!posts) return `loading...`;

    return (
      <div>
        {this.listPosts(posts)}
      </div>
    )
  }
}

export default Blog;
