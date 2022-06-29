import express from "express";
import authChack from "../Middleware/chackauth";
import sellers from "./cart.controller";

const route = express();

route.get("/:id", authChack, sellers.getCart);
route.post("/", authChack, sellers.addCart);
route.put("/:id", authChack, sellers.updateCart);
route.delete("/:id", authChack, sellers.removeCart);

export default route;