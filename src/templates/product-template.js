import React from "react"
import ProductItem from "../components/product-item"
import Layout from "../hoc/layout"
import { graphql } from "gatsby"

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <ProductItem productItem={data} />
    </Layout>
  )
}

// export const query = graphql`
//   query productQuery($id: String!) {
//     dataJson(id: { eq: $id }) {
//       id
//       items {
//         id
//         image {
//           name
//           childImageSharp {
//             fixed(width: 200, quality: 100) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//         price
//         qty
//         size
//       }
//       gender
//       description
//       name
//     }
//   }
// `
export default ProductTemplate
