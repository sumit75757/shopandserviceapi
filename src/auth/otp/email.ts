import  express  from "express";
const route = express();
import  authChack  from "../../Middleware/chackauth"
import emailservice from "./otpEmail.controller";

route.post('/',emailservice.email);
route.post('/otp',emailservice.verify)
export default route