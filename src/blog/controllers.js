const { Blog } = require("./models");

//creating and reading blogs

const createNewBlog = async (req, res) => {
  console.log(req.body);
  var newBlog=(await Blog.create(req.body)).populate("user_id");

  var allBlogs = await Blog.find().populate("user_id"); //object id
  return res.json({ status: "Created", allBlogs }); //newBlog
};

const editBlog = async(req , res) =>{
  var updatedBlog = await Blog.findOne({ title: req.body.title });
  updatedBlog.description = req.body.newDescription;
  await updatedBlog.save();

  return res.json({status:"Blog edited successfully" , updatedBlog})
};

module.exports = { createNewBlog , editBlog };
