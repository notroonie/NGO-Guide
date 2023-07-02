const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Donation = require("./models/Donation")

mongoose.connect(
    "mongodb+srv://testuser:testuser@ngodb.zvaflz1.mongodb.net/?retryWrites=true&w=majority"

).then( () => {
    console.log('Database connected sucessfully');
})

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.set("view-engine","ejs")



app.get("/",(req,res)=>{
    res.render("index.ejs")

})

app.get("/funds",(req,res)=>{
    res.render("funds.ejs")
})

app.get("/ngo_guide",(req,res)=>{
    res.render("ngo_guide.ejs")
})






app.get("/tempform",async(req,res)=>{
    const allDonations = await Donation.find()
    res.render("tempform.ejs", {allDonations})
})

app.post("/tempform",async(req,res)=> {
    await Donation.create(req.body)
    res.redirect("/tempform")
})


app.listen(5004,() => {
    console.log('Backend server is running on port 5004');
})