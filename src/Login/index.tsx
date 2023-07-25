import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import ILoginProps from './types'
import { Box, Grid,TextField, Typography } from '@mui/material'
import styles from './styles'

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
      <Button sx={{ width: '100%' }} type='submit' variant='contained' size='medium'>
        Login
      </Button>
    </form>
  )
}

export default Login
