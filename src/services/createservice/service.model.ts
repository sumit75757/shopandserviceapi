import mongoos, { Schema } from "mongoose";
const service = new mongoos.Schema({
  _id: mongoos.Schema.Types.ObjectId,
  serviceName: {
    type: String,
    required: true,
  },
  serviceInfo: {
    type: String,
    required: true,
  },
  sellerId: { type: Schema.Types.ObjectId, ref: "auth" },
  catogory: {
    type: String,
    required: true,
  },
  serviceImage: {
    type: Array,
  },
  discrption: {
    type: String,
  },
  nearLandMark: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  onhome: {
    type: Boolean,
    required: false,
  },
  closeTime: {
    type: String,
    required: true,
  },
  createAt: String,
});
export default mongoos.model("service", service);
