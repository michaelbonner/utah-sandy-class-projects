import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header className="bg-crimson-500 mb-2">
    <div className="container px-4 py-8 m-auto">
      <h1>
        <span className="max-h-32 float-right">
          <Image
            filename="block-u-white.png"
            alt="University of Utah"
            className="w-8 inline-block"
          />
        </span>
        <Link to="/" className="text-white no-underline text-lg uppercase">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
