import React from 'react'

import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import  logo  from '../assets/logo.png'
import SearchBar from './SearchBar'



function Navbar() {
  return (
    <Stack alignItems="center" p={2} sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between", flexDirection: { sx: "column", md: "row" } }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex" }}>
          <img src={logo} alt="logo" height={45} />
          <Typography variant="h4" fontWeight="bold" ml={2} sx={{ color: "white" }}>
            MyTube
          </Typography>
        </Box>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar