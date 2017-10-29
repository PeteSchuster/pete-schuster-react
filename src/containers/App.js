import React, { Component } from 'react'
import PageHeader from '../components/layout/PageHeader'
import PageFooter from '../components/layout/PageFooter'
import Routes from '../routes'
import Triangle from '../components/svgs/Triangle'
import Circle from '../components/svgs/Circle'
import Star from '../components/svgs/Star'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

class App extends Component {
  splatter(graphic) {
    return new Array(10).fill('').map(svg => {
      let color1 = Math.floor(getRandomArbitrary(0, 255));
      let color2 = Math.floor(getRandomArbitrary(0, 255));
      let color3 = Math.floor(getRandomArbitrary(0, 255));
      let color = `rgba(${color1}, ${color2}, ${color3}, 1)`;
      let styles = {
        opacity: getRandomArbitrary(0.1, 0.3),
        transform: `scale(${getRandomArbitrary(0.4, 1)})`,
        position: 'absolute',
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        color: color
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
      <div className="page-app">
        <PageHeader />
        <div class="page-content">
          <main class="page-main">
            <Routes />
          </main>
        </div>
        <PageFooter />
        {this.splatter(<Triangle />)}
        {this.splatter(<Circle />)}
        {this.splatter(<Star />)}
      </div>
    )
  }
}

export default App;
