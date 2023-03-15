import mongoos from "mongoose";
import ServiceModel from "./service.model";

const fs = require("fs");
import { promisify } from "util";
const unlinkAsync = promisify(fs.unlink);

let imageArr: any[] = [];

const services = {
  getService(req: any, res: any) {
   
    ServiceModel.aggregate([
      {
        $lookup: {
          from: "auths",
          localField: "sellerId",
          foreignField: "_id",
          as: "seller",
        },
      },
    ])
      .then((result: any[]) => {
        let obj: any;
        result.forEach((element: any) => {
          element.seller.forEach((element: any) => {
            obj = {
              username: element.username,
              email: element.email,
              userImage: element.userImage,
              phone: element.phone,
              age: element.age,
            };
          });
          element.seller = obj;
        });
         if (req.params.id) {
           console.log(req.params.id);

          let arr =  result.filter((i) => i._id == req.params.id);
           // ////console.log(result);
           res.status(200).json({
             message: "got all service",
             result: arr,
           });
         }else{
           res.status(200).json({
             message: "got all service",
             result: result,
           });
         }

      })
      .catch((err: any) => {
        res.status(400).send(err);
      });
  },

  postService(req: any, res: any) {
    req.files.forEach((element: any) => {
      imageArr.push("/serviceImage/" + element.filename);
      ////console.log(element);
    });
    let service = new ServiceModel({
      _id: new mongoos.Types.ObjectId(),
      sellerId: req.body.sellerId,
      serviceName: req.body.serviceName,
      serviceInfo: req.body.serviceInfo,
      price: req.body.price,
      catogory: req.body.catogory,
      serviceImage: imageArr,
      discrption: req.body.discrption,
      nearLandMark: req.body.nearLandMark,
      area: req.body.area,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      startTime: req.body.startTime,
      closeTime: req.body.closeTime,
      createAt: Date(),
    });

    service
      .save()
      .then((result: any) => {
        let obj = {
          message: "Service Created",
          result: result,
        };
        res.status(201).send(obj);
      })
      .catch((err: any) => {
        res.status(400).send(err);
      });
  },

  async updateService(req: any, res: any) {
    //console.log(req.files.length > 0 );
    
    if (req.files.length > 0) {
      req.files.forEach((element: any) => {
        imageArr.push("/serviceImage/" + element.filename);
      });
    }
    const id = req.params.id;
    ////console.log(id);
    let data: any;
    if (req.body) {
      if (req.files.length > 0) {
        data = {
          serviceName: req.body.serviceName,
          serviceInfo: req.body.serviceInfo,
          price: req.body.price,
          catogory: req.body.catogory,
          serviceImage: imageArr,
          discrption: req.body.discrption,
          nearLandMark: req.body.nearLandMark,
          area: req.body.area,
          city: req.body.city,
          state: req.body.state,
          pincode: req.body.pincode,
          startTime: req.body.startTime,
          closeTime: req.body.closeTime,
        };
      } else {
        data = {
          serviceName: req.body.serviceName,
          serviceInfo: req.body.serviceInfo,
          price: req.body.price,
          catogory: req.body.catogory,
          discrption: req.body.discrption,
          nearLandMark: req.body.nearLandMark,
          area: req.body.area,
          city: req.body.city,
          state: req.body.state,
          pincode: req.body.pincode,
          onhome: req.body.sethomepage,
          startTime: req.body.startTime,
          closeTime: req.body.closeTime,
        };
      }
    }
    await ServiceModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: data,
      }
    )
      .exec()
      .then((result: any) => {
        if (result) {
          res.status(200).json({
            success: true,
            message: "service updated",
            result,
          });
          let old = result.serviceImage;
          let news = imageArr;
          let count;
          if (req.files.length > 0) {
            
            if (old.join() != news.join()) {
              if (news.length > old.length) {
                count = news.length;
              } else {
                count = old.length;
              }
              for (let index = 0; index < count; index++) {
                const element = news[index];
                const elementq = old[index];
                if (element != elementq) {
                  try {
                    ////console.log("adfasdfasdfadsfa", elementq);
                    unlinkAsync("." + elementq);
                  } catch (err) {
                    ////console.log(err);
                  }
                }
                imageArr = [];
              }
            }
          }
          ////console.log(result);
        }
      })
      .catch((err) => {
        res.status(400).json(err);
        imageArr = [];
      });
  },

  async removeService(req: any, res: any) {
    let serviceImage = false;
    const id = req.params.id;
    await ServiceModel.findByIdAndRemove(id)
      .exec()
      .then((result:any) => {
        serviceImage = true;
        res.status(200).json(result);
        try {
          result.serviceImage.forEach((element: any) => {
            ////console.log(element);
            unlinkAsync("." + element);
          });
        } catch (err) {
          ////console.log(err);
        }
        // ////console.log(result);
      })
      .catch((err) => {
        res.status(500).json(err.errors);
      });
    ////console.log(serviceImage);
  },
};
export default services;
