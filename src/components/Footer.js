import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 2,
        textAlign: 'center',
        backgroundColor: '#017d23',
        gap: 1, 
      }}
    >
      <Typography variant="body2" color="#f8f8f8">
        &copy; 2024 designbynarahari.com All rights reserved.
      </Typography>
      <Typography variant='body2' color="#f8f8f8">
      Connect for freelancing and any type of works
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <Typography variant="body2" color="#f8f8f8">
        Follow me on:
      </Typography>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/pradeep-kumar-reddy-n091095"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#f8f8f8' }}
        >
          <LinkedIn />
        </IconButton>
        </Box>
    </Box>
  );
}
