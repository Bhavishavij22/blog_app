//Auth-user,id
//blog-title,description,foreign key-user_id
//comment-comment,foreign key-user_id,blog_id

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authRouter } = require("./src/auth/router");
const { blogRouter } = require("./src/blog/router");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//DB Connection
mongoose.connect("mongodb+srv://bhavisha:bhavisha123@cluster0.xpjqtow.mongodb.net/blog_16?retryWrites=true&w=majority");
mongoose.connection.on("connected", () => {
  console.log("DB Connected");
});

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.get("",(req,res)=>{
  return res.sendFile(__dirname+"/imdex.html");
})

app.listen(4000, () => {
  console.log("server started on 4000");
});
