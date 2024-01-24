import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );
  const DarkTheme = createTheme({
    palette: { mode: mode },
  });
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
