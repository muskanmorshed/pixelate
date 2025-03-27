// export default LikedPosts;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { Box, Grid, Typography, Paper } from "@mui/material";

const LikedPosts = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const userId = localStorage.getItem("userId"); // Get logged-in user ID

  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/post/liked/${userId}`);
        setLikedPosts(res.data.posts || []);
      } catch (err) {
        console.error("Error fetching liked posts:", err);
        setLikedPosts([]);
      }
    };

    fetchLikedPosts();
  }, [userId]);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Title */}
      <Typography 
        variant="h3" 
        sx={{
          textAlign: "center", 
          mb: 3, 
          color: "#FF8FAB", 
          // color: "#EDCFD3",
          fontWeight: "bold",
          fontFamily: "'Poppins'",
          // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds a slight black shadow
          // backgroundColor: "rgba(237, 207, 211, 0.6)", // Translucent version of #EDCFD3
          // backgroundColor: "rgba(178, 168, 144, 0.85)", // Brighter translucent shade
          // backgroundColor: "rgba(126, 137, 94, 0.85)", // Brighter translucent #7E895E
          backgroundColor: "rgba(255, 215, 221, 0.85)", // Translucent #FFD7DD
          padding: "5px 10px", // Adds spacing around the text
          borderRadius: "5px", // Softens edges
        }}
      >
        My Liked Posts
      </Typography>

      {/* Post Grid */}
      <Grid container spacing={5} justifyContent="center">
        {likedPosts.length > 0 ? (
          likedPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Post 
                id={post._id}
                isUser={userId === post.user._id} 
                title={post.title} 
                description={post.description} 
                imageURL={post.image} 
                userName={post.user.name}
                initialIsFavorite={true} // It's in liked posts, so always true
                initialLikes={post.likes} 
              />
            </Grid>
          ))
        ) : (
          <Paper 
            elevation={5} 
            sx={{
              backgroundColor: "#FFE4E1",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "60%",
              margin: "50px auto",
              textAlign: "center",
              boxShadow: "5px 5px 15px rgba(255, 182, 193, 0.5)"
            }}
          >
            <Typography 
              variant="h5" 
              sx={{
                color: "#FF8FAB", 
                fontWeight: "bold", 
                fontSize: "24px", 
                fontFamily: "'Dancing Script', cursive"
              }}
            >
              🌸 You haven't liked anything yet. Heart some masterpieces! ✨
            </Typography>
          </Paper>
        )}
      </Grid>
    </Box>
  );
};

export default LikedPosts;
