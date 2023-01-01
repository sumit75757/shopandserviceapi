import express from "express";
import authChack from "../Middleware/chackauth";
import search from "./search.control";
const route = express();

route.get("/", search.serch);
route.get("/catogory/:catogory", search.catserch);


export default route