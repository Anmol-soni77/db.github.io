const fs = require("fs")
const { urlencoded } = require("express");
const express = require("express")
const app = express();
const path = require('path');
const port =100;

app.use(express.urlencoded())

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbform');

const dbSchema = new mongoose.Schema({
    name: String,
    age: String,
    enroll: String,
    institute: String,
    interests: String,
    more: String,
  });

const response = mongoose.model('response', dbSchema);

app.use("/static", express.static('static'))

app.set('view engine','pug')
app.set('views', path.join(__dirname,"views"));


app.get('/',(req,res)=>{
    res.render('index.pug');
})
app.post('/',(req,res)=>{
    const fres = new response(req.body);
    var yupppp;
    var naaam;
    var total = "";
    async function yoo(){
        var ress = await response.find({interests: req.body.interests});
        ress.forEach(element => {
            var naam = element.name;
            naaam = naam;
            console.log(naam +" also likes to " + element.interests);
            yupppp = naam +" also likes to " + element.interests + "\n" ;
            total = total + yupppp;
        });
        await res.end(total);
    }
    yoo()
    fres.save().then(()=>{
        console.log("Your form has been sent successfully"); 
        // res.send("Your form has been sent successfully")
    }).catch(()=>{
        console.log("Error occored"); 
    })
})
// async function dell(){
//     await response.deleteMany();
// }
// dell();
app.listen(port,()=>{
    console.log(`your site is listerning at http://127.0.0.1:${port}`)})