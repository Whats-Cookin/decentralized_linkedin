import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import ILoginProps from './types'
import { Box, TextField, Typography } from '@mui/material'
import styles from './styles'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../../src/logo/favicon.svg'
import quote from './quote.svg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const Login = ({ toggleSnackbar, setSnackbarMessage, setLoading }: ILoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit(async ({ email, password }) => {
    console.log('you pressed submit, congratulations')
    try {
      if (!email || !password) {
        toggleSnackbar(true)
        setSnackbarMessage('Both email and password')
      } else {
        setLoading(true)
      }
    } catch (err: any) {
      setLoading(false)
      toggleSnackbar(true)
      setSnackbarMessage('user not found')
      console.error('Error:', err?.message)
    }
  })

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#EEEEEE',
          minHeight: '100vh',
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 'calc(3px + 2vmin)',
          color: 'rgb(37, 3, 3)',
          overflow: 'hidden',
          justifyContent: 'center',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '40%',
            height: '100%',
            backgroundColor: '#849EA6'
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: '5%',
            width: '30%',
            height: '100%',
            backgroundColor: '#849EA6'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              padding: '10px'
            }}
          >
            <img
              src={logo}
              alt='LinkedTrust'
              style={{
                height: '30px',
                width: 'auto'
              }}
            />
          </div>
          <div
            style={{
              color: 'white',
              paddingTop: '30px'
            }}
          >
            <img
              src='/image2/quote-custom.svg'
              alt=''
              style={{
                height: '30px',
                width: 'auto',
                verticalAlign: '30px'
              }}
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ullam tenetur dolores odio praesentium maxime
            ipsam animi voluptatem ex, voluptate, fugiat omnis odit delectus facilis dolorem nam perferendis quibusdam
            voluptas minus laudantium necessitatibus libero!
            <CheckCircleIcon sx={{ color: 'green', marginLeft: '5px', fontSize: 10 }} />
          </div>
        </div>
      </Box>
      <form onSubmit={onSubmit} style={{ zIndex: 2, width: '100%', maxWidth: '430px', margin: '0 auto' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 2,
            width: '100%',
            padding: '2rem',
            maxWidth: '430px',
            marginTop: { xs: 15, md: 8 },
            background: '#FFFFFF',
            boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.25)',
            zIndex: 20,
            borderRadius: '10px'
          }}
        >
          <Typography
            variant='h5'
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '2.5rem'
            }}
            sx={{ color: 'primary.main' }}
          >
            Login
          </Typography>
          <TextField
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            fullWidth
            label='Email'
            sx={styles.inputField}
            variant='filled'
            type='email'
            helperText={(errors.email?.message as string) || ''}
            error={!!errors.email}
          />
          <TextField
            {...register('password', {
              required: 'Password is required'
            })}
            fullWidth
            label='Password'
            sx={styles.inputField}
            variant='filled'
            type='password'
            helperText={(errors.password?.message as string) || ''}
            error={!!errors.password}
          />
        </Box>
        <Button component={RouterLink} to='/' sx={{ width: '100%' }} variant='contained' size='medium' type='submit'>
          LogIn
        </Button>
      </form>
    </Box>
  )
}

export default Login
