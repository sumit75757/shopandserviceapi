import auth from "../auth/auth.model";

const sellers = {
  getseller(req: any, res: any) {
    auth
      .find({ character: "seller" })
        .then((result: any) => {
            const arr:any[] =[]
          result.forEach((element:any) => {
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
              crreatAt: element.crreatAt,
              lastLogin: element.lastLogin,
            };
                arr.push(obj);
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
