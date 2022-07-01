import auth from "../auth/auth.model";

const sellers = {
  async getseller(req: any, res: any) {
    console.log(req.query.skip, req.query.limit);
    let a = req.query.serch
    console.log(a);
    let serch: string = "";
    if (a == undefined && a == "undefined") {
      serch = '';
    }else {
      serch = req.query.serch;
    }
    var re = new RegExp(serch, "i");
  await auth
    .find({ character: "User" })
    .or([{ username: { $regex: re } }, { email: { $regex: re } }])
    .sort("title")
    .skip(req.query.skip)
    .limit(req.query.limit)
    .then(async (result: any) => {
    await auth
      .find({ character: "User" })
      .or([{ username: { $regex: re } }, { email: { $regex: re } }])
      .sort("title")
      .count()
      .then((ress) => {
        console.log(result);
        const arr: any[] = [];
        result.forEach((element: any) => {
          const obj = {
            _id: element._id,
            username: element.username,
            email: element.email,
            character: element.character,
            satate: element.satate,
            crreatAt: element.crreatAt,
            lastLogin: element.lastLogin,
          };
          arr.push(obj);
        });
        console.log(ress);
        
        const responseData: any = {
          count: ress,
          response: "success",
          users: arr,
        };
        res.status(200).json(responseData);
      });
    })
    .catch((err: any) => {
      res.status(400).json(err);
    });
  },
};
export default sellers;
