const express = require("express");
let router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/product-controller");

router.route("/").get(getProducts);
router.route("/").post(createProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:id").get(getSingleProduct);

module.exports = router;
