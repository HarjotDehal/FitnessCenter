
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import{Box} from '@mui/material';

import {exerciseOptions,fetchData, youtubeOptions} from '../utils/fetchData'
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Detail from '../components/Detail';



const ExerciseDetail = () => {

  const[exerciseDetail,setExerciseDetail] =useState({});

  const{id} = useParams();

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);

useEffect(() =>{

  window.scrollTo({top:0,left:100, behavior:'smooth'});


const fetchExercisesData= async() =>{

const exercisedbUrl= 'https://exercisedb.p.rapidapi.com'
const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

// make our api pulls
// fetch data accepts url and what we want. or our options. 
const exerciseDetailData=await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`,exerciseOptions);
setExerciseDetail(exerciseDetailData);

const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/
search?query=${exerciseDetailData.name}`, youtubeOptions);

setExerciseVideos(exerciseVideosData.contents)


const targetMuscleExercisesData = await fetchData(`${exercisedbUrl}
/exercises/target/${exerciseDetailData.target}`,exerciseOptions);

setTargetMuscleExercises (targetMuscleExercisesData);

const equipmentExercisesData = await fetchData(`${exercisedbUrl}
/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
setEquipmentExercises(equipmentExercisesData);
}

fetchExercisesData();


}, [id]);


  return (

<Box>
<Detail exerciseDetail={exerciseDetail}/>

{/* this sets our detail. which correlates with our selected exercise.  */}

<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>

<SimilarExercises targetMuscleExercises={targetMuscleExercises} 
equipmentExercises={equipmentExercises} name = {exerciseDetail.target }
equip ={exerciseDetail.equipment}/>

</Box>

     )
}

export default ExerciseDetail