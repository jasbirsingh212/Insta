//const postDB = require("../model/post.json");
const postModel=require("../model/postModel");
async function createPost(req, res) {
    try {
        let nPost = await postModel.create(req.body);
        // db Save
        // console.log(user);
        // if a new entry is created on server
        // memory -> ram
        //    res status code server send 
        res.status(201).json({
            success: "successfull",
            post: nPost
        })
    } catch (err) {
        res.status(500).json({
            success: "failure",
            "message": err.message
        })
    }
}

async function getPost(req, res) {
    try {
        let { post_id } = req.params;
        let post;
        //   db get using id 
        post = await postModel.get(post_id);
        if (post == undefined) {
            return res.status(404).json({
                status: "failure",
                message: "post not found"
            })
        }
        res.status(200).json({
            status: "success",
            post: post
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
            status: "failure",
        })
    }
}

async function updatePost(req, res) {
    let { post_id } = req.params;
    let updateObj = req.body;
    // sql => update 
    // getById=> user
    // send to res
    // update 
    try {
         await postModel.updateById(post_id, updateObj);
        const uPost = await postModel.get(post_id);
        res.status(200).json({
            status: "success",
            "message": uPost
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            err: err.message
        })
    }


}
async function deletePost(req, res) {
    let { post_id } = req.params;
    try {
        const dPost = await postModel.get(post_id);
        await postModel.deletepost(post_id);
        res.status(200).json({
            status: "success",
            "message": dPost
            
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            err: err.message
        })
    }
}

async function getAllPost(req, res) {
    try {
        let post;
        //   db get using id 
        post = await postModel.getall();
        if (post.length == 0) {
            return res.status(404).json({
                status: "failure",
                message: "post not found"
            })
        }
        res.status(200).json({
            status: "success",
            post: post
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
            status: "failure",
        })
    }

}

module.exports.createPost = createPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;
module.exports.getPost = getPost;
module.exports.getallpost=getAllPost;