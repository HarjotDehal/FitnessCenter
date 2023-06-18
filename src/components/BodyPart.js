




import React from 'react'

// import { Box } from '@mui/material'

// import {Icon} from '@mui/material';
import{Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';
import jcon from '../assets/icons/set/back.gif'
import HeroBannerImage from '../assets/images/banner.png';

import pic1 from '../assets/icons/set/all.gif'
import pic2 from '../assets/icons/set/back.gif' 
import pic3 from '../assets/icons/set/cardio.gif'
import pic4 from '../assets/icons/set/chest.gif'
import pic5 from '../assets/icons/set/lower arms.gif'
import pic6 from '../assets/icons/set/lower legs.gif'
import pic7 from '../assets/icons/set/neck.gif'
import pic8 from '../assets/icons/set/shoulders.gif'
import pic9 from '../assets/icons/set/upper arms.gif'
import pic10 from '../assets/icons/set/upper legs.gif'
import pic11 from '../assets/icons/set/waist.gif'



const BodyPart = ({item,setBodyPart,bodyPart}) => {
 return(
    
   <Stack
   type="button"
   alignItems="center"
   justifyContent="center"
   className='bodyPart-card'
   sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', 
   borderBottomLeftRadius: '20px', width: '270px', height: 
   '282px', cursor: 'pointer', gap: '47px' } : 
   { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', 
   height: '282px', cursor: 'pointer', gap: '47px' }}
   
   onClick={() => {
      setBodyPart(item);
      window.scrollTo({top:1800,left:100, behavior:'smooth'});
   }}

   >
   


<img src= { item==='all' ? pic1 :
item ==='back' ? pic2 :
item ==='cardio' ? pic3:
item === 'chest' ? pic4:
item ==='lower arms' ? pic5:
item === 'lower legs' ? pic6:
item==='neck'?pic7:
item==='shoulders'? pic8:
item ==='upper arms'? pic9:
item === 'upper legs'? pic10 : pic11} alt="dumbbell" className='body-part-icon' style={{width:'130px',height:'130px'}}/>


<Typography fontSize="24px" fontWeight="bold" color="3A1212" textTransform="capitalize" >{item}</Typography>

   </Stack>
    



 )

};

export default BodyPart