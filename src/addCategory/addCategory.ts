import express from "express";
import authChack from "../Middleware/chackauth";
import catagory from "./category.controler";
const route = express();

route.get("/", authChack, catagory.getCatagory);
route.get("/:id", authChack, catagory.getByCatagory);
route.post("/", authChack, catagory.addCatagory);
route.put("/:id", authChack, catagory.updateCatagory);
route.delete("/:id", authChack, catagory.removeCatagory);

export default route;
