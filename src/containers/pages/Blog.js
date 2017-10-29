import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageSection from '../../components/common/PageSection'

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

  renderPosts(posts) {
    const postList = posts.map(post => {
      let url = new URL(post.link);
      return (
        <div class="post-group__item">
          <h2><Link to={url.pathname}>{post.title.rendered}</Link></h2>
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
        </div>
      )
    })

    return (
      <div class="post-group">
        {postList}
      </div>
    )
  }

  render() {
    const { posts } = this.state;

    if (!posts) return `loading...`;

    return (
      <PageSection>
        <h1>Most Recent Posts</h1>

        {this.renderPosts(posts)}
      </PageSection>
    )
  }
}

export default Blog;
