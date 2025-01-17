import 'dotenv/config'
import express from "express";
import router from "./Routes/route.js";
import cors from 'cors'
import connectDB from "./connection.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT

app.use(cors({
    origin: 'http://localhost:5173',  
    credentials: true,                
}));
app.use(router)
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));


connectDB();

app.listen(PORT, () => {
    console.log(`Server has Started at PORT ${PORT}`);
})