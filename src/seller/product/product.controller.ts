import product from "../../product/product.model";

const products = {
  getgetproduct(req: any, res: any) {
    //
    product
      .find({ sellerId: req.params.id })
      .then((result: any) => {
        const arr: any[] = [];
        const responseData: any = {
          count: result.length,
          response: "success",
          product: result,
        };
        res.status(200).json(responseData);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
};
export default products;
