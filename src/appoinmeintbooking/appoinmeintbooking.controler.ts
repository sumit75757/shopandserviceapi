import express from "express";
const route = express();
import mongoos from "mongoose";

import apoimentbooking from "./appoinmeintbooking.model";
const apobooking = {
  totalbook(req: any, res: any){
    apoimentbooking
    .find().exec()
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
  removeapobooking(req: any, res: any) {
    const id = req.params.id;
    apoimentbooking.remove({_id:id})
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
  updateapobooking(req: any, res: any) {
    const id = req.params.id;
    let obj = {
      
    };
    apoimentbooking
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

  getapobooking(req: any, res: any) {
    const id = req.params.id;
    apoimentbooking
      .aggregate([
        {
          $lookup: {
            from: "services",
            localField: "serviceId",
            foreignField: "_id",
            as: "service",
          },
        },
      ])
      .then((result: any[]) => {
        // console.log(result);
        
        let total :any
        let serveArr: any[] = [];
        let data = result.filter((d) => d.userId == id);
        data.forEach((element) => {
         
          // console.log(element);
          // delete element.serve;
          element.service[0]['serviceId'] = element.service[0]['_id']
          element.service[0]._id =element._id
          element.service[0].userdata =element.userdata
          serveArr.push(element.service[0])
          
          //  element.serve[0].price + total
          
          
          // // console.log( );
        });
        let obj = {
          count: data.length, 
          response: "sucsess",
          data: serveArr,
          
        };
        // // console.log(serveArr);
        
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        // console.log("ERROR", err);
        // res.status(400).send(err);

      });
  },totalbookbyseller(req: any, res: any){
    const id = req.params.sellerid;
    apoimentbooking
      .aggregate([
        {
          $lookup: {
            from: "services",
            localField: "serviceId",
            foreignField: "_id",
            as: "service",
          },
        },
      ])
      .then((result: any[]) => {
        // console.log(result);
        
        let total :any
        let serveArr: any[] = [];
        let data = result.filter((d) => d.service[0].sellerId == id);
        data.forEach((element) => {
         
          // console.log(element);
          // delete element.serve;
          element.service[0]['serviceId'] = element.service[0]['_id']
          element.service[0]._id =element._id
          element.service[0].userdata =element.userdata
          serveArr.push(element.service[0])
          
          //  element.serve[0].price + total
          
          
          // // console.log( );
        });
        let obj = {
          count: data.length, 
          response: "sucsess",
          data: serveArr,
          
        };
        // // console.log(serveArr);
        
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        // console.log("ERROR", err);
        // res.status(400).send(err);

      });
  },

  addapobooking(req: any, res: any) {
    const apobookingss = new apoimentbooking({
      _id: new mongoos.Types.ObjectId(),
      userId: req.body.userId,
      serviceId: req.body.serviceId,
      userdata:req.body.userdata,
      crreatAt: Date(),
    });
    //// console.log(apobookingss);
    apobookingss
      .save()
      .then((result: any) => {
        res.status(201).json(result);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
};
export default apobooking;
