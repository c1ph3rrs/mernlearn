const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://hackblackcity:h9RHrIYU0q1p5VNT@ibcluster.w830l.mongodb.net/`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }


module.exports = connectDB