import React from "react"

import {Avatar, Divider, styled} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useSelector} from "react-redux"
const StyledToolbar=styled("Toolbar")({
justifyContent:"space-between",
display:"flex",
padding:"2px",
color:"grey",
alignItems:"center"
})
const UserBox=styled("Box")({
    display:"flex",
    gap:"4px",
    alignItems:"center",
    marginRight:"11px"
})
const Search=styled("div")((theme)=>({
   width:"30%",
   height:"30px",
   display:"flex",
   alignItems:"center",
   border:"2px solid red",
   borderRadius:"16px",
   margin:"4px",
  
    backgroundColor:"white"
}))
const ContentBox=styled("Box")({
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    width:"20%",
    fontFamily:"sans-serif",
    fontWeight:"6",
    color:"grey"
})

const NavBar=()=>{
  const name=useSelector((state)=>state.user.userInfo.name);
    return (
    
    <AppBar  sx={{backgroundColor:"white",padding:"0"}} position="static">
      <StyledToolbar>
        <Typography margin={1} variant="h4">chaturvedi</Typography>
         <ContentBox>
            <Typography variant="h6">Home</Typography>
            <Typography  variant="h6">About</Typography>
            <Typography  variant="h6">Contact</Typography>
         </ContentBox>
         <Search><InputBase sx={{marginLeft:"20px"}} placeholder="search for something..."/></Search>
         <UserBox>
         <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQFVYKMXEXXCNA/profile-displayphoto-shrink_200_200/0/1631183895806?e=1676505600&v=beta&t=2W-GMq-rxxKijEdixRljyOKR60SjhDC-K-mfu-T1UbM" />
        <Typography variant="h6">{name}</Typography>
        <ArrowDropDownIcon/>
         </UserBox>
        
      </StyledToolbar>
    </AppBar>
    
    
  )
}
export default NavBar