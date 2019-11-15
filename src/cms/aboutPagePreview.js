import React from "react"
import PropTypes from "prop-types"
import { AboutPageTemplate } from "../templates/about-page"

const AboutPagePreview = ({ entry, widgetFor }) => {
  const contacts = {
    email: entry.getIn(["data", "email"]),
    phone: entry.getIn(["data", "phone"]),
  }
  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      contacts={contacts}
      logo={entry.getIn(["data", "image"])}
      description={widgetFor("body").props.value}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
