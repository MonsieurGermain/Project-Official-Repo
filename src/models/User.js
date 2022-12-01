import mongoose, { Schema } from "mongoose";
import { USER_AUTHORIZATION } from "../constants/USER_AUTHORIZATION";

const UserSchema = new Schema({
  image   : String,
  username: {
    type     : String,
    required : true,
    maxlength: 50,
    minlength: 3,
    unique   : true
  },
  password: {
    type    : String,
    required: true
  },
  authorization: {
    type    : String,
    required: true,
    default : USER_AUTHORIZATION.BUYER,
    enum    : Object.values(USER_AUTHORIZATION)
    // always use enum if you have a fixed set of values
  },
  awaitingPromotion: {
    type   : Boolean,
    default: false
  },
  job          : String,
  description  : String,
  achievements : [String],
  languages    : [String],
  savedProducts: [
    {
      type    : Schema.Types.ObjectId,
      ref     : "Product",
      required: true
    }
  ],
  moneroAddresses: {
    vendor: String,
    buyer : String // refunding address
  },
  refreshAt: Date
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
