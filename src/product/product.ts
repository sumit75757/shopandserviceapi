import expresss from "express";
import authChack from "../Middleware/chackauth";
import product from "./product.controll";
import multer from "multer";
import productModel from "./product.model";
const route = expresss();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./productImage/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uplode = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// api/product/dasdfasdfagfasdaf
route.get("/", authChack, product.getProduct);
route.get("/:id", authChack, product.productgetbyid);
route.post(
  "/",
  authChack,
  uplode.array("productImage", 7),
  product.postProduct
);
route.delete("/:id", authChack, product.removeProduct);
route.put(
  "/:id",
  authChack,
  uplode.array("productImage", 7),
  product.productupdate
);

export default route;
