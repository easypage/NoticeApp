// index.js
const express = require("express"); // express 임포트
const app = express(); // app생성
const port = 5000;

app.get("/", function (req, res) {
  const user = new User({
    name: "kim",
    age: 12,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  res.send("hello world!!");
});

app.listen(port, () => console.log(`${port}포트입니다.`));

// 몽구스 연결
const mongoose = require("mongoose");
const User = require("./Entity/userModel");
mongoose
  .connect(
    "mongodb+srv://minib:root@cluster0.y8vrqhs.mongodb.net/?retryWrites=true&w=majority",
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });
