import offersModel from "./offers.model";
import mongoos from "mongoose";
const fs = require("fs");
import { promisify } from "util";
import multer from "multer";
const unlinkAsync = promisify(fs.unlink);

const offers = {
  getOffers(req: any, res: any) {
    offersModel
      .find()
      .exec()
      .then((result) => {
        res.status(200).json({
          count: result.length,
          response: "success",
          result: result,
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  postOffers(req: any, res: any) {
    let offerImage = req.file;
    const offer = new offersModel({
      _id: new mongoos.Types.ObjectId(),
      offerImage: "/offerImage/" + req.file?.filename,
      category: req.body.category,
      crreatAt: Date(),
    });
    offer.save().then((result: any) => {
      res
        .status(201)
        .json({
          response: "success",
          message: "offer create",
          result: result,
        })
        .catch((err: any) => {
          res.status(400).send(err);
        });
    });
  },
  updateOffers(req: any, res: any) {
    const id = req.params.id;
    let image;
    if (req.file) {
      image = req.file;
    }
    let offer;
    if (req.file) {
      offer = {
        offerImage: "/offerImage/" + req.file?.filename,
        category: req.body.category,
      };
    } else {
      offer = {
        category: req.body.category,
      };
    }

    offersModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: offer,
        }
      )
      .then((result: any) => {
        res
          .status(201)
          .json({
            response: "success",
            message: "offer create",
            result: result,
          })
          .catch((err: any) => {
            res.status(400).send(err);
          });
      });
  },
  removeOffer(req: any, res: any) {
    let userImages = false;
    const id = req.params.id;
    let path;
    offersModel
      .findByIdAndRemove(id)
      .exec()
      .then((result) => {
        res.status(200).json(result);
        try {
          unlinkAsync("." + result.offerImage);
        } catch (err) {
          console.log(err);
        }
        console.log(result);
        userImages = true;
      })
      .catch((err) => {
        res.status(400).json(err.errors);
      });
  },
};
export default offers;
