import mongooss, { Schema } from "mongoose";
const subcaetogorySchema = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  catgory: { type: String, required: true },
  name: { type: String, required: true },
  perent: { type: Schema.Types.ObjectId, ref: "cats" },
  crreatAt: { type: String, required: true },
  updateAt: { type: String },
});
export default mongooss.model("subcaetogories", subcaetogorySchema);
