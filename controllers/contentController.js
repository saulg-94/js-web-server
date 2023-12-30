import { StatusCodes } from "http-status-codes";
import ContentModel from "../models/ContentModel.js";

// GET ALL CONTENT
export const getAllContent = async (req, res) => {
  try {
    const allContent = await ContentModel.find();
    res.status(StatusCodes.OK).json({ status: "success", data: allContent });
  } catch (error) {
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
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ status: "fail", msg: err });
  }
};

// UPDATE A SINGLE OBJECT FROM THE CONTENT DB COLLECTION
export const updateContent = async (req, res) => {
  res.json({ msg: "content/update-content api router controller endpoint" });
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
