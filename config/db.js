const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI')
  .replace('<PASSWORD>',            process.env.MONGO_PASSWORD)
  .replace('<USERNAME>', process.env.MONGO_USERNAME);

const connectDB = async () => {

  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongooseDB connected successfully...');

  } catch (err) {
    console.log(err.message);

    // exit process with failure
    process.exit(1);
  }
}


module.exports = connectDB;