const URL = "http://localhost:4000"

export const productsLoader = async () => {
  const response = await fetch(URL + "/products")
  const products = await response.json()
  return products
}