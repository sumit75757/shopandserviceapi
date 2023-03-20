import express from "express";
import authChack from "../Middleware/chackauth";
import search from "./search.control";
const route = express();

route.get("/", search.serch);
route.get("/catogory/:catogory", search.catserch);
route.get("/service/:catogory", search.serivececatserch);
route.get("/serviceserch/:serch", search.serviceserch);




export default route