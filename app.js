import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./src/routes/productRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
import favoriteRoutes from "./src/routes/wishlistRoutes.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load("./src/swagger.yaml");



const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
