import React from "react"
import { graphql } from "gatsby"
import Layout from "../hoc/layout"
import { Col, Row } from "react-bootstrap"
import styles from "./about.module.scss"
const About = ({ data }) => {
  const { title, contacts, description } = data.site.siteMetadata

  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <h1>{title}</h1>
        <div>{description}</div>
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
    </Layout>
  )
}

export default About
export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        contacts {
          email
          phone
        }
      }
    }
  }
`
