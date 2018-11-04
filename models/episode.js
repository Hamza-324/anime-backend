const mongoose = require('mongoose');


const { Schema } = mongoose;
let ObjectId = Schema.ObjectId;
const EpisodeSchema = new Schema({
    animeId: ObjectId,
    episodeNumber: Number,
    episodeName: String,
    episodeLinks: {
        type: Array,
        default: []
    },
    uploadDate: Date,
    releaseDate: Date,
    popularityRank: {
        type: Number,
        default: 0
    },
    numberOfTimesViewed: {
        type: Number,
        default: 0
    },
    seasonOfAnime: {
        type: Number,
        default: 1
    },
    thumbnailPicUrl: String

});


mongoose.model('Episode', EpisodeSchema);