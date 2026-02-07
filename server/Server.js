const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const User = require("./models/User");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/exams", require("./routes/examRoutes"));


//  AUTO ADMIN CREATE
const createAdmin = async () => {
 try {

   const exists = await User.findOne({ email: "admin" });

   if (!exists) {
     const hash = await bcrypt.hash("admin123", 10);

     await User.create({
       name: "Admin",
       email: "admin",
       password: hash
     });

     console.log("✅ Admin Created");
   } else {
     console.log("✅ Admin Already Exists");
   }

 } catch (err) {
   console.log(err);
 }
};

setTimeout(createAdmin, 3000);


app.listen(process.env.PORT, () => {
 console.log("Server running on port", process.env.PORT);
});