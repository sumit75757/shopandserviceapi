
import  subcaetogory  from "./subCategory.modual";
import mongoose from "mongoose";
const subCategory = {
  getCatagory(req: any, res: any) {
    subcaetogory
      .find()
      .exec()
      .then((result: any) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            code: "404",
            massage: "Not Found",
          });
        }
      })
      .catch((err: any) => {
        //console.log("ERROR", err);
      });
  },

  //////getCatogory//////////

  addCatagory(req: any, res: any) {
    //console.log(req.body);
    const catogory = new subcaetogory({
      _id: new mongoose.Types.ObjectId(),
      catgory: req.body.catgory,
      name: req.body.name,
      perent: new mongoose.Types.ObjectId(req.body.perent),
      crreatAt: Date(),
    });
    catogory
      .save()
      .then((result: any) => {
        res.status(201).json(result);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },

  updateCatagory(req: any, res: any) {
    const id = req.params.id;
    const catogory = {
      catgory: req.body.catgory,
      name: req.body.name,
      perent: req.body.perent,
      updateAt: Date(),
    };
    //console.log(catogory, id);

    subcaetogory
      .findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: catogory,
        }
      )
      .exec()
      .then((result: any) => {
        if (result) {
          const returnData = {
            status: true,
            time: Date(),
            message: "Data updated",
            data: result,
          };
          res.status(200).json(returnData);
        } else {
          res.json({
            massage: "Some thing wrong ",
          });
        }
      })
      .catch((err: any) => {
        res.status(500).json(err.errors);
      });
  },

  removeCatagory(req: any, res: any) {
    //console.log(req.body);
    const id = req.params.id;
    //console.log(id);

    subcaetogory
      .remove({
        _id: id,
      })
      .exec()
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: { errors: any; }) => {
        res.status(500).json(err.errors);
      });
  },
  // tslint:disable-next-line:no-empty
  getByCatagory(req: any, res: any) {
    const id = req.params.id;
    subcaetogory
      .findById(id)
      .exec()
      .then((result: any) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            code: "404",
            massage: "Not Found",
          });
        }
      })
      .catch((err: any) => {
        //console.log("ERROR", err);
      });
  },
};



    

export default subCategory