import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

export default mongoose.model("Wishlist", wishlistSchema);
