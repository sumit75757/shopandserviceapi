import express from "express";
import authChack from "../Middleware/chackauth";
import sellers from "./orders.controller";
const route = express();

route.put("/:id", authChack, sellers.cart);

export default route;