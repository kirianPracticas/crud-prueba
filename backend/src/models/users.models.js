import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    rol: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Users", userSchema);