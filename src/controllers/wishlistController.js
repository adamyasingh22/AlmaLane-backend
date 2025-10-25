import Wishlist from "../models/Wishlist.js";

export const addToFavorites = async (req, res) => {
  try {
    const { productId } = req.body;
    const fav = new Wishlist({ productId });
    await fav.save();
    res.status(201).json({ message: "Product added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "Error adding to favorites" });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Wishlist.find().populate("productId");
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorites" });
  }
};
