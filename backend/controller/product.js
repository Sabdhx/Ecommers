const ProductModel = require("../models/product")

const addProduct = async (req, res) => {
  try {     
    const adding = await ProductModel.create(req.body);
    res.status(200).json(adding);
  } catch (error) {
    console.log(error);
  }
}

const gettingProduct = async (req, res) => {
  try {
    const getrequest = await ProductModel.find()
    res.status(200).json(getrequest)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProduct,
  gettingProduct
}