const express=require("express");
const commentRouter=new express.Router();
const {createcomment ,getcomment,updatecomment,deletecomment,getallcomment} = require("../controller/commentController");
commentRouter.route("/").post(createcomment).get(getallcomment);
// // read  => GET ONE 
commentRouter.route("/:comment_id").get(getcomment).patch(updatecomment).delete(deletecomment);
module.exports = commentRouter;




