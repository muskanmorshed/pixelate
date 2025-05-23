import express from "express";
import { addPost, deletePost, getAllPosts, getById, getByUserId, updatePost, toggleFavorite, getLikedPosts  // New controller function for toggling the favorite status
} from '../controllers/post-controller.js';
const postRouter = express.Router();

postRouter.get("/", getAllPosts)
postRouter.post("/add", addPost)
postRouter.put('/update/:id', updatePost)
postRouter.get("/:id", getById);
postRouter.delete('/:id',deletePost )
postRouter.get('/user/:id', getByUserId)

// New route to toggle favorite status for a post
postRouter.patch('/:id/favorite', toggleFavorite); // Use PATCH instead of POST
postRouter.get("/liked/:userId", getLikedPosts);


export default postRouter;