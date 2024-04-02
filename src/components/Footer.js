import React from 'react';
import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import XIcon from '@mui/icons-material/Close'; // Import the 'X' (Close) icon from MUI
import TelegramIcon from '@mui/icons-material/Telegram'; // Import Telegram icon from MUI

const Footer = () => {
    return (
        <Box component="footer" sx={{ color: 'white', py: 3, textAlign: 'center', backgroundColor: '#F5A190' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* Brand disclaimer */}
                <Typography variant="caption" sx={{ mb: 2 }}>
                    We are not affiliated with any brands whatsoever. All the graphics are generated using AI technology.
                </Typography>
                
                {/* Icon Buttons */}
                <Box sx={{ mb: 2 }}>
                    <IconButton href="https://t.me/pookiebearcrypto" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton component="a">
                        <XIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Box>

                {/* Contact and copyright */}
                <Typography variant="body2">
                    © 2024 Pookie Bear Crypto —
                    <Link href="mailto:contact@pookiebear.space" sx={{ ml: 1, textDecoration: 'none', color: 'white' }}>
                        contact@pookiebear.space
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
