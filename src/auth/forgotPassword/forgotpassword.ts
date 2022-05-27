import express from "express";
import auth from '../auth.model';
import bcrypt from 'bcryptjs';
const route = express();

require("dotenv").config();
route.post('/', (req: any, res: any, next: any) => {
    bcrypt.hash(req.body.password, 10, async (err: any, hase: any) => {
        if (err) {
            return res.status(500).json({
                code: '500',
                message: err,
            })
        } else {
            // tslint:disable-next-line:no-unused-expression
            await auth.findOneAndUpdate({ email: req.body.email }, { password: hase, }).then(ress=>{
                console.log(ress);
                
            })
            res.status(200).json({
                message: "Password Updated",
            })
        }
    })
});
export default route