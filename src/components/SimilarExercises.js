import React from 'react'



import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({targetMuscleExercises,equipmentExercises,name,equip}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}} >
<Typography variant="h3" mb={7} sx={{fontWeight:'bold'}}>Exercises that also target <span color='red'> {name} </span></Typography>
{/* this stack controls list of exercises */}
<Stack direction="row"  mb={5} sx={{p:'2',position:'relative'}}
>
{targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> 

:<Loader/> }
</Stack>

<Typography variant="h3" mb={7} sx={{fontWeight:'bold'}}>Exercises that also use <span color='red'> {equip} </span> as source of equipment</Typography>
{/* this stack controls list of exercises */}
<Stack direction="row" sx={{p:'2',position:'relative'}}>
{equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> :<Loader/> }
</Stack>

    </Box>




  )
}

export default SimilarExercises