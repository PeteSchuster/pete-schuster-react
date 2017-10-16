import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'
import Triangle from '../../components/svgs/Triangle'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class Home extends Component {
  splatter(graphic) {
    graphic.attributes.style = {opacity: .5};
    console.log(graphic);
    return new Array(10).fill('').map(svg => {
      let styles = {
        opacity: getRandomArbitrary(0.1, 0.3),
        position: 'absolute',
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`
      };

      return (
        <div className="splatter__item" style={styles}>
          {graphic}
        </div>
      )
    })
  };

  render() {
    return (
      <div>
        <PageSection className="ui-blue-midnight">
          <h6>About Me</h6>
          <h1>Philadelphia Freelance WordPress Developer</h1>

          <p>With a firm understanding of both front end web development and the WordPress platform, I can help you take your project to the next level. Keeping up to date on the trends of user interface and user experience design, creating feature rich websites that are easy to maintain and easy to manage is what I do best. Be sure to think of me when you start designing your next project.</p>

          {this.splatter(<Triangle />)}
        </PageSection>
        <PageSection className="ui-white-powder">
          <h6>About Me</h6>
          <h1>Philadelphia Freelance WordPress Developer</h1>

          <p>With a firm understanding of both front end web development and the WordPress platform, I can help you take your project to the next level. Keeping up to date on the trends of user interface and user experience design, creating feature rich websites that are easy to maintain and easy to manage is what I do best. Be sure to think of me when you start designing your next project.</p>
        </PageSection>
      </div>
    )
  }
}

export default Home;
