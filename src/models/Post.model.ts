import mongoose from "mongoose";
import { iCreatPost } from "../interfaces/posts/posts.types";
import mongoosePaginate from "mongoose-paginate-v2";
import { ICustomModel } from "../interfaces/global/paginate.types";

const postSchema = new mongoose.Schema<iCreatPost>(
  {
    description: { type: String, required: true, maxlength: 250 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      options: {
        onDelete: "CASCADE",
      },
      required: true,
    },
    midia: { type: String },
    comments: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
      },
    ],
  },
  { timestamps: true, autoCreate: false }
);

postSchema.plugin(mongoosePaginate);

export const Post = mongoose.model<iCreatPost, ICustomModel<iCreatPost>>(
  "Post",
  postSchema
);
