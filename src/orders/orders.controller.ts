import user from "../auth/auth.model";
const cart = {
  async cart(req: any, res: any) {
    const id = req.params.id;
    let data: any;
    await user.findById(id).then((r) => {
      data = r.orders;
      data.push(req.body.orders);
    });
    const post = new user({
      orders: data,
    });
    user
      .findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: post,
        }
      )
      .exec()
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            code: "404",
            massage: "Not Found",
          });
        }
      })
      .catch((err) => {
        res.status(500).json(err.errors);
      });
  },
};
export default cart;
