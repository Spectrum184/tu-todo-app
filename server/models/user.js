import mongoose from 'mongoose';

const useSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'avatar.jpg',
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
      default: 'Male',
    },
    birthday: {
      type: Date,
      default: Date.now(),
    },
    story: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', useSchema);
