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
    select: false,
  },
},
{
  toJSON: { virtuals: true},
  toObject: { virtuals: true}
});


//Virtual properties should be utilized to seperate 'buisness logic'->(ContentModel.js) AWAY from 'application logic'->(contentController.js)
//The field name of the result or value of this virtual field (in this case)->'divideByTwo' can not be used by the database because it is not stored in DB
//But the value can be used in specific use cases (ex: displaying the results to UI for data anaylsis purposes)
ContentSchema.virtual('divideByTwo').get(function(){
  return this.quantity / 2;
});


// [[MongoDB]] DOCUMENT MIDDLEWARE: runs before .save() and .create()
ContentSchema.pre('save', function(next){
  console.log('changes can be made here to the object/document OR things can happen here thru a chain of .pre and .post middleware REFERENCE MongoDB Documentation ');
  console.log(this);
  next()
})

ContentSchema.pre('save', function(next){
  console.log('Will save document...');
  next()
})

ContentSchema.post('save', function(doc,next){
  console.log(doc);
  console.log('this executes after the pre MIDDLEWARE');
  next()
})


// ContentSchema.methods.toJSON = function () {
//   let obj = this.toObject();
//   delete obj.password;
//   return obj;
// };

export default mongoose.model("Content", ContentSchema);
