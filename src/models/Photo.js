const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    spieces: {
        type: String,
        required: [true, 'Spieces is required'],
    },
    skinColour: {
        type: String,
        required: [true, 'skinColour is required'],
    },
    eyeColour: {
        type: String,
        required: [true, 'eyeColour is required'],
    },

    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    votes: {
        type: Array,

    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;