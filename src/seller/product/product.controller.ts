import product from "../../product/product.model";
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
      .or([{ productName: { $regex: re }}, { productInfo: { $regex: re } }])
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
};
export default products;
