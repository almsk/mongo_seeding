console.log('MongoDB - Backed');
const Post = require('./Post');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect( process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


(async () => {
    
        if (!process.argv.includes("--delete")) {
        const foundPost = await Post.find();
        console.log(FoundPost)   
        if (foundPost === 0) {
            postDdata = [{
                title: "Post 4",
                author: "abba",
                body: "lorem444 ipsum dolor set amet"
            },
            {
                title: "Post 5",
                author: "abba",
                body: "lorem 555"
            }
        ];
        }
        const createdPosts = await Post.insertMany(postData)
        console.log("1", createdPosts)

        process.exit();
    } else { 
        const res = await Post.deleteMany();
    }
    process.exit()
})()
