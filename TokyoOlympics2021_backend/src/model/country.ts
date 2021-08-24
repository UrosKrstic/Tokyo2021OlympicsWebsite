import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Country = new Schema({
    name: {
        type: String
    },
    flagImgSrc: {
        type: String
    },
    numberOfAthletes: {
        type: Number
    }
});

export default mongoose.model('Countries', Country, 'Countries');
