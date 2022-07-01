import auth from "../auth/auth.model";

const sellers = {
  async getseller(req: any, res: any) {
    console.log(req.query.skip, req.query.limit);
    let a = req.query.serch;
    console.log(a);
    let serch: string = "";
    if (a == undefined && a == "undefined") {
      serch = "";
    } else {
      serch = req.query.serch;
    }
    var re = new RegExp(serch, "i");
    await auth
    .find({ character: "seller" })
      .or([{ username: { $regex: re } }, { email: { $regex: re } }])
      .skip(req.query.skip)
      .limit(10)
      .then((result: any) => {
        auth
          .find({ character: "seller" })
          .count()
          .then((counts) => {
            const arr: any[] = [];
            result.forEach((element: any) => {
              console.log(element);
              const obj = {
                _id: element._id,
                username: element.username,
                email: element.email,
                character: element.character,
                address: element.address,
                city: element.city,
                userImage: element.userImage,
                state: element.state,
                zip: element.zip,
                age: element.age,
                phone: element.phone,
                zender: element.zender,
                satate: element.satate,
                crreatAt: element.crreatAt,
                lastLogin: element.lastLogin,
              };
              arr.push(obj);
            });
            console.log(counts);

            const responseData: any = {
              count: counts,
              response: "success",
              sellers: arr,
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
