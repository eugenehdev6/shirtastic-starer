import React from "react"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import { Col, Row } from "react-bootstrap"
import styles from "./about-page.module.scss"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

export const AboutPageTemplate = ({ title, contacts, description }) => {
  return (
    <div className={styles.aboutContainer}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
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
    </div>
  )
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
      <AboutPageTemplate contacts={contacts} title={post.frontmatter.title} description={post.html} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        email
        phone
      }
    }
  }
`
