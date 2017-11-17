import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { dispatchFetchPosts } from '../../actions/posts'
import PageSection from '../../components/common/PageSection'
import Loading from '../../components/common/Loading'

class Blog extends Component {
  componentDidMount() {
    this.props.handleFetchPosts();
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
    const { posts } = this.props;

    if (!posts) return <Loading />

    return (
      <PageSection>
        <h1>Most Recent Posts</h1>

        {posts && this.renderPosts(posts)}
      </PageSection>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: Object.keys(state.posts.items).map(key => state.posts.item[key])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleFetchPosts: bindActionCreators(dispatchFetchPosts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
