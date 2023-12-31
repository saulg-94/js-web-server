import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  itemName: { type: String, trim:true },
  imageCover: String,
  images: [String],
  description: String,
  extraField:[String],
  price: {
    type: Number,
    default: 0.0,
  },
  ratingsAverage: { type: Number, default: 4.5 },
  ratingQuantity: { type: Number, default: 0 },
  quantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: Number,

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

ContentSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("Content", ContentSchema);
