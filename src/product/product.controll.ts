import mongoos from "mongoose";
import multer from "multer";
import express from "express";
const route = express();
import productModel from "./product.model";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uplode/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "mage/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uplode = multer({
  storage: storage,
  // limits: {
  //   fieldSize: 1024 * 1024 * 5,
  // },
  // fileFilter: fileFilter,
}).array("productImage", 7);

const fs = require("fs");
import { promisify } from "util";

const unlinkAsync = promisify(fs.unlink);

let imageArr :any[]=[]
const product = {
  postProduct(req: any, res: any) {
    console.log(req);
    
    // console.log(req);
    req.files.forEach((element:any) => {
      imageArr.push("/productImage/"+element.filename);
      
    });
    const product = new productModel({
      _id: new mongoos.Types.ObjectId(),
      sellerId: req.body.sellerId,
      productName: req.body.productName,
      productInfo: req.body.productInfo,
      price: req.body.price,
      catogory: req.body.catogory,
      inStock: req.body.inStock,
      productImage: imageArr,
      discrption: req.body.discrption,
      subCatogory:req.body.subCatogory,
      delevery:req.body.delevery,
      createAt: Date(),
    });

    product
    .save()
    .then((result: any) => {
      res.status(201).json(result);
      imageArr = []
      })
      .catch((err: any) => {
        res.status(500).json(err);
        console.log("dfasdfaSDFASDFA", err);
      });
    },
  getProduct(req: any, res: any) {
    
    // console.log(req.query.username);
    // const id = req.query.product;
    // const fin = { _id: id }
    // if (id != null && id !== "" && id != undefined) {
    //     productModel.find().exec().then((result: any) => {
    //         if (result) {
    //             res.status(200).json(result)
    //             console.log("fasdfasdfsa", result)
    //         } else {
    //             res.status(404).json({
    //                 code: "404",
    //                 massage: "Not Found"
    //             })
    //             console.log(result)
    //         }
    //     }).catch((err: any) => {
    //         res.status(500).json(err.errors)
    //     });
    // }

    productModel
      .find({ skip: 10, limit: 5 })
      .exec()
      .then((result) => {
        if (result) {
          res.status(200).json({
            response: {
              count: result.length,
              request: "GEt",
              respons: "succses",
            },
            data: result.map((data) => {
              return {
                _id: data._id,
                productName: data.productName,
                productInfo: data.productInfo,
                price: data.price,
                catogory: data.catogory,
                productImage: data.productImage,
                discrption: data.discrption,
                createAt: data.createAt,
              };
            }),
          });
        } else {
          res.status(404).json(result);
        }
      })
      .catch((err) => {
        res.status(404).send(err.errors);
      });
  },

  productgetbyid(req: any, res: any) {
    const id = req.params.id;
    productModel
      .findById(id)
      .exec()
      .then((result) => {
        if (result) {
          res.status(200).json(result);
          console.log(result);
        } else {
          res.status(404).json({
            code: "404",
            massage: "Not Found",
          });
          console.log(result);
        }
      })
      .catch((err) => {
        res.status(500).json(err.errors);
      });
  },

  async productupdate(req: any, res: any) {
    req.files.forEach((element: any) => {
      imageArr.push("/productImage/" + element.filename);
      console.log(element.filename);
    });
    // console.log("adasd", req.file);
    const id = req.params.id;

    let data: any;
    if (req.files) {
      data = {
        sellerId: req.body.sellerId,
        productName: req.body.productName,
        productInfo: req.body.productInfo,
        price: req.body.price,
        catogory: req.body.catogory,
        inStock: req.body.inStock,
        productImage: imageArr,
        discrption: req.body.discrption,
      };
    } else {
      
      data = {
        sellerId: req.body.sellerId,
        productName: req.body.productName,
        productInfo: req.body.productInfo,
        price: req.body.price,
        catogory: req.body.catogory,
        inStock: req.body.inStock,
        discrption: req.body.discrption,
      };
    }
    console.log(data);

    productModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: data,
        }
      )
      .exec()
      .then((result) => {
        if (result) {
          res.status(200).json({
            success: true,
            message: "data updated",
            result,
          });
          console.log(result);
        } else {
          res.status(400).json(result);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
    imageArr = []
  },

  removeProduct(req: any, res: any) {
    let userImages = false;
    const id = req.params.id;
    let path;
    productModel
      .remove({
        _id: id,
      })
      .exec()
      .then((result) => {
        res.status(200).json(result);
        console.log(result);
        userImages = true;
      })
      .catch((err) => {
        res.status(500).json(err.errors);
      });
    if (userImages) {
      productModel
        .findById(id)
        .exec()
        .then((res) => {
          path = res.userImage;
          try {
            unlinkAsync("." + res.userImage);
          } catch (err) {
            console.log(err);
          }
        });
    }
  },
};

export default product;
