import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageSection from '../../components/common/PageSection'
import Loading from '../../components/common/Loading'

class Blog extends Component {
  componentDidMount() {
    let dataURL = `https://peteschuster.com/wp-json/wp/v2/portfolio_item?_embed`;
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
      // let url = new URL(portfolioItem.link);
      const {source_url} = portfolioItem._embedded["wp:featuredmedia"]["0"];
      const title = portfolioItem.title.rendered;
      return (
        <div class="portfolio-group__item">
          <div class="portfolio-object">
            <img class="portfolio-object__image" src={source_url} alt={title} />
            <h2 class="portfolio-object__title heading5">
              {title}
            </h2>
          </div>
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

    return (
      <PageSection>
        <h1>Portfolio</h1>

        {portfolioItems && this.renderPortfolio(portfolioItems)}
        {!portfolioItems && <Loading />}
      </PageSection>
    )
  }
}

export default Blog;
