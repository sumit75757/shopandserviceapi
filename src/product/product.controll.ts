import mongoos from "mongoose";
import productModel from "./product.model";

const fs = require("fs");
import { promisify } from "util";

const unlinkAsync = promisify(fs.unlink);

let imageArr: any[] = [];
const product = {
  postProduct(req: any, res: any) {
    
    req.file.forEach((element: any) => {
      imageArr.push("/productImage/" + element.filename);
      console.log(imageArr);
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
      subCatogory: req.body.subCatogory,
      delevery: req.body.delevery,
      createAt: Date(),
    });

    product
      .save()
      .then((result: any) => {
        const data = {
          success: true,
          message: "Product added",
          result,
        };

        res.status(201).json(data);
        imageArr = [];
      })
      .catch((err: any) => {
        res.status(404).json(err);
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
      .find()
      .skip(req.query.skip)
      .limit(10)
      .exec()
      .then((result:any) => {
        if (result) {
          res.status(200).json({
            response: {
              count: result.length,
              request: "GEt",
              respons: "succses",
            },
            data: result.map((data:any) => {
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
      .then((result:any) => {
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
    console.log(req.files);

    req.files.forEach((element: any) => {
      imageArr.push("/productImage/" + element.filename);
      console.log(element.filename);
      console.log(imageArr);

    });
    // console.log("adasd", req.file);
    const id = req.params.id;
    console.log(imageArr);
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
      .then((result:any) => {
        if (result) {
          res.status(200).json({
            success: true,
            message: "data updated",
            result,
          });
          console.log(result);
        } 
      })
      .catch((err) => {
        res.status(400).json(err);
      });
    imageArr = [];
  },

  removeProduct(req: any, res: any) {
    let userImages = false;
    const id = req.params.id;
    productModel
      .findByIdAndRemove(id)
      .exec()
      .then((result:any) => {
        res.status(200).json(result);
        try {
          result.productImage.forEach((element: any) => {
            console.log(element);
            unlinkAsync("." + element);
          });
        } catch (err) {
          console.log(err);
        }
        console.log(result);
        userImages = true;
      })
      .catch((err) => {
        res.status(500).json(err.errors);
      });
  },
};

export default product;
