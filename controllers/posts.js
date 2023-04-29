const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {

  createPost: async (req, res) => {
    try {
      const postData = {
        title: req.body.title,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      } 
      await Post.create(postData);
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
      }
  },

  likePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const index = post.likedBy.indexOf(req.user.id);
      if(index > -1){
        post.likedBy.splice(index, 1);
        post.likes--;
      } else {
        post.likedBy.push(req.user.id);
        post.likes++;
        }
        await post.save();   
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
      }
  },

  deletePost: async (req, res) => {
    try {
      let post = await Post.findById({ _id: req.params.id });
      await Post.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
      }
  },

  getProfile: async (req, res) => {
    try {
      const comments = await Comment.find({ comments: req.params.comment });
      const posts = await Post.find()
        .sort({ createdAt: "desc" })
        .lean();
      res.render("profile", { 
        posts: posts,
        user: req.user,
        comments: comments
      });
    } catch (err) {
      console.log(err);
      }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
      res.render("post", { 
        post: post, 
        user: req.user, 
        comments: comments 
      });
    } catch (err) {
      console.log(err);
      }
  }

}


