// models/User.js
import mongoose from "@/lib/db";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address."],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
