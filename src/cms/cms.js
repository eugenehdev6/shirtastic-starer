import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"
import ProductPagePreview from "./productPagePreview"
import AboutPagePreview from "./aboutPagePreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("product", ProductPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
