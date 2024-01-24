import { Box, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, [3000]);
  return (
    <Box p={2} flex={4}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={500} />
        </Stack>
      ) : (
        <>
          <Post
            src={
              "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
            }
            image={
              "https://images.pexels.com/photos/5945907/pexels-photo-5945907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <Post
            src={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            image={
              "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <Post
            src={
              "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            image={
              "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <Post
            src={
              "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            image={
              "https://images.pexels.com/photos/5945907/pexels-photo-5945907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <Post
            src={
              "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            image={
              "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </>
      )}
    </Box>
  );
};

export default Feed;
