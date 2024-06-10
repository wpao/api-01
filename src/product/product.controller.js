// Layer untuk hendle request dan response
// Biasanya juga handle validasi body
const express = require('express');

const { getAllProducts, getProductById, createProduct, deleteProductById, editProductById } = require('./product.service');

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.send(products);
})

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id)
    const product = await getProductById(parseInt(productId))
  
    res.send(product)    
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.post("/", async (req, res) => {
  try {
    const productData = req.body;  
    const product = await createProduct(productData)
  
    res.send({
      data: product,
      message: "create product success"
    })    
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
  
    await deleteProductById(parseInt(id))
  
    res.send("product delete success")    
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const productData = req.body;

  if(
    !(
      productData.image && 
      productData.name && 
      productData.price && 
      productData.description
    )
  ) {
    return res.status(400).send("Some fields are missing");
  }

  const product = await editProductById(parseInt(id), productData)

  res.send({
    data: product,
    message: "edit product success"
  })
})

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productData = req.body;
  
    const product = await editProductById(parseInt(id), productData)
  
    res.send({
      data: product,
      message: "edit product successs"
    })    
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router;