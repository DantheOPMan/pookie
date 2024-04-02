import React, { useState, useRef } from 'react';
import { Grid, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check'; // Import Check icon

const HowToBuy = () => {
    const [isCopied, setIsCopied] = useState(false);
    const textAreaRef = useRef(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textAreaRef.current.value)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2s
            })
            .catch((err) => console.error('Error copying text: ', err));
    };

    return (
        <section id="how-to-buy" className="text-white body-font">
            <div className="container mx-auto flex px-5 py-10 justify-center flex-col">
                <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '25vh' }}>
                    <Grid item xs={12}>
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center">How to Buy $POO</h2>
                    </Grid>
                    <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                            <Button href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ 
                                backgroundColor: 'brown', 
                                '&:hover': { backgroundColor: 'gray' },
                                height: '56px', // Match TextField height
                                fontSize: '0.875rem', // Match TextField font size
                            }}>
                                Go to DexScreener
                            </Button>
                        </Grid>
                        <Grid item>
                            <TextField
                                defaultValue="BFek4xVLbyW9w2cfcuFxh974f7TtAjWWjJq2KsrgthGL"
                                inputProps={{ readOnly: true }}
                                inputRef={textAreaRef}
                                variant="outlined"
                                sx={{ 
                                    '& .MuiInputBase-input': { 
                                        color: 'white', 
                                        padding: '18px', // Adjust padding to match Button size
                                    },
                                    '& .MuiOutlinedInput-root': { 
                                        color: 'white', 
                                        borderColor: 'pink', 
                                        '&:hover fieldset': { borderColor: 'pink' },
                                    },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={copyToClipboard}>
                                                {isCopied ? <CheckIcon /> : <ContentCopyIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default HowToBuy;
