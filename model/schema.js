const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema({
    moviename:String,
    year:Number,
    movietime:String,
    ratings:String,
    shortdescription:String,
    director:String,
    writer:String,
    stars:String,
    storyline:String,
    genres:String,
    media:[{
        imageurl:String,
        videourl:String
    }],
})

module.exports = mongoose.model('Uploads',UploadSchema)