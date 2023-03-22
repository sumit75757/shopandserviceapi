import express from "express";
const route = express();
import mongoos from "mongoose";

import feedback from "./feedback.model";

route.get("/", (req: any, res: any) => {
    feedback
      .find().exec()
      .then((result: any[]) => {
     
        let obj = {
          count: result.length, 
          response: "sucsess",
          data: result,
          
        };
        // // console.log(prodArr);
        
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        console.log("ERROR", err);
        res.status(400).send(err);

      });
  })
  route.post("/", (req: any, res: any) => {
    const feedbacks = new feedback ({
        _id: new mongoos.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        crreatAt: Date(),
      });
      feedbacks.save()
      .then((result: any) => {
     
        let obj = {
          response: "sucsess",
          data: result,
          
        };
        // // console.log(prodArr);
        
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        console.log("ERROR", err);
        res.status(400).send(err);

      });
  })
  route.delete("/:id", (req: any, res: any) => {
    const id = req.params.id;
    feedback.remove({_id:id})
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
  })
  
  export default route;
