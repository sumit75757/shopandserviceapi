import mongooss, { Schema } from "mongoose";
const feedback = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  name:  { type: String, required: true },
  email:  { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
  crreatAt: { type: String, required: true },
});
export default mongooss.model("feedback", feedback);
