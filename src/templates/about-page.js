import React from "react"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import { Col, Row } from "react-bootstrap"
import styles from "./about-page.module.scss"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export const AboutPageTemplate = ({ title, contacts, description, logo }) => {
  console.log("Function: AboutPageTemplate, description: ", description)
  console.log("Function: AboutPageTemplate, logo: ", logo)
  return (
    <div className={styles.aboutContainer}>
      <h1>{title}</h1>
      {logo && <Img className="col-sm-10 col-lg-4 mb-4" fluid={logo.childImageSharp.fluid} />}
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {contacts && (
        <div className="d-flex align-items-center flex-column w-100 justify-content-between">
          <h3 className="my-3 text-center">Contact information:</h3>
          <Row className="w-100">
            <Col xs={12} sm={6} className="text-center">
              Email: {contacts.email}
            </Col>
            <Col xs={12} sm={6} className="text-center">
              Phone: {contacts.phone}
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contacts: PropTypes.object,
  description: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const contacts = {
    email: post.frontmatter.email,
    phone: post.frontmatter.phone,
  }
  return (
    <Layout>
      <SEO title={"AboutPage"} />
      <AboutPageTemplate
        logo={post.frontmatter.image}
        contacts={contacts}
        title={post.frontmatter.title}
        description={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        email
        phone
      }
    }
  }
`
