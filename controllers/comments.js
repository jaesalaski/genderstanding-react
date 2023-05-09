const Comment = require("../models/Comment");

module.exports = {

  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        user: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },

  likeComment: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      const index = comment.likedBy.indexOf(req.user.id);
      if(index > -1){
        comment.likedBy.splice(index, 1);
        comment.likes--;
      } else {
        comment.likedBy.push(req.user.id);
        comment.likes++;
        }
      await comment.save();
      console.log("Comment Updated");
      res.redirect(`/feed`)
    } catch (err) {
      console.log(err);
      res.redirect("/feed");
      }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({ _id: req.params.id });
      console.log("Deleted Comment");
      res.redirect("/feed");
    } catch (err) {
      res.redirect("/feed");
      }
  }
}