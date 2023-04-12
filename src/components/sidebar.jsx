import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GroupsIcon from '@mui/icons-material/Groups';
import PagesIcon from '@mui/icons-material/Pages';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import {useSelector} from "react-redux"
const SideBar=()=>{
    // const log=""
    const name=useSelector((state)=>state.user.userInfo.name)
    return (
        <Box  flexGrow={1.5}>
         
            <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Lists" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PagesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PhotoSizeSelectActualIcon />
              </ListItemIcon>
              <ListItemText primary="Photos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VideoLabelIcon />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="Shedule" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                < LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout ("+name+")"} />
            </ListItemButton>
          </ListItem>
        </List>
        
        
        </Box>
    )
}
export default SideBar;