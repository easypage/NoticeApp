// index.js
const express = require("express"); // express 임포트
const axios = require("axios");

const app = express(); // app생성
const port = 5000;

// 몽구스 연결
const mongoose = require("mongoose");
const User = require("./Entity/userModel");
const { json } = require("express");

// 카카오 토큰
const ACCESS_TOKEN = "7yF2_3ficSzfHTjH9Wy8hAwxfwjIHRY6X-rEDGBnCisNHwAAAYGi9Mlv";

const users = [
  { title: 1, date: "2022-06-27" },
  { title: 2, date: "2022-06-28" },
  { title: 3, date: "2022-06-21" },
];

var dataString = `template_object={
  "object_type": "text",
  "text": "됬다!! 담배 피러간다.",
  "link": {
      "web_url": "https://developers.kakao.com",
      "mobile_web_url": "https://developers.kakao.com"
  },
  "button_title": "바로 확인"
}`;

app.listen(port, () => {
  console.log(`${port}포트입니다.`);
});

mongoose
  .connect(
    "mongodb+srv://minib:root@cluster0.y8vrqhs.mongodb.net/?retryWrites=true&w=majority",
    {
      // useNewUrlPaser: true
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", async function (req, res) {
  const user = new User({
    name: "kim",
    state: "awe",
    reason: "awe",
    private: true,
    title: "3",
    date: "2022-06-25",
  });
  await user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });

  try {
    await axios
      .post(
        "https://kapi.kakao.com/v2/api/talk/memo/default/send",
        dataString,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded charset=utf-8",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      )
      .catch((errer) => console.log(errer));
  } catch (error) {
    console.log(error);
    console.log("에러발생");
  }

  res.send("hello world!!");
});

app.get("/json", async function (req, res) {
  const Users = [];

  const datas = await User.find({});

  datas.map((el) => {
    Users.push({ title: el.title, date: el.date });
  });

  res.json({ ok: true, users });
});
