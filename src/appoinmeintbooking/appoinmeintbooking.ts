import express from "express";
import authChack from "../Middleware/chackauth";
import sellers from "./appoinmeintbooking.controler";

const route = express();

route.get("/:id", authChack, sellers.getapobooking);
route.get("/", authChack, sellers.totalbook);
route.get("/seller/:sellerid", authChack, sellers.totalbookbyseller);


route.post("/", authChack, sellers.addapobooking);
route.put("/:id", authChack, sellers.updateapobooking);
route.delete("/:id", authChack, sellers.removeapobooking);

export default route;