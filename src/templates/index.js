import React from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import ProductsList from "../components/products-list"
import { graphql } from "gatsby"
import { navigate } from "../../.cache/gatsby-browser-entry"
import { useStateValue } from "../state/state"
import SEO from "../components/seo"

const IndexPage = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data

  const { currentPage, numPages } = pageContext
  const [{ category }] = useStateValue()
  const handlePageSelected = async ({ selected }) => {
    await navigate(`${category === 0 ? "" : category === 1 ? "men" : "women"}/${selected === 0 ? "" : selected + 1}`)
  }

  return (
    <Layout>
      <SEO />
      <CatalogTabs />
      <ProductsList
        items={allMarkdownRemark.edges.map(edge => {
          edge.node.frontmatter.variants.sort((a, b) => (a.price < b.price ? -1 : 1))
          return edge.node
        })}
        currentPage={currentPage}
        numPages={numPages}
        pageSelected={data => handlePageSelected(data)}
      />
    </Layout>
  )
}
export const query = graphql`
  query productListQuery($skip: Int!, $limit: Int!, $gender: String!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { templateKey: { eq: "product-template" }, gender: { regex: $gender } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            variants {
              productId
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
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
    }
  }
`
export default IndexPage
