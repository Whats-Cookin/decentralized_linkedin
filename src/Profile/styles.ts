import { styled } from '@mui/system'
import { Box, Typography, IconButton, TextField, Button } from '@mui/material'

export const SidebarContainer = styled('div')`
  position: fixed;
  left: 0;
  // width: 250px;
  height: 100%;
  width: 501px;
  // height: 1380px;
  background: #80b8bd;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoContainer = styled('div')`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Logo = styled('h1')`
  color: #000000;
`
