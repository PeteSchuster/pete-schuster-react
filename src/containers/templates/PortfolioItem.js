import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'

class Post extends Component {
  componentDidMount() {
    let slug = this.props.match.params.slug;

    let dataURL = `https://peteschuster.com/wp-json/wp/v2/portfolio_item?slug=${slug}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          portfolioItem: res[0]
        })
      })
  }

  render() {
    const { portfolioItem } = this.state;

    if (!portfolioItem) return `loading...`;

    return (
      <PageSection>
        <h1>{portfolioItem.title.rendered}</h1>
      </PageSection>
    )
  }
}

export default Post;
