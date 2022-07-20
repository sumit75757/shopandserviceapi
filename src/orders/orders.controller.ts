import orderes from "./orders.model";
import productModel from "../product/product.model";
const mongoos = require("mongoose");
const orders = {
  getOrder(req: any, res: any) {
    orderes
      .find({ userId: req.params.id })
      .then((result: any) => {
        let data = {
          message: "order",
          result: result,
        };
        res.status(200).json(data);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
  async order(req: any, res: any) {
    let prod: any;
    await productModel
      .findById(req.body.productId)
      .exec()
      .then((result: any) => {
        prod = result;
      })
      .catch((err: any) => {
        res.status(500).json(err.errors);
      });
    const ordders = new orderes({
      _id: new mongoos.Types.ObjectId(),
      userId: req.body.userId,
      productId: req.body.productId,
      quantity: req.body.quantity,
      price: prod.price * req.body.quantity,
      payment: req.body.payment,
      crreatAt: Date(),
    });
    console.log("fasdfasdfsa", prod.price);

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
};
export default orders;
