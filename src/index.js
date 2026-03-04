import connectDB from './config/db.js';
import app from './app.js';


connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listeneing to port ${process.env.PORT}`);
  })
})
.catch((err) => {console.log(err)});


/*
import express from 'express';
const app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log("Errr: ", error);
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error:" + error);
    throw error;
  }
})();
*/
