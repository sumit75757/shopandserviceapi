import mongooss, { Schema } from "mongoose";
const cart = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "auth" },
  productId: { type: Schema.Types.ObjectId, ref: "product" },
  quantity: { type: Number, required: true },
  crreatAt: { type: String, required: true },
});
export default mongooss.model("cart", cart);
