// service layer bertujuan untuk handle bisnis logic
// Kenapa di pisah? supaya tanggung jawab-nya ter-isolate, dan function-nya reusable

const { findProducts, findProductById, insertProduct, findProductByName, deleteProduct, editProduct } = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
}

const getProductById = async (id) => {
  const product = await findProductById(id)
  
  if(!product){
    throw Error("Product not foud")
  }
  
  return product;
}

const createProduct = async (productData) => {
  const findProduct = await findProductByName(productData.name)
  if(findProduct) {
    throw new Error("name has to be unique")
  }

  const product = await insertProduct(productData)
  return product
}

const deleteProductById = async (id) => {
  await getProductById(id)
  await deleteProduct(id)
}

const editProductById = async (id, productData) => {
  await getProductById(id)
  const product = await editProduct(id, productData)
  return product
}

module.exports = {
  getAllProducts, 
  getProductById,
  createProduct,
  deleteProductById,
  editProductById
}