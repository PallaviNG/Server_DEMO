let router = require("express").Router();
let ProductAPIController = require("../controller/ProductAPIController");

/*get apis */
router.get("/",ProductAPIController.home);
router.get("/get-product-list",ProductAPIController.getProductList);

/*post apis*/
router.post("/add-new-product",ProductAPIController.saveNewProduct);
router.post('/check-login',ProductAPIController.checkLogin);
router.post('/add-new-user',ProductAPIController.addNewUser);

/*put api */
router.put("/edit-product",ProductAPIController.updateProduct);

/*delete apis */
router.delete("/delete-product",ProductAPIController.removeProduct);

module.exports = router;