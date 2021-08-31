import mongoose from "mongoose";

const Schema = mongoose.Schema;

// levels:
// 3 - top 16
// 2 - top 8
// 1 - top 4
// 0 - finals & third-place matches (medal deciding and results persisting)

let Bracket = new Schema({
    sport: String,
    discipline: String,
    type: String,
    current_lvl: Number,
    total_level: Number,
    bracket: [Number]
});

export default mongoose.model('Brackets', Bracket, 'Brackets');
