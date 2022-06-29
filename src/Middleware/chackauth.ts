import jwt from "jsonwebtoken";
require("dotenv").config();

const authChack = (req: any, res: any, next: any) => {
  try {
    if (req.headers.authorization !== "") {
      const token = req.headers.authorization.split(" ")[1];
      const jwtSECRET: string | any = process.env.JWT_SECRET;
      const decode = jwt.verify(token, jwtSECRET);
      req.userData = decode;
    }
    next();
  } catch (error) {
    res.status(401).json({
      message: "auth fail",
    });
    const err: any = new Error("401 Not Found");
    err.status = 401;
    next();
  }
};
export default authChack;
