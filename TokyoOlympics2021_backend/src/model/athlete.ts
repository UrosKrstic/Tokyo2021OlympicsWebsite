import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Athlete = new Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    country: {
        type: String
    },
    sport: {
        type: String
    },
    disciplines: [{
        type: String
    }],
    isMedalWinner: Boolean
});

export default mongoose.model('Athlete', Athlete, 'Athletes');
