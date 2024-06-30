import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-crimson-500 mb-8 shadow-xl">
    <div className="container px-6 py-8 m-auto">
      <h1>
        <Link to="/" className="text-white no-underline text-2xl uppercase">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
