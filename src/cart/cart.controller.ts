import express from "express";
const route = express();
import mongoos from "mongoose";

import cart from "./cart.model";
const carts = {
  removeCart(req: any, res: any) {
    const id = req.params.id;
    cart.remove({_id:id})
      .then((result: any[]) => {
        let obj = {
          response: "sucsess",
          data: result,
        };
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
  updateCart(req: any, res: any) {
    const id = req.params.id;
    let obj = {
      quantity: req.body.quantity,
    };
    cart
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: obj,
        }
      )
      .then((result: any) => {
        let obj = {
          response: "sucsess",
          data: result,
        };
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },

  getCart(req: any, res: any) {
    const id = req.params.id;
    cart
      .aggregate([
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "prod",
          },
        },
      ])
      .then((result: any[]) => {
        // console.log(result);
        
        let total :any
        let prodArr: any[] = [];
        let data = result.filter((d) => d.userId == id);
        data.forEach((element) => {
         
          // console.log(element._id);
          // delete element.prod;
          element.prod[0]['productId'] = element.prod[0]['_id']
          element.prod[0]._id =element._id
          element.prod[0].qty =element.quantity
          prodArr.push( element.prod[0])
          
          //  element.prod[0].price + total
          
          
          // // console.log( );
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
        // console.log("ERROR", err);
        // res.status(400).send(err);

      });
  },

  addCart(req: any, res: any) {
    const cartss = new cart({
      _id: new mongoos.Types.ObjectId(),
      userId: req.body.userId,
      productId: req.body.productId,
      quantity: req.body.quantity,
      crreatAt: Date(),
    });
    //// console.log(cartss);
    cartss
      .save()
      .then((result: any) => {
        res.status(201).json(result);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
};
export default carts;
