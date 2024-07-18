const mongoose = require('mongoose')
require('dotenv').config();

const uri ='mongodb+srv://alejandrovanegasc:hQLuQmPaXoMjpR4J@adso2669734.zv5gbtj.mongodb.net/nodepractica?retryWrites=true&w=majority&appName=ADSO2669734';
//'mongodb+srv://superAdso:uBy0r5CbOmr3i9ZY@clusteradsi.nzwbkjo.mongodb.net/'; 
mongoose.connect(uri);

module.exports= mongoose;