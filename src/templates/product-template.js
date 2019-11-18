import React from "react"
import ProductItem from "../components/product-item"
import Layout from "../hoc/layout"
import { graphql } from "gatsby"

export const ProductPageTemplate = ({ name, gender, description, items }) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
    <span>{gender}</span>
  </div>
)

const ProductPage = ({ data }) => (
  <Layout>
    <ProductItem productItem={data.markdownRemark} />
  </Layout>
)

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        gender
        name
        variants {
          productId
          image {
            childImageSharp {
              fixed(width: 160, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          price
          qty
          size
        }
      }
    }
  }
`
export default ProductPage
