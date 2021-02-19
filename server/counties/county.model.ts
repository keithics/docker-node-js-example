import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Database schema for Counties
 */
export const CountiesSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    state: {
        type: String,
        index: true
    },
    fips: String,
    created:{
        type: Date,
        default:Date.now()
    }
});


CountiesSchema.pre('save', (next) => {
    next();
});

export const County = mongoose.model('Counties', CountiesSchema);
