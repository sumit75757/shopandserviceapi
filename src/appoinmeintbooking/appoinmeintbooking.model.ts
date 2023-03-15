import mongooss, { Schema } from "mongoose";
const apoimentbooking = new mongooss.Schema({
  _id: mongooss.Schema.Types.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: "auth" },
  serviceId: { type: Schema.Types.ObjectId, ref: "product" },
  userdata:{},
  crreatAt: { type: String, required: true },

});
export default mongooss.model("apoimentbooking", apoimentbooking);
