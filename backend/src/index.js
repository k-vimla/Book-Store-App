import express from "express";
import "dotenv/config";


import authRoutes from "./routes/authRoutes.js";


const app  = express();
const PORT = process.env.PORT || 3000

app.use("/api/auth", authRoutes)



app.listen(PORT, () => {
    //console.log("index page");
    console.log(`Server is runnning on port ${PORT}`);
});
