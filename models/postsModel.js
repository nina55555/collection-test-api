const mongoose = require('mongoose');


const PostsModel = mongoose.model(
    //"node-video-api",
    //"users-db-test",
    "collection-test-api",
    {
      title: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: false
      },
      date: {
          type: Date,
          default: Date.now
      }
    },
    //"runways"
    //"users"
    "collection-test"
);

module.exports = { PostsModel };