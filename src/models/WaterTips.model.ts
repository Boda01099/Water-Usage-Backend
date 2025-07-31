import mongoose from "mongoose";

const WaterTipSchema = new mongoose.Schema({
    Tip: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        enum: ['ar', 'en'],
        default: 'ar'
    }
}, { timestamps: true });

export default mongoose.model("WaterTip", WaterTipSchema);
