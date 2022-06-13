import express from "express";
import authChack from "../../Middleware/chackauth";
import products from "./product.controller";

const route = express();

route.get("/:id", authChack, products.getgetproduct);

export default route;
