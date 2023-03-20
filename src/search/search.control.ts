import product from "../product/product.model";
import service from "../services/createservice/service.model";

const search = {
  serch(req: any, res: any) {
    let a = req.query.serch;
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
        //// console.log(result);
        res.status(200).send(result)
      }).catch((err:any)=>{
        res.status(400).send(err)
      });
  },
  catserch(req: any, res: any){
    let a = req.params.catogory;
    //// console.log(a);
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
        //// console.log(result);
        res.status(200).send(result)
      }).catch((err:any)=>{
        res.status(400).send(err)
      });
  },
  serviceserch(req: any, res: any) {
    let a = req.params.serch;
    let serch: string = "";
    if (a == undefined && a == "undefined") {
      serch = "";
    } else {
      serch = req.params.serch;
    }
    var re = new RegExp(serch, "i");
    service
      .find()
      .or([
        { serviceName: { $regex: re } },
        { serviceInfo: { $regex: re } },
        { catogory: { $regex: re } },
        { nearLandMark: { $regex: re } },
        { discrption: { $regex: re } },
      ])
      .skip(req.params.skip)
      .limit(req.params.limit)
      .then(async (result: any) => {
        //// console.log(result);
        res.status(200).send(result)
      }).catch((err:any)=>{
        res.status(400).send(err)
      });
  },
  serivececatserch(req: any, res: any){
    let a = req.params.catogory;
    //// console.log(a);
    // let serch: string = "";
    // if (a == undefined && a == "undefined") {
    //   serch = "";
    // } else {
    //   serch = req.query.serch;
    // }
    var re = new RegExp(a, "i");
    
    
    service.find()
      .or([
        { catogory: { $regex: re } },
        { subCatogory: { $regex: re } },
      ])
      .skip(req.params.skip)
      .limit(req.params.limit)
      .then(async (result: any) => {
        res.status(200).send(result)
      }).catch((err:any)=>{
        res.status(400).send(err)
      });
  }

  
};
export default search