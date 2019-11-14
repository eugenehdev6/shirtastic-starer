import React from "react"
import PropTypes from "prop-types"
import ProductTemplate from "../templates/product-template"

const ProductPagePreview = ({ entry, getAsset }) => {
  const productItems = entry.getIn(["data", "items"])
  const items = productItems ? productItems.toJS() : []
  const productData = {
    items,
    gender: entry.getIn(["data", "gender"]),
    description: entry.getIn(["data", "description"]),
    name: entry.getIn(["data", "name"]),
  }
  return <ProductTemplate data={productData} />
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
