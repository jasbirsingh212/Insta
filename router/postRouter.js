const express= require("express");
const postRouter = new express.Router();
// // POST Routes
 const {createPost ,getPost,updatePost,deletePost,getallpost} = require("../controller/postController");
 postRouter.route("/").post(createPost).get(getallpost);
// // read  => GET ONE 
postRouter.route("/:post_id").get(getPost).patch(updatePost).delete(deletePost);
 module.exports = postRouter;