import React, { Component } from 'react'
import PageSection from '../../components/common/PageSection'

class NoMatch extends Component {
  render() {
    return (
      <PageSection className="text--center">
        <h1>404 Not Found</h1>
        <p>Sorry this page has been moved.</p>
      </PageSection>
    )
  }
}

export default NoMatch;
