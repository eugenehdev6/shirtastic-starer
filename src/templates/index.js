import React, { useEffect, useState } from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import ProductsList from "../components/products-list"
import { graphql } from "gatsby"
import { navigate } from "../../.cache/gatsby-browser-entry"
import { useStateValue } from "../state/state"

const IndexPage = ({ data, pageContext }) => {
  // const { allDataJson, images } = data

  const { currentPage, numPages } = pageContext
  const [{ category }] = useStateValue()
  const handlePageSelected = async ({ selected }) => {
    await navigate(`${category === 0 ? "" : category === 1 ? "men" : "women"}/${selected === 0 ? "" : selected + 1}`)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <CatalogTabs />
      <ProductsList
        items={[]}
        currentPage={currentPage}
        numPages={numPages}
        pageSelected={data => handlePageSelected(data)}
      />
    </Layout>
  )
}
// export const query = graphql`
//   query productListQuery($skip: Int!, $limit: Int!, $gender: String!) {
//     allDataJson(limit: $limit, skip: $skip, filter: { gender: { regex: $gender } }) {
//       edges {
//         node {
//           id
//           items {
//             id
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 300, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             price
//             qty
//             size
//           }
//           gender
//           description
//           name
//         }
//       }
//     }
//   }
// `
export default IndexPage
