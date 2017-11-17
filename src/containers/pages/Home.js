import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'

class Home extends Component {
  render() {
    return (
      <PageSection>
        <h1>About Pete Schuster</h1>
        <img width="1024" height="683" src="https://peteschuster.com/wp-content/uploads/2011/10/about.jpg" class="col-1of2 alignright wp-post-image" alt="" />

        <p>I am a front end web developer working in center city Philadelphia. I live in the suburbs of Philadelphia with my supportive/beautiful <a href="http://youwannatalkjive.com/" target="_blank">wife</a>, our dogs <a href="http://www.flickr.com/photos/youwannatalkjive/sets/72157605444035115/" target="_blank">Betty White and Dexter</a> and menagerie of other <a href="http://www.flickr.com/photos/youwannatalkjive/sets/72157594426866802/" target="_blank">animals</a>. I have a passion for web standards and best practices, and enjoy <a href="http://peteschuster.com/blog/">writing</a> about the subject. Follow me on <a href="http://twitter.com/pete_schuster" target="_blank">Twitter</a>.</p>

        <p>In addition to front end development, I am an avid WordPress developer who <a href="http://peteschuster.com/contact/">freelances</a> and speaks about the effectiveness of WordPress as a CMS. I hope to contribute to the core, and begin to author plugins and themes to continually build the project.</p>

        <h3>About this site</h3>
        <p>This site has been several sites in the making. After attempting a couple sites prior, all with different messages, this site is meant to be the central source for everything from development news, to rants and raves on my ongoing adventures.</p>

        <h2>Ethos</h2>
        <ul class="list_styled clearfix">
        <li>
        <h3>Integrity</h3>
        <p>I stand by my work. All choices I make are based on strict research and adherence to industry standards and practices.</p></li>
        <li>
        <h3>Honesty</h3>
        <p>I try to be as honest and open as possible about my process, and my skills. All the code and <a href="http://peteschuster.com/blog/">opinions</a> on this site are up for grabs, if you like it, its yours.</p></li>
        <li>
        <h3>Humility</h3>
        <p>I don’t know everything, so if you come across something that you disagree with, be sure to <a href="http://peteschuster.com/contact/">tell me about it</a> and we can start a discussion.</p></li>
        <li>
        <h3>Open</h3>
        <p>I contribute to the web so others can benefit from tips, tricks and techniques I’ve come across. Keeping your work opensource allows for a better community overall.</p></li>
        </ul>

        <h2>Speaking</h2>
        <ul>
        <li><strong>2011 November</strong> <a href="http://2011.philly.wordcamp.org/" target="_blank">WordCamp Philly</a> – The Power of the Loop</li>
        <li><strong>2012 October</strong> <a href="http://2012.philly.wordcamp.org/" target="_blank">WordCamp Philly</a> – Ghostbusting Your Codebase</li>
        </ul>

        <p><a href="https://plus.google.com/110768047530147655510/" target="_blank" rel="me">+Pete Schuster</a></p>
      </PageSection>
    )
  }
}

export default Home;
