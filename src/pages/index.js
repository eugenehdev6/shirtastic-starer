import React, { useEffect, useState } from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import ProductsList from "../components/products-list"
import { dataSource } from "../data/data"
const IndexPage = () => {
  const [category, setCategory] = useState(0)
  const [data, setData] = useState(dataSource)

  useEffect(() => {
    switch (category) {
      case 0:
        setData(dataSource)
        break
      case 1:
        setData([...dataSource].filter(item => item.gender === "M"))
        break
      case 2:
        setData([...dataSource].filter(item => item.gender === "W"))
        break
    }
  }, [category])

  return (
    <Layout>
      <CatalogTabs onSelect={id => setCategory(id)} selectedId={category} />
      <ProductsList items={data} />
    </Layout>
  )
}

export default IndexPage
