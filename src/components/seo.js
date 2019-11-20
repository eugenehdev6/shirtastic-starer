import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, meta, lang }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            titleTemplate
            author
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.defaultDescription
  const metaTitle = title || site.siteMetadata.defaultTitle

  return (
    <Helmet
      title={metaTitle}
      titleTemplate={site.siteMetadata.titleTemplate}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
SEO.defaultProps = {
  title: "",
  description: "",
  meta: [],
  lang: "en",
}

export default SEO
