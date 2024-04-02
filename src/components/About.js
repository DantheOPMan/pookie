import React from 'react';
import { Button } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram'; // Import Telegram icon

const About = () => {
    return (
        <section id="about" className="text-white body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col" style={{ height: '75vh' }}>
                <div className="text-center lg:w-2/3 w-full" style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', padding: '1vw', borderRadius:'20px', }}>
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium">About Pookie Bear</h2>
                    <p className="mb-8 leading-relaxed">Pookie Bear was created as a tribute to the spirit of adventure and the love of all things fun. With its unique take on the crypto world, Pookie Bear aims to bring together a community of enthusiasts eager to partake in a journey filled with excitement, laughter, and prosperity.</p>
                    <div className="flex justify-center gap-4 mt-6"> {/* Increased gap for even spacing */}
                        {/* Telegram Button */}
                        <Button 
                            href="https://t.me/yourTelegramChannel" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            variant="contained" 
                            sx={{ backgroundColor: 'deeppink', '&:hover': { backgroundColor: 'grey' } }} // Custom color
                            startIcon={<TelegramIcon />}
                        >
                            Join our Telegram
                        </Button>
                        {/* Twitter Button */}
                        <Button 
                            href="https://twitter.com/yourTwitterAccount" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            variant="contained" 
                            color="inherit" 
                            sx={{ backgroundColor: '#000', '&:hover': { backgroundColor: 'grey' } }} // Black color
                            startIcon={<XIcon />}
                        >
                            Follow us on X
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
