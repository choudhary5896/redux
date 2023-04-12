import NavBar from "./components/navbar";
import RightBar from "./components/rightbar";
import SideBar from "./components/sidebar";
import Update from "./components/update";
import Box from '@mui/material/Box';
import { Divider, Stack } from "@mui/material";
import { useState } from "react";

function App() {
  
  return (
    <Box className="App">
     <NavBar/ >
     <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
     <SideBar />
     <Update/>
     <RightBar/>
      </Stack>
   
    </Box>
  );
}

export default App;
