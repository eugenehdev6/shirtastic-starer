import React, { useState } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import styles from "./product-card.module.scss"
import Img from "gatsby-image"

import BasketIcon from "./basket-icon"
import ArrowNextIcon from "./arrow-next-icon"
import { ADD_TO_CART, useStateValue } from "../state/state"

import { Link } from "gatsby"
import { navigate } from "../../.cache/gatsby-browser-entry"

const ProductCard = ({ item }) => {
  const [isHoveredCart, setHoveredCart] = useState(false)
  const [isHoveredEdit, setHoveredEdit] = useState(false)
  const [{ cart }, dispatch] = useStateValue()

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: item.frontmatter })
  }
  return (
    <>
      {item.frontmatter.variants && (
        <Card className={styles.card}>
          <Link to={`/product/${item.id}`} className={styles.link}>
            <Img
              className="card-img-top"
              fluid={item.frontmatter.variants[0].image.childImageSharp.fluid}
              alt={item.frontmatter.variants[0].name}
            />
            <Card.Title className={styles.cardTitle}>{item.frontmatter.variants[0].name}</Card.Title>
            <Card.Body className={styles.cardDescription}>{item.frontmatter.variants[0].description}</Card.Body>
          </Link>

          <div className={styles.actionsContainer}>
            <BasketIcon
              color={isHoveredCart ? "#0F5279" : "#10A2DC"}
              onClick={handleAddToCart}
              size={2}
              onMouseEnter={() => {
                setHoveredCart(true)
              }}
              onMouseLeave={() => {
                setHoveredCart(false)
              }}
            />
            <strong>${item.frontmatter.variants[0].price}</strong>
            <ArrowNextIcon
              color={isHoveredEdit ? "#0F5279" : "#10A2DC"}
              size={1.9}
              onMouseEnter={() => {
                setHoveredEdit(true)
              }}
              onClick={() => navigate(`/product/${item.id}`)}
              onMouseLeave={() => {
                setHoveredEdit(false)
              }}
            />
          </div>
        </Card>
      )}
    </>
  )
}

ProductCard.propTypes = {
  item: PropTypes.object,
}

export default ProductCard
