//const postDB = require("../model/post.json");
const commentModel=require("../model/commentModel");
async function createComment(req, res) {
    try {
        let nComment = await commentModel.create(req.body);
        // db Save
        // console.log(user);
        // if a new entry is created on server
        // memory -> ram
        //    res status code server send 
        res.status(201).json({
            success: "successfull",
            comment: nComment
        })
    } catch (err) {
        res.status(500).json({
            success: "failure",
            "message": err.message
        })
    }
}

async function getComment(req, res) {
    try {
        let { comment_id } = req.params;
        let comment;
        //   db get using id 
        comment = await commentModel.get(comment_id);
        if (comment == undefined) {
            return res.status(404).json({
                status: "failure",
                message: "comment not found"
            })
        }
        res.status(200).json({
            status: "success",
            comment: comment
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
            status: "failure",
        })
    }
}

async function updateComment(req, res) {
    let { comment_id } = req.params;
    let updateObj = req.body;
    // sql => update 
    // getById=> user
    // send to res
    // update 
    try {
         await commentModel.updateById(comment_id, updateObj);
        const uComment = await commentModel.get(comment_id);
        res.status(200).json({
            status: "success",
            "message": uComment
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            err: err.message
        })
    }


}
async function deleteComment(req, res) {
    let { comment_id } = req.params;
    try {
        const dComment = await commentModel.get(comment_id);
        await commentModel.deletecomment(comment_id);
        res.status(200).json({
            status: "success",
            "message": dComment
            
        })
    } catch (err) {
        res.status(500).json({
            status: "failure",
            err: err.message
        })
    }
}

async function getAllComment(req, res) {
    try {
        let comment;
        //   db get using id 
        comment = await commentModel.getall();
        if (comment.length == 0) {
            return res.status(404).json({
                status: "failure",
                message: "comment not found"
            })
        }
        res.status(200).json({
            status: "success",
            comment: comment
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
            status: "failure",
        })
    }

}

module.exports.createcomment = createComment;
module.exports.updatecomment = updateComment;
module.exports.deletecomment = deleteComment;
module.exports.getcomment = getComment;
module.exports.getallcomment=getAllComment;