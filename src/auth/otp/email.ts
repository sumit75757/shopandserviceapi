import  express  from "express";
const route = express();
import  authChack  from "../../Middleware/chackauth"
import emailservice from "./otpEmail.controller";

route.post('/', authChack,emailservice.email);
route.post('/otp',authChack,emailservice.verify)
export default route