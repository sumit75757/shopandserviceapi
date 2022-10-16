import express from "express";
import multer from "multer";
import authChack from "../Middleware/chackauth";
import offers from "./offers.controller";
const route = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./offerImage/");
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

route.get("/", authChack, offers.getOffers);
route.post("/", authChack, uplode.single("offerImage"), offers.postOffers);
route.put("/:id", authChack, uplode.single("offerImage"), offers.updateOffers);
route.delete("/:id", authChack, offers.removeOffer);

export default route;