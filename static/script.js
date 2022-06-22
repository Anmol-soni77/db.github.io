var outt = document.getElementById('output')
outt.innerHTML = "h3 yoooooo"

const fs = require("fs")
const { urlencoded } = require("express");
const express = require("express")
const app = express();
const path = require('path');

app.use(urlencoded())

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbform');

const dbSchema = new mongoose.Schema({
    name: String,
    age: String,
    enroll: String,
    institute: String,
    more: String,
  });

const response = mongoose.model('response', dbSchema);

async function yoo(){
    var ress = await response.find({name:"Anmol Soni"});
    console.log(ress);
}
yoo()
