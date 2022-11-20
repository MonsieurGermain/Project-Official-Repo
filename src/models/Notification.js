import mongoose, { Schema } from "mongoose";

const NotificationSchema = new Schema(
  {
    type: {
      type    : String,
      enum    : [],
      required: true
    },
    seen: {
      type   : Boolean,
      default: false
    },
    expiresAt: Date
  },
  {
    timestamps: true
  }
);

const NotificationModel = mongoose.model("Notification", NotificationSchema);

export { NotificationModel };
