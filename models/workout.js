const mangoose = require ("mangoose");
const Schema = mangoose.Schema;

//require mongoose and define mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter the type of the exercise'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter the name of the exercise'
            },
            duration: {
                type: Number,        
                required: 'Enter the duration of the exercise'
            },
            weight: {
                type: Number,
                default: 0        
            },
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0       
            },
            distance: {
                type: Number,
                default: 0       
            }
        }
    ]   
    
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;