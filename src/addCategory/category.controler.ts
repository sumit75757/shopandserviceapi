// import cat from "./addCat.modal";
// import subcatmoduel from "./subCategory/subCategory.modual";
import caetogory from "./addCat.modal";
import mongoose from "mongoose";
const catagory = {
  getCatagory(req: any, res: any) {
    caetogory
      .aggregate([
        {
          $lookup: {
            from: "subcaetogories",
            localField: "_id",
            foreignField: "perent",
            as: "subcaetogorys",
          },
        },
      ])
      .then((result: any) => {
        console.log(result);
        let obj = {
          count:result.length,
          response: 'sucsess',
          data:result
        }
        res.status(200).json(obj);
      })
      .catch((err: any) => {
        console.log("ERROR", err);
      });
  },

  //////getCatogory//////////

  addCatagory(req: any, res: any) {
    console.log(req.body);
    const catogory = new caetogory({
      _id: new mongoose.Types.ObjectId(),
      catgory: req.body.catgory,
      name: req.body.name,
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
      updateAt: Date(),
    };
    console.log(catogory, id);

    caetogory
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
    console.log(req.body);
    const id = req.params.id;
    console.log(id);

    caetogory
      .remove({
        _id: id,
      })
      .exec()
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: { errors: any }) => {
        res.status(500).json(err.errors);
      });
  },
  // tslint:disable-next-line:no-empty
  getByCatagory(req: any, res: any) {
    const id = req.params.id;
    caetogory
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
        console.log("ERROR", err);
      });
  },
};
// function filtera() {}
// // tslint:disable-next-line:no-unused-expression
export default catagory;
