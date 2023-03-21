import product from "../../product/product.model";
import ordersModel from "../../orders/orders.model";
import service from "../../services/createservice/service.model";

const products = {
  async getgetproduct(req: any, res: any) {
    //
    //// console.log(req.query.skip, req.query.limit);
    let a = req.query.serch;
    //// console.log(a);
    let serch: string = "";
    if (a == undefined && a == "undefined") {
      serch = "";
    } else {
      serch = req.query.serch;
    }
    var re = new RegExp(serch, "i");
    await product
      .find({ sellerId: req.params.id })
      .or([{ productName: { $regex: re } }, { productInfo: { $regex: re } }])
      .then((result: any) => {
        product
          .find({ sellerId: req.params.id })
          .count()
          .then((count) => {
            const arr: any[] = [];
            const responseData: any = {
              count: count,
              response: "success",
              product: result,
            };
            res.status(200).json(responseData);
          });
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
  getorderproduct(req: any, res: any) {
    let id = req.params.id;
    ordersModel
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
        result.forEach((element) => {
          // console.log(element.prod[0]);
        });
        let total: any;
        let prodArr: any[] = [];
        let data = result.filter((d) => d.prod[0].sellerId == id);
        console.log("#############################", data);

        data.forEach((element) => {
          element.prod[0]["productId"] = element.prod[0]["_id"];
          element.prod[0]._id = element._id;
          element.prod[0].qty = element.quantity;
          element.prod[0].payment = element.payment;
          element.prod[0].cancel = element.cancel;
          prodArr.push(element.prod[0]);
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
        res.status(400).json({
          erro: err,
          response: "error",
        });
      });
  },getservicebyseller(req: any, res: any){
    let id = req.params.id;

    service.find({sellerId:id}).exec().then((result)=>{ 
      let obj = {
      count: result.length,
      response: "sucsess",
      data: result,
    };

    console.log(obj);

    res.status(200).json(obj);
  })
  .catch((err: any) => {
    res.status(400).json({
      erro: err,
      response: "error",
    });
  });
  }
};
export default products;
