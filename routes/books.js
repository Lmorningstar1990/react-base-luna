var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function  main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/local");
}

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
});
const Book = mongoose.model('Book', bookSchema);


router.get('/', function async (req, res, next) {
    res.send('Hi');
});
 module.exports = router;