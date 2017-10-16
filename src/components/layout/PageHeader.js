import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  return (
    <header id="page-header" className="page-header" role="banner">
      <div className="page-header__wrapper">
        <Link to="/" className="page-header__logo" rel="home">Pete Schuster</Link>

        <nav className="page-header__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default PageHeader
