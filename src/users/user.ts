import express from "express";
import authChack from "../Middleware/chackauth";
import sellers from "./user.controller";

const route = express();

route.get("/", authChack, sellers.getseller);

export default route