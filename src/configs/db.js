const mongoose = require("mongoose");
require("dotenv").config();


// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.
//       MONGO_PATH, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// module.exports = connect;



const connect = async () => {
  try {
    await mongoose.connect(process.env.
      MONGO_PATH);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connect;










