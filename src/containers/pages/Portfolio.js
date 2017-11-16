import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageSection from '../../components/common/PageSection'

class Blog extends Component {
  componentDidMount() {
    let dataURL = `https://peteschuster.com/wp-json/wp/v2/portfolio_item`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          portfolioItems: res
        })
      })
  }

  renderPortfolio(portfolioItems) {
    const portfolioList = portfolioItems.map(portfolioItem => {
      let url = new URL(portfolioItem.link);
      return (
        <div class="portfolio-group__item">
          <h2><Link to={url.pathname}>{portfolioItem.title.rendered}</Link></h2>
        </div>
      )
    })

    return (
      <div class="portfolio-group">
        {portfolioList}
      </div>
    )
  }

  render() {
    const { portfolioItems } = this.state;

    if (!portfolioItems) return `loading...`;

    return (
      <PageSection>
        <h1>Portfolio</h1>

        {this.renderPortfolio(portfolioItems)}
      </PageSection>
    )
  }
}

export default Blog;
