import { StatusCodes } from "http-status-codes";
import ContentModel from "../models/ContentModel.js";

// TOP RATING ; SORTED BY PRICE
export const aliasTopContent = async (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "itemName,description,price,ratingsAverage,quantity";

  next();
};

class APIFeatures {
  constructor(query, queryString) {
    this.query = query, this.queryString = queryString
  }

  filter() {
    // BUILD QUERY
    // 1A) Filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "limit", "sort", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    
    console.log("success query log from getAllContent api endpoint");
    // 1B) Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    
    
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
    
  }

  sort() {
    // 2) SORTING
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields(){

    // 3) FIELD Limiting
    if (this.queryString.fields) {
        const fields = this.queryString.fields.split(",").join(" ");
        this.query = this.query.select(fields);
      } else {
        this.query = this.query.select("-__v"); // this line excludes the string value is the field-name within mongoDB documents Model schemas'
      }


    return this;
  }

  paginate(){

    // 4) Pagination
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);


    return this;
  }
}

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

export const deleteContent = async (req, res) => {
  try {
    await ContentModel.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.NO_CONTENT).json({ status: "success", data: null });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};
