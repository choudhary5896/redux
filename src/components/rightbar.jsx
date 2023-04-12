import { Box, ImageList, ImageListItem, styled, Typography } from "@mui/material"

const ReccomendationBox=styled("Box")({
    display:"flex",
})

const RightBar=()=>{
    return (
        <Box  flexGrow={1.5}>
            
            <Typography sx={{ marginTop:"10px"}}>Reccomendation for john</Typography>
            <Box width="250px">
            <ImageList sx={{ width: 350,marginRight:1,marginTop:"5px"}} cols={3} rowHeight={120}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
            </Box>
            <Typography sx={{ marginTop:"10px"}}>Popular on this app</Typography>
            <Box width="250px">
            <ImageList sx={{ width: 350,marginRight:1,marginTop:"5px"}} cols={3} rowHeight={120}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
            </Box>
            <Typography sx={{ marginTop:"10px"}}>Editor choice</Typography>
            <Box width="250px">
            <ImageList sx={{ width: 350,marginRight:1,marginTop:"5px"}} cols={1} rowHeight={120}>
   
        <ImageListItem >
          <img
           height="0px"
            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`}
            srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"idj"}
            loading="lazy"
          />
        </ImageListItem>
     
    </ImageList>
            </Box>
        </Box>
    )
}
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    
    
   
  ];
export default RightBar