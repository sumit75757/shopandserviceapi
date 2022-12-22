import mongooss, { Schema } from "mongoose";
const offers = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  offerImage: { type: String, required: true },
  category: { type: String, required: true },
  productid: { type: String, required: true },
  crreatAt: { type: String, required: false },
  
});
export default mongooss.model("offers", offers);
