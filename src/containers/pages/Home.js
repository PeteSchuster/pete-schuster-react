import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'

class Home extends Component {
  render() {
    return (
      <PageSection className="ui-white-powder">
        <h6>About Me</h6>
        <h1>Philadelphia Freelance WordPress Developer</h1>

        <p>With a firm understanding of both front end web development and the WordPress platform, I can help you take your project to the next level. Keeping up to date on the trends of user interface and user experience design, creating feature rich websites that are easy to maintain and easy to manage is what I do best. Be sure to think of me when you start designing your next project.</p>

        <a href="/contact">Hire Me</a>

      </PageSection>
    )
  }
}

export default Home;
