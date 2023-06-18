import React from 'react'

import {Box, Stack,Typography,Button} from '@mui/material';

// import {Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import looogo from '../assets/images/Fitness-Logo-Vector-Transparent-PNG.png'
const HeroBanner = () => {
  return (

<Box sx={{mt:{lg:'212px',xs:'70px'},
ml:{sm: '50px'}}} position="relative" p="10px">


<Typography className='jatt' fontWeight="600" fontSize="80px" color="brown" sx={{textDecoration:'underline 10px', marginTop:'-80px', marginLeft:'-0px'}}>

Fitness Center
</Typography>

<Typography fontWeight={700} color="gray"
sx = {{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px">
<p>
    Hard-Work, <br/>
     Discipline &
    Dedication
</p>
</Typography>

<Typography color='gray' fontSize="22px" lineHeight="35px" mb={4}>
  {/* to separate from button */}

   Begin your journey by starting today
   <br/> 
   Check out some of the most effective exercises below
</Typography>


<Button variant="contained" href="#exercises"
sx={{backgroundColor: 'brown', padding:'10px'}}> View Exercises</Button>
{/* style this button from mui.com.  */}


<Typography fontWeight={600} color='#ff2625'
sx={{opacity:0.1,
display :{lg:'block',xs:'none'}}} fontSize='200px'>

{/* this allows us to make it appear or not depending on device.  */}
Exercises

</Typography>
<img src={looogo} alt="banner" className="hero-banner-img"/>

</Box>



  )
}

export default HeroBanner