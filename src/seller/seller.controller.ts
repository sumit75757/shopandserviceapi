import auth from "../auth/auth.model";

const sellers = {
  getseller(req: any, res: any) {
    auth
      .find({ character: "seller" })
        .then((result: any) => {
            const arr:any[] =[]
            result.forEach((element:any) => {
                delete element.password;
                
                
                arr.push(element);
          });
        const responseData: any = {
          count: result.length,
          response: "success",
          sellers: arr,
        };
        res.status(200).json(responseData);
      })
      .catch((err: any) => {
        res.status(400).json(err);
      });
  },
};
export default sellers;
