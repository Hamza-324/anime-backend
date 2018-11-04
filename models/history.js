const mongoose = require('mongoose');


const { Schema } = mongoose;
let ObjectId = Schema.ObjectId;
const HistorySchema = new Schema({
    animeId: ObjectId,
    episodeId: ObjectId,
    userId: ObjectId,
    episodeLinkUsed: String,
    timestamp: Date

});


mongoose.model('History', HistorySchema);