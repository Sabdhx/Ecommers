const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./Routes/productRoute')
const userRouter = require('./Routes/authRoutes')
const cookieParser  = require('cookie-parser')
const bodyParser= require('body-parser')

app.use(cors({
    origin: "*",
    credential:true
}))
app.use(express.json())

app.use(cookieParser())

mongoose.connect("mongodb+srv://Abdullah:123@database.gslyozk.mongodb.net/?retryWrites=true&w=majority&appName=DataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected"))
.catch((error) => console.error("Database connection error:", error));

app.use('/product', productRouter)
app.use("/auth",userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})