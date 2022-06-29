import express from "express";
import morgen from "morgan";
import bodyParser from "body-parser";
import mongoos from "mongoose";
import auth from "./auth/auth";
import cors from "cors";
import cat from "./addCategory/addCategory";
import product from "./product/product";
import admin from "./admin/admin";
import subCategory from "./addCategory/subCategory/subcategory";
import seller from "./seller/seller";
import productSeller from "./seller/product/product";
import users from "./users/user";
import cart from "./cart/cart";
import orders from "./orders/orders";

const app = express();
require("dotenv").config();

const database: any = process.env.MONGO_URL;
console.log(database);

mongoos
  .connect(database)
  .then((res: any) => {
    console.log("database conected");
    console.log("http://localhost:" + process.env.PORT + "/");
  })
  .catch((err: any) => {
    console.log("database not conected", err);
  });
app.use(express.json());
app.use(morgen("dev"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/auth", auth);
app.use("/api/admin/auth", admin);
app.use("/api/catogory", cat);
app.use("/api/subcatogory", subCategory);
app.use("/productImage", express.static("productImage"));
app.use("/userImage", express.static("userImage"));
app.use("/api/users", users);
app.use("/api/sellers", seller);
app.use("/api/product", product);
app.use("/api/cart", cart);
app.use("/api/orders", orders);
app.use("/api/seller/product", productSeller);

app.use((res, req, next) => {
  const err: any = new Error("404 Not Found");
  err.status = 404;
  err.message = "not found";
  console.log(err);
  next();
});

app.use((err: any, req: any, res: any, next: any) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

export default app;
