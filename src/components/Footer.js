import React from 'react'

import{Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/icons/body.gif'


const Footer = () => {
  return (
 
    <Box mt="60px" bgcolor="rgba(29, 78, 100, 0.897)" color='white'>
      <Stack gap="20px" alignItems='center' px="40px" pt="24px">

        {/* <img src={Logo} alt="logo" width="200px" height="20px"/> */}
       <Typography variant='h4' >   Fitness Center</Typography>
       {/* <img src={Logo} alt="logo" width="200px" height="200px"/> */}
        <Typography variant='h5' pb='10px' mt='10px'>

          HARJOT DEHAL 


          {/* <a href="https://www.linkedin.com/in/harjot-dehal/"target="_blank" rel="noopener noreferrer"></a>
<a href="https://www.instagram.com/harjot_dehal/" target="_blank" rel="noopener noreferrer"> </a> */}
        </Typography>
      </Stack>


    </Box>
  )
}

export default Footer