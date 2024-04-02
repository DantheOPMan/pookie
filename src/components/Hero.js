import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Background from "../assets/background.gif";

const Hero = () => {
    return (
        <Box id="home"
          sx={{
            position: 'relative',
            height: '80vh', // Adjust the height as needed
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 1 // Adjust the opacity as needed
          }}
        >
          <Grid container justifyContent="center">
            <Grid item>
              {/* Background Box for Text */}
              <Box
                sx={{
                  backgroundColor: 'rgba(128, 128, 128, 0.5)', // Semi-transparent gray
                  p: 2, // Padding around the text
                  borderRadius: '10px', // Optional: rounded corners
                  display: 'inline-block',

                }}
              >
                <Typography variant="h1" component="h1" align="center" sx={{ color: 'white', textShadow: '2px 2px 8px rgba(0,0,0,0.95)' }}>
                  Welcome to Pookie Bear
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
    );
};

export default Hero;
