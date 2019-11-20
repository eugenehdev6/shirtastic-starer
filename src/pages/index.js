import React, { useEffect, useState } from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import ProductsList from "../components/products-list"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { allDataJson } = data
  const [category, setCategory] = useState(0)
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    switch (category) {
      case 0:
        setDataSource(allDataJson.edges)
        break
      case 1:
        setDataSource([...allDataJson.edges].filter(edge => edge.node.gender === "M"))
        break
      case 2:
        setDataSource([...allDataJson.edges].filter(edge => edge.node.gender === "W"))
        break
    }
  }, [category])

  return (
    <Layout>
      <CatalogTabs onSelect={id => setCategory(id)} selectedId={category} />
      <ProductsList items={dataSource} />
    </Layout>
  )
}
export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          id
          items {
            id
            image
            price
            qty
            size
          }
          gender
          description
          name
        }
      }
    }
  }
`
export default IndexPage
