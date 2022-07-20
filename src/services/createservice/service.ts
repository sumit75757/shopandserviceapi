import multer from "multer";
import expresss from "express";
import authChack from "../../Middleware/chackauth";
import services from "./service.controler";

const route = expresss();

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "./serviceImage/");
  },
  filename: (req: any, file: any, cb: any) => {
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

route.get("/", authChack, services.getService);
route.post(
  "/",
  authChack,
  uplode.array("serviceImage", 7),
  services.postService
);
route.put(
  "/:id",
  uplode.array("serviceImage", 7),
  authChack,
  services.updateService
);
route.delete("/:id", authChack, services.removeService);

export default route;
