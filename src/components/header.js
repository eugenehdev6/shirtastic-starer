import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/navlogo.png"
import headerStyles from "./header.module.scss"
import { Navbar, Nav } from "react-bootstrap"
import BasketIcon from "./basket-icon"
import { useStateValue } from "../state/state"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const [{ cart }, dispatch] = useStateValue()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "navlogo.png" }) {
        name
        childImageSharp {
          fixed(height: 72, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header className={headerStyles.container}>
      <Navbar variant="light" sticky={"top"} className={`py-0 ${headerStyles.shadowNav}`}>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            <Img fixed={data.file.childImageSharp.fixed} alt={data.file.name} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end d-flex" id="basic-navbar-nav">
          <Nav.Link
            className={headerStyles.navLink}
            as={Link}
            to={"/about"}
            activeStyle={{ backgroundColor: "#0B6689" }}
          >
            About
          </Nav.Link>
          <div className={headerStyles.vr} />
          <div className={headerStyles.cartBtn}>
            <BasketIcon color={"#10A2DC"} size={2} />
          </div>
          <div className={headerStyles.cartCount}>{cart.length || 0}</div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
