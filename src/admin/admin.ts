import express from "express";
import mongooss from 'mongoose'
import auth from './admin.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import forgot from "./forgotPassword/forgotpassword";
const route = express();
require("dotenv").config();
// import email from "./otp/email";
const jWT_SECRET: string | any = process.env.JWT_SECRET
// console.log("dfasdF", jWT_SECRET);

route.post('/singup', (req: any, res: any, next: any) => {
    auth.find({
        email: req.body.email
    }).exec().then(
        (result: string | any[]) => {
            // tslint:disable-next-line: no-console
            console.log(result);
            if (result.length >= 1) {
                return res.status(409).json({
                    code: '409',
                    message: 'user exist',
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err: any, hase: any) => {

                    if (err) {
                        return res.status(500).json({
                            code: '500',
                            message: err,
                        })
                    } else {
                        console.log(hase);

                        const data = new auth({
                            _id: new mongooss.Types.ObjectId(),
                            username: req.body.username,
                            email: req.body.email,
                            character:req.body.character,
                            password: hase,
                            
                            crreatAt: Date(),
                            lastLogin: ''
                        })
                        data.save().then((result: any) => {
                            bcrypt.compare(req.body.password, hase, (err: any, logUSer: any) => {
                                console.log(logUSer);
                                if (err) {
                                    return err.status(401).json({
                                        message: 'Anauthorais user'
                                    })
                                }
                                if (logUSer) {

                                    const token = jwt.sign({
                                        email: req.body.email,
                                        // userId: data._id
                                    },
                                        jWT_SECRET, {
                                        expiresIn: '7d'
                                    }
                                    )
                                    const resData = {
                                        response: {
                                            user: true,
                                            request: 'User Login',
                                            respons: 'succses',
                                        },
                                        useData: {
                                            type: String, required: true ,
                                            character: req.body.character,
                                            email: req.body.email,
                                            _id: data.id
                                        },
                                        token: token,
                                        logInTime: new Date()
                                    }

                                    return res.status(200).send(resData)
                                }
                                return res.status(401).json({
                                    message: 'unauthorais user'
                                })
                            })
                            // console.log(result);
                        }).catch(
                            (err: any) => {

                                console.log(err);
                            }
                        )

                    }
                })

            }
        }
    )



});
route.post('/singin', (req: any, res: any, next: any) => {
    auth.find({
        email: req.body.email
    }).exec().then(
        (result: any[]) => {
            console.log("fasdfasdfasd", result);
            if (result.length < 1) {
                return res.status(401).json({
                    message: 'Anauthorais user'
                })
            }
            bcrypt.compare(req.body.password, result[0].password, (err: any, logUSer: any) => {
                if (err) {
                    return err.status(401).json({
                        message: 'Anauthorais user'
                    })
                }
                if (logUSer) {

                    const token = jwt.sign({
                        email: result[0].email,
                        userId: result[0]._id
                    },
                        jWT_SECRET, {
                        expiresIn: "7d"
                    }
                    )
                    // tslint:disable-next-line:no-string-literal
                    const rData = {
                        _id: result[0]._id,
                        username: result[0].username,
                        email: result[0].email,
                        character: result[0].character,
                        crreatAt: result[0].crreatAt,
                        lastLogin: result[0].lastLogin,
                    }

                    let data;
                    result.forEach((element: any) => {
                        const obj = new auth({
                            lastLogin: Date()
                        })
                        auth.findByIdAndUpdate({
                            _id: element._id
                        }, {
                            $set: obj
                        }).exec().then((final: any) => {
                            console.log("FasdfasdfAS", final);
                        }).catch((err: any) => {
                            console.log(err);
                        })
                        data = {
                            response: {
                                user: true,
                                request: 'User Login',
                                respons: 'succses',
                            },
                            useData: rData,
                            token: token,
                            logInTime: Date()
                        }
                    });
                    return res.status(200).send(data)
                }
                return res.status(401).json({
                    message: 'unauthorais user'
                })
            })


        })



});
// route.use('/varification' ,email)
// route.use('/forgot' ,forgot)


export default route