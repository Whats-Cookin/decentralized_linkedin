import IProfileProps from './types'
import { SidebarContainer } from './styles'
import { Box, Typography, TextField, Divider, Button } from '@mui/material'
import Link from '@mui/material/Link'
import png from './blank-profile-picture.png'
import logo from '../../src/logo/favicon.svg'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import EditIcon from '@mui/icons-material/Edit'
import GoogleIcon from '@mui/icons-material/Google'
import AddIcon from '@mui/icons-material/Add'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import UploadFiles from './UploadFiles'
import { SetStateAction, useState } from 'react'

const Profile = ({ toggleSnackbar, setSnackbarMessage }: IProfileProps) => {
  const [inputText, setInputText] = useState('')

  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputText(event.target.value)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ alignItems: 'start', width: '35%', bgcolor: '#80B8BD' }}>
        <Box sx={{ display: 'flex', pt: '39px', pl: '40px', width: '332px', mb: '72px' }}>
          <img src={logo} className='pl-8' />
        </Box>
        <Box sx={{}}>
          <Box sx={{ pl: '70px' }}>
            <Box sx={{ width: '318px', height: '318px', position: 'relative', mb: '30px' }}>
              <img src={png} alt='Description' style={{ width: '318px', height: '318px', borderRadius: '50px' }} />
              <Box
                sx={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50px',
                  bgcolor: '#B1B1B1',
                  bottom: '-10px',
                  right: '-10px',
                  position: 'absolute'
                }}
              >
                <CameraAltIcon sx={{ width: '31px', height: '31px', margin: '13px' }} />
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '500',
                lineHeight: '45.57px',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                mb: '25px'
              }}
            >
              Mohamed Ali
              <Button sx={{ pb: '20px' }}>
                <EditIcon sx={{ color: 'gray', fontSize: '32', p: '0' }} />
              </Button>{' '}
              <br />
              <Typography sx={{ fontSize: '32px', fontWeight: '500', lineHeight: '29.05px' }}>
                Mechanics, Energetic
              </Typography>
            </Typography>
          </Box>
          <Divider style={{ height: '0.1px', width: '100%', backgroundColor: '#FFFFFF', paddingLeft: '0' }} />{' '}
          <Box sx={{ mt: 3, mb: '30px', pl: '70px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '36px',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Bio
              </Typography>
              <Button
                sx={{
                  color: 'white',
                  p: '0'
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '17px',
                    fontWeight: '100',
                    textTransform: 'lowercase'
                  }}
                >
                  <span style={{ textTransform: 'uppercase' }}>E</span>dit{' '}
                  <span style={{ textTransform: 'uppercase' }}>b</span>io
                </Typography>{' '}
              </Button>
            </Box>
            <TextField
              sx={{ width: '241px', height: '38px', '& fieldset': { border: 'none' }, ml: '-15px' }}
              id='outlined-multiline-static'
              multiline
              maxRows={2}
              placeholder='Add your bio here'
              value={inputText}
              onChange={handleChange}
              inputProps={{
                maxLength: 50,
                style: { color: 'white', fontWeight: '700' }
              }}
            />
          </Box>
          <Divider
            style={{
              height: '0.1px',
              width: '100%',
              backgroundColor: '#FFFFFF',
              paddingLeft: '0',
              marginBottom: '18px'
            }}
          />
          <Box>
            <Box sx={{ pl: '70px' }}>
              <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '700', lineHeight: '38px' }}>
                Linked Accounts
              </Typography>
              <Typography variant='body1' component='div'>
                <Link
                  href='https://www.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    textDecoration: 'none',
                    color: '#FBFBFBE5',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '38px'
                  }}
                >
                  <GoogleIcon sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '38px', mr: '5px' }} /> Google
                </Link>
              </Typography>
              <Typography variant='body1' component='div'>
                <Link
                  href='https://www.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    textDecoration: 'none',
                    color: '#101C1D',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '38px'
                  }}
                >
                  <AddIcon sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '38px', mr: '5px' }} /> Metamask
                </Link>
              </Typography>
              <Typography variant='body1' component='div'>
                <Link
                  href='https://www.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    textDecoration: 'none',
                    color: '#101C1D',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '38px'
                  }}
                >
                  <AddIcon sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '38px', mr: '5px' }} /> Github
                </Link>
              </Typography>
              <Typography variant='body1' component='div'>
                <Link
                  href='https://www.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    textDecoration: 'none',
                    color: '#101C1D',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '38px'
                  }}
                >
                  <AddIcon sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '38px', mr: '5px' }} /> Twitter
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                m: '57px auto',
                width: '369px',
                height: '64px',
                borderRadius: '6px',
                border: '1px soled #00000080',
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  lineHeight: '16.94px',
                  pl: '20px',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                http://linkedtrust.us/nabil-abdal
              </Typography>
              <Button>
                <ContentCopyIcon sx={{ color: '#878787' }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <UploadFiles />
    </Box>
  )
}

export default Profile
