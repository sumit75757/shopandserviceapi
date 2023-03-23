import orderes from "./orders.model";
import productModel from "../product/product.model";
const mongoos = require("mongoose");
var Razorpay = require("razorpay");
const orders = {
  getallorders(req: any, res: any){
    orderes
    .find()
    .exec()
    .then((result: any[]) => {
      let obj = {
        count: result.length, 
        response: "sucsess",
        data: result,
      };
      res.status(200).json(obj);
    })
    .catch((err: any) => {
      res.status(400).json(
        {
          erro :err,
          response: "error",
        });
    });
  },
  getOrder(req: any, res: any) {
    const id = req.params.id;
    orderes
      .aggregate([
        {
          $lookup: {
              from: "products",
              localField: "productId",
              foreignField: "_id",
              as: "prod"
          },
        },
      ])
      .then((result: any[]) => {
        // // console.log(result);
        
        let total :any
        let prodArr: any[] = [];
        let data = result.filter((d) => d.userId == id);
        // console.log("#############################",data);

        data.forEach((element) => {
          element.prod[0]['productId'] = element.prod[0]['_id']
          element.prod[0]._id =element._id
          element.prod[0].qty =element.quantity
          element.prod[0].payment =element.payment
          element.prod[0].cancel =element.cancel
          prodArr.push(element.prod[0])
        });
        let obj = {
          count: data.length, 
          response: "sucsess",
          data: prodArr,
          
        };

        // // console.log(prodArr);
        
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        res.status(400).json(
          {
            erro :err,
            response: "error",
          });
      });
  },

  async order(req: any, res: any) {
    let prod: any;
    // await productModel
    //   .findById(req.body.productId)
    //   .exec()
    //   .then((result: any) => {
    //     prod = result;
    //   })
    //   .catch((err: any) => {
    //     res.status(500).json(err.errors);
    //   });
    const ordders = new orderes({
      _id: new mongoos.Types.ObjectId(),
      userId: req.body.userId,
      productId: req.body.productId,
      quantity: req.body.quantity,
      price: req.body.price * req.body.quantity,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      payment: req.body.payment,
      crreatAt: Date(),
    });
     ordders
       .save()
       .then((result: any) => {
         let data = {
           message: "order plased",
           result: result,
         };
         res.status(201).json(data);
       })
       .catch((err: any) => {
         res.status(400).json(err);
       });
   

  },
  update(req:any,res:any){
    const id = req.params.id;
    let data = {cancel:req.body.cancel}
    orderes
    .findByIdAndUpdate({ _id: id }, { $set: data })
    .exec()
    .then((result: any) => {
        res.status(200).json(result);
      })
    .catch((err: any) => {
        res.status(400).json(err);
      });
  }

};
export default orders;


