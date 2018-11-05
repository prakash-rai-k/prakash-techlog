/*
* Service class for Post
* params: mongoDb connection url
* v1.0
*  2018-11-1
@C 2018, Prakash Rai
*/
const HttpClient = require('http');
const mongoose = require('mongoose');
const PostSchema = require('../schema/post.schema');
const config = require('../config/app.config');

module.exports = function(mongoose, PostSchema) {
    class PostService {
        /*
        * Connect to mongoose if its disconnected
        */
        connectMongoose(){
            if(mongoose.connection.readyState === 0){
                mongoose.connect(config.connections.mongoDb, { useNewUrlParser: true });
            }
        }

        /*
        * Connect to mongoose if its disconnected
        */
       disConnectMongoose(){
            if(mongoose.connection.readyState === 3){
                mongoose.disconnect();
            }
        }
        
        /*
        * Get list of posts
        * returns promise
        */
        readPosts() {
            return PostSchema.find();
        }

        /*
        * Get post by id
        * returns promise
        */
        readPostById(_id) {
            return PostSchema.find({"_id": _id});
        }

        /*
        * Adds post to collection
        * returns promise
        */
        createPost(post) {
            const newPost = new PostSchema(post);
            newPost.createdDateTime = new Date();
            newPost.modifiedDateTime = new Date();
            return newPost.save();
        }

        /*
        * Updates the post 
        * returns promise
        */
        updatePost(_id, post) {
            post.modefiedDateTime = new Date();
            return PostSchema.findOneAndUpdate(_id, post);;
        }

        /*
        * Deletes the post 
        * returns promise
        */
        deletePost(_id) {
            return PostSchema.findByIdAndRemove(_id);
        }
    };

    return new PostService();
};