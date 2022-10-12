const express=require("express")
const router=express.Router();

const {getProducts, newProduct} = require("../controllers/productsController") //Trae la respuesta json desde el controlador

router.route('/productos').get(getProducts) //Establece desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //establecemos la ruta

module.exports=router;