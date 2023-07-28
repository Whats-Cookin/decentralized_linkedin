import React, { useState } from 'react';
import IProfileProps from './types';
import { SidebarContainer, LogoContainer, Logo } from './styles';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import { AccountCircle, Edit, Add } from '@mui/icons-material';
import Link from '@mui/material/Link';


const Profile = ({toggleSnackbar,setSnackbarMessage}: IProfileProps )=> {
  const [userName, setUserName] = useState('Nabil Abadalla');
  

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo>
        {/* If you have a logo image, you can use img tag here */}
        {/* <img src="your-logo-url" alt="Linktrust" /> */}
        <img src="./logo.svg" alt="Linktrust" />
        </Logo>
      </LogoContainer>
      <Box>
     {/* <Sidebar toggleSnackbar={toggleSnackbar} setSnackbarMessage={setSnackbarMessage}/> */}
    
      <Box sx={{ mt: 3, ml: 5, }}>
        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircle sx={{ fontSize: 60 }} />
          <IconButton>
            <Edit />
          </IconButton>
        </Box> */}

        <Box sx={{
             width: 200,
             height: 200,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             bgcolor: 'grey.300',
            //  width: 318, // px is the default unit
            //  height: 318,
            //  position: 'absolute', // necessary for top and left to work
            //  top: 166,
            //  left: 74,
            //  borderRadius: 51,
            //  bgcolor: 'grey.300', // set a background color so you can see the box
            

          
                
              }}>
                 <img src="https://www.example.com/path-to-your-image.jpg" alt="Description" style={{maxWidth: '100%', maxHeight: '100%'}} />
             
        </Box>


      {/* <Box sx={{  alignItems: 'center', padding: '10px' }}>
      <Typography variant="h4" component="div">
        {userName}
      </Typography>
      <TextField
        variant="outlined"
        size="medium"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </Box> */}
        {/* <Typography sx ={{padding:'10px'}} variant="h4" component="div">Nabil Abadalla</Typography> */}
        {/* <IconButton>
          <Edit />
        </IconButton> */}
        {/* <Typography variant="h5" component="div">Title</Typography> */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="div">Name </Typography>
          {/* <IconButton>
            <Edit />
          </IconButton> */}
          <TextField
            multiline
            rows={2}
            label="Default Value"
            variant="outlined"
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="div">Bio</Typography>
          {/* <IconButton>
            <Edit />
          </IconButton> */}
          <TextField
            multiline
            rows={2}
            label="Default Value"
            variant="outlined"
          />
        </Box>
        <Box >
          <Typography variant="h6" component="div">Link Accounts</Typography>
          {/* <IconButton>
            <Add />
          </IconButton> */}
          {/* <Box>
            <Typography variant="body1" component="div">Google</Typography>
            <Typography variant="body1" component="div">Metamask</Typography>
            <Typography variant="body1" component="div">Github</Typography>
            <Typography variant="body1" component="div">Twitter</Typography>
          </Box> */}
    
          <Box>
            <Typography variant="body1" component="div">
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google
              </Link>
            </Typography>
            <Typography variant="body1" component="div">
              <Link href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                Metamask
              </Link>
            </Typography>
            <Typography variant="body1" component="div">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                Github
              </Link>
            </Typography>
            <Typography variant="body1" component="div">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </Link>
            </Typography>
          </Box>
      
       
        </Box>
        {/* <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
          <TextField
            defaultValue="Default Value"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <Button variant="contained" onClick={() => navigator.clipboard.writeText('Default Value')}>
            <Link />
          </Button>
        </Box> */}
      </Box>
    </Box>
    </SidebarContainer>
  )
}

export default Profile;


