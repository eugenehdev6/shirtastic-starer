import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { StateProvider } from "./src/state/state"

export const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}
