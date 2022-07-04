const Post = require('../models/Post');

exports.createNewUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    let post = new Post(email, password);
    post = await post.save();
    console.log(post);
    res.status(200).json({ message: 'User created.' });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getUserByEmail = async (req, res, next) => {
  try {
    let email = req.params.id;
    let post = await Post.findByEmail(email);
    res.status(200).json({ post });
  } catch (error) {
    console.log(error);
    next();
  }
};
