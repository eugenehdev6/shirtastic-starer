import React from "react"
import ProductItem from "../components/product-item"
import Layout from "../hoc/layout"
import { graphql } from "gatsby"

export const ProductPageTemplate = ({ name, gender, description, items }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <div>{gender}</div>
    </div>
  )
}

const ProductPage = ({ data }) => {
  data.markdownRemark.description = data.markdownRemark.html
  return (
    <Layout>
      <ProductItem productItem={data.markdownRemark} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        gender
        name
        variants {
          image {
            childImageSharp {
              fixed(width: 200, quality: 100) {
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
