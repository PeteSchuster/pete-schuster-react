import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  return (
    <header id="page-header" className="page-header" role="banner">
      <div className="page-header__logo-wrap">
        <Link to="/" className="page-header__logo" rel="home">
          <span>Pete Schuster</span>
        </Link>
      </div>
    </header>
  )
}

export default PageHeader
