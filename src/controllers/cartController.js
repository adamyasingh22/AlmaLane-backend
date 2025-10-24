import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cartItem = new Cart({ productId, quantity });
    await cartItem.save();
    res.status(201).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart" });
  }
};

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId");
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items" });
  }
};
