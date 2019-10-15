console.log('MongoDB - Backed');
const Post = require('./Post');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/posts', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const postsData = [{
        title: "Post 1",
        body: "lorem ipsum dolor set amet"
    },
    {
        title: "Post 2",
        body: "lorem 222"
    }
];
//iife Immediately invoked function expression  
(async () => {
    try {
        const createdPosts = await Post.insertMany(postsData)
        console.log("1", createdPosts)

    } catch (error) {
        console.error("2", error)
    }
})()