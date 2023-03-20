import mongooss, { Schema } from "mongoose";
const order = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "auth" },
  productId: { type: Schema.Types.ObjectId, ref: "product" },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  cancel:{ type: String, default: "false" },
  payment: { type: String, required: true },
  crreatAt: { type: String, required: true },
});
export default  mongooss.model("order", order);
