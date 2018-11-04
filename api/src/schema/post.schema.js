/*
* Schema for Post
* v1.0
*  2018-11-1
@C 2018, Prakash Rai
*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://prakashrai:abc!#@ds237713.mlab.com:37713/pr-techlog');

module.exports = function() {
    const postSchema = new postSchema({ 
        title: { type: String, unique : [true, 'The title already exists'], required : [true, 'Title is required']},
        author: { type: String,  required : [true, 'Author is required']},
        tags: String,
        post: { type: String,  required : [true, 'Post is required']},
        comments: JSON,
        createdDate: {type: Date, required: [true, 'CreatedDate is required']},
        modifiedDate: { type: Date,  required : [true, 'Modified is required']}
    });

    return mongoose.model('Post', postSchema);
}
