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
    }]
});

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    country: {
        type: String
    },
    type: {
        type: String
    }
});

let Competition = new Schema({
    name: String,
    format: String,
    type: String,
    sport: String,
    discipline: String,
    venue: String,
    athletes: [Athlete],
    delegate: [User],
    startdatetime: Date,
    finished: Boolean,
    isScheduled: Boolean
});

export default mongoose.model('Competitions', Competition, 'Competitions');
