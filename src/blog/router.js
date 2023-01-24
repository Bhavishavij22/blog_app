const express = require("express");
const { isAuthenticated } = require("../helper/utils");
const { createNewBlog , editBlog } = require("./controllers");
const blogRouter = express.Router();

blogRouter.post("/blog", isAuthenticated,createNewBlog );
blogRouter.put("/update" , isAuthenticated , editBlog);

module.exports = { blogRouter };
