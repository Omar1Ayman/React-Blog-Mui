import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 3,
};
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        bgcolor={"background.default"}
        color={"text.primary"}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            textAlign={"center"}
            color={"gray"}
          >
            Create Post
          </Typography>
          <Box sx={{ display: "felx", alignItems: "center", gap: 2, mb: 3 }}>
            <Avatar
              src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
              alt="prson"
            />
            <Typography
              color={"text.primary"}
              variant="p"
              fontWeight={"500"}
              id="modal-modal-description"
              sx={{ mt: 1 }}
            >
              Jone name
            </Typography>
          </Box>
          <TextField
            multiline
            rows={3}
            variant="standard"
            fullWidth
            placeholder={"Waht`s on your mind?"}
          />
          <Stack direction={"row"} justifyContent={"end"} mt={1.5} gap={1.5}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth sx={{ mt: 4 }} variant="contained">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
