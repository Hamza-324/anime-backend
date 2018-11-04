const mongoose = require('mongoose');

const { Schema } = mongoose;

const AnimeSchema = new Schema({
    name: String,
    creator: String,
    description: String,
    studio: String,
    genre: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        enum: ['finished', 'ongoing'],
        default: 'ongoing'
    },
    animePosterUrl: String,
    trailerUrl: String,
    popularityRank: {
        type: Number,
        default: 0
    },
    totalViews: {
        type: Number,
        default: 0
    },
    synonyms: [],
    type: String
});


mongoose.model('Anime', AnimeSchema);