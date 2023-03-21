import express from "express";
import authChack from "../../Middleware/chackauth";
import products from "./product.controller";
const route = express();
route.get("/:id", authChack, products.getgetproduct);
route.get("/orders/:id", authChack, products.getorderproduct);
route.get("/service/:id", authChack, products.getservicebyseller);


export default route;