import mongoose from "mongoose";
import cors from "cors";
import express from "express";

const app = express();

//Middleware
const corsOptions = {
  //origin: ENV.CLIENT_URL, //client URL local
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
app.use(express.json());

//Database connection
const connectString =
  "mongodb+srv://user1:userpw@cluster0.4g0eqmc.mongodb.net/dpostITDb?appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(connectString)
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(3001, () => {
  console.log("You are connected");
});
