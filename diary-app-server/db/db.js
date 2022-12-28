//db 접속
//mongoose

const mongoose = require("mongoose");
const db = mongoose
  .connect(`mongodb+srv://jihye:${process.env.MONGO_PASSWORD}@cluster0.5wymn3b.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "front-test",
  })
  .then(() => {
    console.log("db연결");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
