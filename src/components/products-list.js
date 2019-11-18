import React from "react"
import PropTypes from "prop-types"
import ProductCard from "./product-card"
import { Col, Row } from "react-bootstrap"
import ReactPaginate from "react-paginate"
import "./product-list.scss"

const ProductsList = ({ items, currentPage, numPages, pageSelected }) => {
  const shirts = items.map(item => (
    <Col key={item.node.id} xs lg={4} md={6} sm={12}>
      <ProductCard item={item.node} />
    </Col>
  ))

  return (
    <div className="list-container d-flex flex-column align-items-center w-100 justify-content-between">
      <Row className="w-100 mt-3">{shirts}</Row>
      {numPages > 1 && (
        <Row className=" mt-3">
          <ReactPaginate
            pageCount={numPages}
            pageRangeDisplayed={7}
            marginPagesDisplayed={8}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            initialPage={currentPage ? currentPage - 1 : 0}
            onPageChange={data => pageSelected(data)}
          />
        </Row>
      )}
    </div>
  )
}

ProductsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
  pageSelected: PropTypes.func,
}

ProductsList.defaultProps = {
  items: [],
  numPages: 1,
}

export default ProductsList
