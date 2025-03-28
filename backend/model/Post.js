import mongoose from "mongoose"
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    // isFavorite: { 
    //     type: Boolean, default: false 
    // },
    likes: {
        type: Number,
        default: 0, // Track number of likes
    },
    likedBy: [{ type: mongoose.Types.ObjectId, ref: "User"}] // Track users who liked the post

});

export default mongoose.model("Post", postSchema);
