import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mb-8 shadow-xl bg-crimson-500">
    <div className="container py-8 px-6 m-auto">
      <h1>
        <Link to="/" className="text-2xl text-white no-underline uppercase">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
