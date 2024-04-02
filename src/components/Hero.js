import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Background from "../assets/backgrounds/background.png";

const Hero = () => {
    return (
        <Box id="home"
          sx={{
            position: 'relative',
            height: {
              xs: '50vh', // Smaller height on extra-small devices
              sm: '75vh', // Medium height on small devices
              md: '100vh', // Full height on medium and larger devices
            },
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
                <Typography 
                  variant="h1" 
                  component="h1" 
                  align="center" 
                  sx={{ 
                    color: 'white', 
                    textShadow: '2px 2px 8px rgba(0,0,0,0.95)',
                    fontSize: {
                      xs: '1.5rem',   // on extra-small devices
                      sm: '2.25rem',  // on small devices
                      md: '3rem',     // on medium devices
                      lg: '4rem',     // on large devices
                      xl: '6rem',     // on extra-large devices
                    }
                  }}>
                  Welcome to Pookie Bear
                </Typography>

              </Box>
            </Grid>
          </Grid>
        </Box>
    );
};

export default Hero;
