import mongoose from 'mongoose';

const useSchema = new mongoose.Schema({});

export default mongoose.models.User || mongoose.model('User', useSchema);
