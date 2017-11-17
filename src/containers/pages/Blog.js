import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageSection from '../../components/common/PageSection'
import Loading from '../../components/common/Loading'

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
          <div class="post">
            <h2 class="heading3 post__title"><Link to={url.pathname}>{post.title.rendered}</Link></h2>
            <div class="post__excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </div>
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

    if (!posts) return <Loading />

    return (
      <PageSection>
        <h1>Most Recent Posts</h1>

        {posts && this.renderPosts(posts)}
      </PageSection>
    )
  }
}

export default Blog;
