import React, { Component } from 'react'

class Loading extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`loading ${className}`}>
        <div className="loading__dot-group">
          <div className="loading__dot-group-item"></div>
          <div className="loading__dot-group-item"></div>
          <div className="loading__dot-group-item"></div>
        </div>
      </div>
    )
  }
}

export default Loading
