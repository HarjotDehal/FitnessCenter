

import React from 'react'

import{Link} from 'react-router-dom'
import{Stack} from '@mui/material'
import Logo from '../assets/images/Logo.png'
import Logs from '../assets/images/giphyy.gif'

const Navbar = () => {
  return (
<Stack direction="row" justifyContent='space-around' 
sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',sx:'20px'},justifyContent:'none'}}px="20px">


<Link to="/">

<img className='realLogo' src={Logs} alt ="logo" style={{width: '68px',height:'48px', margin:'0 20px'}}/>


</Link>

<Stack
direction="row"
gap="40px"
fontSize="24px"
alignItems='flex-end'
>
{/* This is putting a bottom border under navbar.  */}
<Link to="/"  style={{textDecoration:'none', color:'blue', borderBottom:'3px solid #FF2625'}} >Home</Link>


{/* <a to= "/" href="#exercises" style={{textDecoration:'none',color:'blue'}}  >Exercises</a> */}


<Link 
to= "/#exercises"  style={{textDecoration:'none',color:'blue'}}  

onClick={() => {

  window.scrollTo({top:1800,left:100, behavior:'smooth'});
}}
>Exercises
</Link>
</Stack>


</Stack>



    )
}

export default Navbar