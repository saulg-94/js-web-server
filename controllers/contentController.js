import { StatusCodes } from "http-status-codes";
import ContentModel from "../models/ContentModel.js";
import APIFeatures from "../utils/apiFeatures.js";
// TOP RATING ; SORTED BY PRICE
export const aliasTopContent = async (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "itemName,description,price,ratingsAverage,quantity";

  next();
};


// GET ALL CONTENT
export const getAllContent = async (req, res) => {
  try {
 
    const features = new APIFeatures(ContentModel.find(), req.query).filter().sort().limitFields().paginate();

    const contents = await features.query;

    // SEND RESPONSE
    res.status(StatusCodes.OK).json({ status: "success", data: contents });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};

// GET A SINGLE OBJECT FROM THE CONTENT DB COLLECTION
export const getSingleContent = async (req, res) => {
  try {
    const id = req.params.id;
    const singleContent = await ContentModel.findById(id);
    console.log(singleContent);
    res.json({
      status: "success",
      msg: "content/get-single-content api router controller endpoint",
      data: { singleContent },
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};

// UPDATE A SINGLE OBJECT FROM THE CONTENT DB COLLECTION
export const updateContent = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const content = await ContentModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.status(StatusCodes.OK).json({
      msg: "content/update-content api router controller endpoint",
      data: { content },
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};

// CREATE A NEW OBJECT PERSISTING IN CONTENT DB COLLECTION
export const createContent = async (req, res) => {
  try {
    const newContent = await ContentModel.create(req.body);

    res
      .status(StatusCodes.CREATED)
      .json({ status: "success", data: newContent });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};

// DELETE A SINGLE OBJECT IN DB COLLECTION
export const deleteContent = async (req, res) => {
  try {
    await ContentModel.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data: null });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};


// Aggregation pipeline: Matching & Grouping
export const getContentStats = async(req,res)=>{

  try {

    const stats = await ContentModel.aggregate([
      {
        $match: { ratingsAverage: {$gte: 4.5}}
      },
      {
        $group:{
          _id: '$ratingsAverage',
          numContent: {$sum: 1},
          numRatings:{$sum:'$ratingQuantity'},
          avgRating: {$avg: '$ratingsAverage'},
          avgPrice:{$avg:'$price'},
          minPrice:{$min:'$price'},
          maxPrice:{$max:'$price'}
        },
      },
      {
        $sort:{
          avgPrice: 1,
        }
      },
      // {
      //   $match:{_id:{$ne:4.5}}
      // }
    ])

    res.status(StatusCodes.OK).json({ status: "success", data: stats });
    
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });

  }


}