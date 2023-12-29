import mongoose from 'mongoose';



const ContentSchema = new mongoose.Schema({
    productName: String,
    image: String,
    description: String,
    price: {
      type: Number,
      default: 0.00,
    },
    quantity: {
      type: String,
      default: 'my city',
    },
    
    
  });
  
  ContentSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
  };
  
  export default mongoose.model('Content', ContentSchema);