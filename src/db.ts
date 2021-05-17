import mongoose from 'mongoose';

const connectionString =
  'mongodb+srv://admin:wensen2002@cluster0.gtkdr.mongodb.net/todolist';

let isConnected: number;

const connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }
  console.log('=> using new database connection');

  if (connectionString) {
    return mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((db) => {
        isConnected = db.connections[0].readyState;
        console.log('Connection Success!');
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    console.log('MongoDB url not set in environment variable');
  }
};

export default connectToDatabase;
