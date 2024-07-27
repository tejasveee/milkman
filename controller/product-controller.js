const Product = require("../model/product");

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json({
      status: "success",
      allProducts: allProducts,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  const { name, price, des, category, imageURL } = req.body;

  try {
    const newProduct = await Product.create({
      name: name,
      price: price,
      category: category,
      description: des,
      imageURL: imageURL,
    });

    res.json({
      status: "success",
      newProduct: newProduct,
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.json({
        status: "Failure",
        message: "product not found",
      });
    }

    res.json({
      status: "success",
      message: "product updated",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.json({
        status: "Failure",
        message: "product not found",
      });
    }

    res.json({
      status: "success",
      message: "product deleted",
    });
  } catch (error) {
    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.json({
        status: "Failure",
        message: "product not found",
      });
    }

    res.json({
      status: "success",
      product: product,
    });
  } catch (error) {
    console.log(error);

    res.json({
      status: "Failure",
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
};
