import mongoose from "mongoose";

import validator from "validator"

const ContentSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      trim: true,
      required: [true, "An item must have a name"],
      minlength: [3, "Must have more or equal to 3 characters"],
      // validate: [validator.isAlpha, "Content name must only contain characters"] <--- does not work practically for general naming field
    },
    imageCover: String,
    images: [String],
    description: String,
    extraField: [String],
    exampleField: {
      type: String,
      enum: {
        values: ["option1", "option2", "option3"],
        message: "This example field allows for only a specified options",
        default: "option1",
      },
    },
    price: {
      type: Number,
      default: 0.0,
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above or equal 1"],
      max: [5, "Rating must be below or equal to 5"],
    },
    ratingQuantity: { type: Number, default: 0 },
    quantity: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation 
          return val < this.price;
        },
        message: "Discount price ({VALUE}) should be below regular price",
      },
    },

    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Virtual properties should be utilized to seperate 'buisness logic'->(ContentModel.js) AWAY from 'application logic'->(contentController.js)
//The field name of the result or value of this virtual field (in this case)->'divideByTwo' can not be used by the database because it is not stored in DB
//But the value can be used in specific use cases (ex: displaying the results to UI for data anaylsis purposes)
ContentSchema.virtual("divideByTwo").get(function () {
  return this.quantity / 2;
});

// [[MongoDB]] DOCUMENT MIDDLEWARE: runs before .save() and .create()
// ContentSchema.pre('save', function(next){
//   console.log('changes can be made here to the object/document OR things can happen here thru a chain of .pre and .post middleware REFERENCE MongoDB Documentation ');
//   console.log(this);
//   next()
// })

// ContentSchema.pre('save', function(next){
//   console.log('Will save document...');
//   next()
// })

// ContentSchema.post('save', function(doc,next){
//   console.log(doc);
//   console.log('this executes after the pre MIDDLEWARE');
//   next()
// })

// [[MongoDB]] QUERY MIDDLEWARE:
// ContentSchema.pre(/^find/,function(next){
//   console.log(this);
//   next()
// })

// [[MongoDB]] AGGREGATION MIDDLEWARE:
// ContentSchema.pre('aggregate', function(next){
//   // can chain match operators here Ex: (below)
//   // this.pipeline().unshift({ $match: {}})
//   console.log(this.pipeline());
//   next()
// })

export default mongoose.model("Content", ContentSchema);
