import express from "express";
import mongooss from "mongoose";
import auth from "./auth.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import forgot from "./forgotPassword/forgotpassword";
const route = express();
require("dotenv").config();
import email from "./otp/email";
import multer from "multer";
const jWT_SECRET: string | any = process.env.JWT_SECRET;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./userImage/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const uplode = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const fs = require("fs");
import { promisify } from "util";
import authChack from "../Middleware/chackauth";

const unlinkAsync = promisify(fs.unlink);

// //console.log("dfasdF", jWT_SECRET);

route.post(
  "/singup",
  uplode.single("userImage"),
  (req: any, res: any, next: any) => {
    auth
      .find({
        email: req.body.email,
      })
      .exec()
      .then((result: any) => {
        //console.log(req.body);
        if (result.length >= 1) {
          return res.status(409).json({
            code: "409",
            message: "user exist",
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err: any, hase: any) => {
            if (err) {
              return res.status(500).json({
                code: "500",
                message: err,
                dafsd: "dfas",
              });
            } else {
              const data = new auth({
                _id: new mongooss.Types.ObjectId(),
                username: req.body.username,
                email: req.body.email,
                password: hase,
                character: req.body.character,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                userImage: "/userImage/" + req.file?.filename,
                age: req.body.age,
                satate: req.body.satate,
                zender: req.body.zender,
                crreatAt: Date(),
                lastLogin: "",
              });
              data
                .save()
                .then((result: any) => {
                  bcrypt.compare(
                    req.body.password,
                    hase,
                    (err: any, logUSer: any) => {
                      //console.log(logUSer);
                      if (err) {
                        return err.status(401).json({
                          message: "Anauthorais user",
                        });
                      }
                      if (logUSer) {
                        const token = jwt.sign(
                          {
                            email: req.body.email,
                            // userId: data._id
                          },
                          jWT_SECRET,
                          {
                            expiresIn: "7d",
                          }
                        );
                        const resData = {
                          response: {
                            user: true,
                            request: "User Login",
                            respons: "succses",
                          },
                          useData: {
                            _id: data.id,
                            username: req.body.username,
                            email: req.body.email,
                            character: req.body.character,
                          },
                          token: token,
                          logInTime: new Date(),
                        };

                        return res.status(200).send(resData);
                      }
                      return res.status(401).json({
                        message: "unauthorais user",
                      });
                    }
                  );
                  // //console.log(result);
                })
                .catch((err: any) => {
                  res.status(401).json({
                    err,
                    message: "unauthorais user",
                  });
                });
            }
          });
        }
      });
  }
);
route.post("/singin", (req: any, res: any, next: any) => {
  auth
    .find({
      email: req.body.email,
    })
    .exec()
    .then((result: any[]) => {
      //console.log("fasdfasdfasd", result);
      if (result.length < 1) {
        return res.status(401).json({
          message: "Anauthorais user",
        });
      }
      if (!result[0].satate) {
        return res.status(401).json({
          message: "Your Account Blocked",
        });
      }
      bcrypt.compare(
        req.body.password,
        result[0].password,
        (err: any, logUSer: any) => {
          if (err) {
            return err.status(401).json({
              message: "Anauthorais user",
            });
          }
          if (logUSer) {
            const token = jwt.sign(
              {
                email: result[0].email,
                userId: result[0]._id,
              },
              jWT_SECRET,
              {
                expiresIn: "7d",
              }
            );
            // tslint:disable-next-line:no-string-literal
            const rData = getdata(result[0])

            let data;
            result.forEach((element: any) => {
              const obj = new auth({
                lastLogin: Date(),
              });
              auth
                .findByIdAndUpdate(
                  {
                    _id: element._id,
                  },
                  {
                    $set: obj,
                  }
                )
                .exec()
                .then((final: any) => {
                  //console.log("FasdfasdfAS", final);
                })
                .catch((err: any) => {
                  //console.log(err);
                });
              data = {
                response: {
                  user: true,
                  request: "User Login",
                  respons: "succses",
                },
                useData: rData,
                token: token,
                logInTime: Date(),
              };
            });
            return res.status(200).send(data);
          }
          return res.status(401).json({
            message: "unauthorais user",
          });
        }
      );
    });
});

route.put(
  "/userUpdate/:id",
  authChack,
  uplode.single("userImage"),
  (req: any, res: any) => {
    const _id = req.params.id;
    //console.log(req.body);

    let obj;
    if (req.file) {
      obj = {
        username: req.body.username,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        userImage: "/userImage/" + req.file.filename,
        state: req.body.state,
        zip: req.body.zip,
        age: req.body.age,
        satate: req.body.satate,
        character: req.body.character,
        zender: req.body.zender,
      };
    } else {
      obj = {
        username: req.body.username,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        age: req.body.age,
        satate: req.body.satate,
        character: req.body.character,
        zender: req.body.zender,
      };
    }

    auth
      .findByIdAndUpdate(
        {
          _id: _id,
        },
        {
          $set: obj,
        }
      )
      .exec()
      .then((result: any) => {
        // res.status(201).json(result);
        if (req.file) {
          try {
            //console.log("adfasdfasdfadsfa", result.userImage);
            unlinkAsync("." + result.userImage);
          } catch (err) {
            //console.log(err);
            res.status(400).json(err);
          }
          res.status(201).json(result);

        } else {
          res.status(201).json(result);
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
);

route.delete("/seller/:id", (req, res) => {
  const id = req.params.id;
  auth
    .remove({
      _id: id,
    })
    .exec()
    .then((result:any) => {
      res.status(200).json(result);
      //console.log(result);
    })
    .catch((err) => {
      res.status(400).json(err.errors);
    });
});

route.use("/varification", email);
route.use("/forgot", forgot);
function getdata(result:any) {
  let res = Object.assign(result)
  let obj
  //console.log(res);
  if(res.character=="seller"){
    obj={
      "_id": res._id,
      "username":res.username,
      "email": res.email,
      "userImage": res.userImage,
      "phone": res.phone,
      "address": res.address,
      "city": res.city,
      "state": res.state,
      "zip": res.zip,
      "age": res.age,
      "character": res.character,
      "crreatAt":  res.crreatAt,
      "lastLogin":res.lastLogin,
      "zender": res.zender,
      "cart":res.cart,
      "orders": res.orders,
      "satate": res.satate
    }
  }else if(res.character=="User" ){
    obj={
      "_id": res._id,
      "username":res.username,
      "email": res.email,
      "userImage": res.userImage,
      "phone": res.phone,
      "address": res.address,
      "city": res.city,
      "state": res.state,
      "zip": res.zip,
      "age": res.age,
      "character": res.character,
      "crreatAt": res.crreatAt,
      "lastLogin":res.lastLogin,
      "zender": res.zender,
      "cart":res.cart,
      "orders": res.orders,
      "satate": res.satate
    }
  }else
  {obj ={
     "_id": res._id,
    "username":res.username,
    "email": res.email,
    "character": res.character,
  }
  }
  return obj
}
export default route;
