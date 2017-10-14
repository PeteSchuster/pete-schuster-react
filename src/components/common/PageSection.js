import React, { Component } from 'react'

class PageSection extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={`page-section ${className}`}>
        <div className="page-section__wrapper">
          <div className="page-section__content">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default PageSection
