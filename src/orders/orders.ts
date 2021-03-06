const express = require("express");
import authChack from "../Middleware/chackauth";
import order from "./orders.controller";

const route = express();

route.get("/:id", authChack, order.getOrder);
route.post("/", authChack, order.order);

export default  route;