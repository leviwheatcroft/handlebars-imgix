import ImgixClient from 'imgix-core-js'
import { parse } from 'hjson'

/**
 * ## Anonymous Default export
 * thin wrapper around handlebars helper to allow imgix init
 *
 * @param {String|Object} opts
 */
export default function (opts) {
  const client = new ImgixClient(opts)
  // return helper
  return (id, params) => client.buildURL(id, parse(params.replace(/'/g, '"')))
}
