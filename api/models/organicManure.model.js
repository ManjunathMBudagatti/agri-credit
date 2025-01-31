import mongoose, { Schema, model } from "mongoose";
import UserModel from "../models/user.model.js";

const organicManure = Schema(
  {
    manure_type: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    manure_img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    manure_lat: {
      type: Number,
      required: true,
    },
    manure_long: {
      type: Number,
      required: true,
    },

    posted_by: {
      type: mongoose.Schema.Types.String,
      ref: UserModel,
    },
  },
  { timestamps: true }
);

export default model("Manure", organicManure);
