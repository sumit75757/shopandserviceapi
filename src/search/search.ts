import express from "express";
import authChack from "../Middleware/chackauth";
import search from "./search.control";
const route = express();

route.get("/", authChack, search.serch);

export default route