import React from "react"
import PropTypes from "prop-types"
import { ProductPageTemplate } from "../templates/product-template"

const ProductPagePreview = ({ entry, widgetFor }) => {
  const productItems = entry.getIn(["data", "variants"])
  const items = productItems ? productItems.toJS() : []
  return (
    <ProductPageTemplate
      description={widgetFor("body")}
      gender={entry.getIn(["data", "gender"])}
      items={items}
      name={entry.getIn(["data", "name"])}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
