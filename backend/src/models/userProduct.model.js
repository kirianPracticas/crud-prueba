import { Schema, model, Types } from "mongoose";

// Define el enum para las opciones de status
const statusOptions = ["loan request", "borrowed", "returned"];

const userProductskSchema = new Schema(
  {
    
    user_id: {
      type: Types.ObjectId,
      ref: "Users",
      required: true,
    },
    product_id: {
      type: Types.ObjectId,
      ref: "Products",
      required: true,
    },
    status: {
      type: String,
      enum: statusOptions,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("UserProducts", userProductskSchema);
