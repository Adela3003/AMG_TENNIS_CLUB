import mongoose from "mongoose";

const coachSchema = new mongoose.Schema(
    {
        //id: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        age: { type: Number, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true
    }
);


const Coach = mongoose.model('Coach', coachSchema);
export default Coach;