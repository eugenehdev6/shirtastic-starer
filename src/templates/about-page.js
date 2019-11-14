import React from "react"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import { Col, Row } from "react-bootstrap"
import styles from "./about-page.module.scss"
const AboutPage = ({ title, contacts, description }) => {
  console.log("Function: AboutPage, title: ", title)
  return (
    <Layout>
      <SEO title={"AboutPage"} />
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

export default AboutPage
