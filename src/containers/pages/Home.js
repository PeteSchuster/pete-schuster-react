import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <PageSection>
        <div class="hgroup">
          <p class="heading1">Pete Schuster</p>
          <h1 class="heading5">Freelance Philadelphia Front End Developer</h1>
        </div>

        <p><img width="1024" height="683" src="https://peteschuster.com/wp-content/uploads/2011/10/about.jpg"
        alt="Pete Schuster" /></p>

        <p>I am a husband and father working as a front end engineer in center city Philadelphia.</p>

        <h2>About this site</h2>
        <p>This site is proudly built with Preact and WordPress.</p>

        <h2>Ethos</h2>

        <h3>Integrity</h3>
        <p>I stand by my work. All choices I make are based on strict research and adherence to industry standards and practices.</p>

        <h3>Honesty</h3>
        <p>I try to be as honest and open as possible about my process, and my skills. All the code and <Link to="/blog/">opinions</Link> on this site are up for grabs, if you like it, its yours.</p>

        <h3>Humility</h3>
        <p>I don’t know everything, so if you come across something that you disagree with, be sure to <Link to="/contact/">tell me about it</Link> and we can start a discussion.</p>

        <h3>Open</h3>
        <p>I contribute to the web so others can benefit from tips, tricks and techniques I’ve come across. Keeping your work opensource allows for a better community overall.</p>

        <h2>Speaking</h2>
        <ul>
          <li><strong>2011 November</strong> <a href="http://2011.philly.wordcamp.org/" target="_blank" rel="noopener noreferrer">WordCamp Philly</a> – The Power of the Loop</li>
          <li><strong>2012 October</strong> <a href="http://2012.philly.wordcamp.org/" target="_blank" rel="noopener noreferrer">WordCamp Philly</a> – Ghostbusting Your Codebase</li>
        </ul>

        <p><a href="https://plus.google.com/110768047530147655510/" target="_blank" rel="me noopener noreferrer">+Pete Schuster</a></p>
      </PageSection>
    )
  }
}

export default Home;
