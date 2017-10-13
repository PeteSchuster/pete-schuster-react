import React, { Component } from 'react'

class Post extends Component {
  componentDidMount() {
    let slug = this.props.match.params.slug;

    let dataURL = `https://peteschuster.com/wp-json/wp/v2/posts?slug=${slug}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          post: res[0]
        })
      })
  }

  render() {
    const { post } = this.state;

    if (!post) return null;

    return (
      <div>
        <h1>{post.title.rendered}</h1>
      </div>
    )
  }
}

export default Post;
