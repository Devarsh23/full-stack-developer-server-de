import mongoose from 'mongoose';
import tuitsSchema from './tuitSchema.js'
const tuitsModel = mongoose
    .model('TuitModel', tuitsSchema);
export default tuitsModel;