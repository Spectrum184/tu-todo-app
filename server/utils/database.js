import mongoose from 'mongoose';
import { config, errorMessage } from '~/lib';

if (!config.MONGODB_URI) {
  throw new Error(errorMessage.NO_DB_URI);
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(config.MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
