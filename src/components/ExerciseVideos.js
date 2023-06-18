import React from 'react'

import{Box,Stack, Typography} from '@mui/material'


// we get the videos and name of exercise. 
const ExerciseVideos = ({exerciseVideos, name}) => {
 
 
 if(!exerciseVideos.length) return 'Loading...'
 
    return (
  
    

    <Box sx={{marginTop :{lg:'200px', xs:'20px'}}} p="20px">

<Typography variant="h4" mb="33px">

    Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}> {name}</span> exercise videos <span style={{color:'#ff2526'}}>(Click to view on Youtube)</span>
</Typography>

    <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
    sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'0'}}}>

{/* ? makes sure it exists, slice sets number of videos */}
{exerciseVideos?.slice(0,6).map((item,index) =>(

    <a
key={index}
className="exercise-video"
href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
target="_blank"
rel="noreferrer">

{/* check this.  */}
<img src={item.video.thumbnails[0].url} className='videoCover' alt ={item.video.title}/>
<Box>
    <Typography variant="h5" color='red' sx={{textDecoration:"underline"}}>{item.video.title}</Typography>
    <Typography variant="h6" color='#000'>{item.video.channelName}</Typography>

</Box>
    </a>
))}


    </Stack>

    </Box>
  )
}

export default ExerciseVideos