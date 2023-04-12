import { Avatar, Box, Button, Typography,styled, InputBase } from "@mui/material"
import { useState } from "react"

import {useSelector,useDispatch} from "react-redux"
import { updateUser } from "../redux/apiCalls"
import { update,remove,addHello } from "../redux/userSlice"
const UserBox=styled("Box")({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    margin:"4px"
})
const Search=styled("div")({
    backgroundColor:"white",
    border:"2px solid red",
    height:"20px",
    width:"30%",
    alignItems:"center",
    display:"flex",
    padding:"3px",
    marginBottom:"10px",
    marginTop:"2px"
})
const Update=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const user=useSelector((state)=>state.user.userInfo)
    // console.log("rendering update");
    const dispatch=useDispatch();
    const handleUpdate=(e)=>{
        updateUser({name,email},dispatch);
    }
    const handleDelete=(e)=>{
        console.log("clicked");
        // dispatch(remove())
    }

   
    return (
        <Box  flexGrow={2}>
            <Typography marginTop="10px" variant="h6">Update Your Account</Typography>
            <Box margin="15px 0px">
            <Box padding="4px" backgroundColor="#f5d9a9" borderRadius={2} marginBottom="20px" >
                Deleting  account cannot be undone {user.name}! You should confirm your password to delete your <div className=""></div>
            </Box>
            <Button onClick={handleDelete} variant="contained" disableElevation>
            
          Delete Account
          </Button>
          </Box>
          <Box >
            <Typography variant="span">Profile Picture</Typography>
            <UserBox>
            <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4E03AQFVYKMXEXXCNA/profile-displayphoto-shrink_200_200/0/1631183895806?e=1676505600&v=beta&t=2W-GMq-rxxKijEdixRljyOKR60SjhDC-K-mfu-T1UbM" />
            <Button variant="text">Change</Button>
            </UserBox>
            <Typography variant="span">Username</Typography>
            <Search><InputBase onChange={e=>{setName(e.target.value)}} placeholder={user.name}/></Search>
            <Typography variant="span">Email</Typography>
            <Search><InputBase onChange={e=>{setEmail(e.target.value)}} placeholder={user.email}/></Search>
            <Typography variant="span">Password</Typography>
            <Search><InputBase placeholder="password"/></Search>
            <Button onClick={handleUpdate} sx={{ marginTop:"10px"}} variant="contained" disableElevation>
            Update
            </Button>
          </Box>
            </Box>
    )
}
export default Update