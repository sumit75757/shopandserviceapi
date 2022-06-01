import mongooss from "mongoose";
const catogorySchema = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  catgory: { type: String, required: true },
  name: { type: String, required: true },
  crreatAt: { type: String, required: true },
  updateAt: { type: String },
});
export default mongooss.model("cat", catogorySchema);
