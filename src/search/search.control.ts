import product from "../product/product.model";

const search = {
  serch(req: any, res: any) {
    //console.log(req.query.skip, req.query.limit);
    let a = req.query.serch;
    //console.log(a);
    let serch: string = "";
    if (a == undefined && a == "undefined") {
      serch = "";
    } else {
      serch = req.query.serch;
    }
    var re = new RegExp(serch, "i");
    
    product
      .find()
      .or([
        { productName: { $regex: re } },
        { productInfo: { $regex: re } },
        { catogory: { $regex: re } },
        { subCatogory: { $regex: re } },
        { discrption: { $regex: re } },
      ])
      .skip(req.query.skip)
      .limit(req.query.limit)
      .then(async (result: any) => {
        //console.log(result);
        res.status(200).send(result)
      }).catch((err:any)=>{
        res.status(400).send(err)
      });
  },
  catserch(req: any, res: any){
    let a = req.params.catogory;
    //console.log(a);
    // let serch: string = "";
    // if (a == undefined && a == "undefined") {
    //   serch = "";
    // } else {
    //   serch = req.query.serch;
    // }
    var re = new RegExp(a, "i");
    
    product
      .find()
      .or([
        { catogory: { $regex: re } },
        { subCatogory: { $regex: re } },
      ])
      .skip(req.query.skip)
      .limit(req.query.limit)
      .then(async (result: any) => {
        //console.log(result);
        res.status(200).send(result)
      }).catch((err:any)=>{
        res.status(400).send(err)
      });
  }

  
};
export default search