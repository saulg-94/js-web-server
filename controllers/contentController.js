import { StatusCodes } from "http-status-codes";
import ContentModel from "../models/ContentModel.js";

// GET ALL CONTENT
export const getAllContent = async (req, res) => {
  try {
    // BUILD QUERY
    // 1A) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ["page", "limit", "sort", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log(req.query, queryObj);
    console.log("success query log from getAllContent api endpoint");
    // 1B) Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr));

    let query = ContentModel.find(JSON.parse(queryStr));
    // 2) SORTING
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else{
        query = query.sort('-createdAt')
    }

    // 3) FIELD Limiting
    if(req.query.fields){
        const fields = req.query.fields.split(',').join(' ')
        query = query.select(fields)
    } else{
        query = query.select('-__v');  // this line excludes the string value is the field-name within mongoDB documents Model schemas'
    }
    // EXECUTE QUERY
    const contents = await query;

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
