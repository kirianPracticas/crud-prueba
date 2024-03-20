import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
    },


  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Products", productSchema);