const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const routes = require('./routes/UserAccountRoutes');
const cors = require('cors')
dotenv.config();
const app =express();
app.use(cors());
app.use(express.json())
app.use('/api/userAccount',routes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongo db connected successfully");
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
    
})
