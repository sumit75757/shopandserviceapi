import express from "express";
import authChack from "../../Middleware/chackauth";
import subCategory from "./subCategory.controller";

const route = express();
route.get("/", authChack, subCategory.getCatagory);
route.get("/:id", authChack, subCategory.getByCatagory);
route.post("/", authChack, subCategory.addCatagory);
route.put("/:id", authChack, subCategory.updateCatagory);
route.delete("/:id", authChack, subCategory.removeCatagory);

export default route;
