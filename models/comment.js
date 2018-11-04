const mongoose = require('mongoose');


const { Schema } = mongoose;
let ObjectId = Schema.ObjectId;
const CommentSchema = new Schema({
    episodeId: ObjectId,
    userId: ObjectId,
    comment: {
        type: String,
        required: true
    },
    timestamp: Date
});


mongoose.model('Comment', CommentSchema);