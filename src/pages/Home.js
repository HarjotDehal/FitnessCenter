
import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'


const Home = () => {
 
 
const [exercises, setExercises] = useState([]); 
 const[bodyPart,setBodyPart] = useState('all');

//  this makes changes all across our website. 
  return (
// we need 3 components and a box to organize our home page. different subsections.    


    <Box>

{/* these are our 3 components  */}
<HeroBanner />
<SearchExercises setExercises={setExercises}
bodyPart={bodyPart}
setBodyPart={setBodyPart}/>  
<Exercises
 setExercises={setExercises}
 bodyPart={bodyPart}
 exercises={exercises}/>

    </Box>


  )
}

export default Home