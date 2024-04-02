import React from 'react';
import '../App.css'; // Make sure your CSS file is imported
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const Header = () => {


    return (
        <header className="text-white body-font w-full fixed top-0 z-50 header-gradient">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <span className="ml-3 text-xl"><b>$POO</b>kie Bear</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#home" className="mr-5 hover:text-gray-300">Home</a>
                    <a href="#about" className="mr-5 hover:text-gray-300">About</a>
                    <a href="#how-to-buy" className="mr-5 hover:text-gray-300">How to Buy</a>
                    <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-300">
                        <TwitterIcon />
                    </a>
                    <a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-300">
                        <TelegramIcon />
                    </a>
                    <WalletMultiButton style={{
                        backgroundColor: 'deeppink', // Your button's background color
                        hoverColor: 'gray',
                        color: 'white', // Your button's text color
                        fontWeight: 'bold', // Your button's font weight
                        fontSize: '0.875rem', // Your button's font size
                        borderRadius: '9999px', // Your button's border radius, for fully rounded corners
                        padding: '8px 16px', // Your button's padding
                        '&:hover': {
                            backgroundColor: 'darkgray', // Your button's hover state background color
                        },
                        // ... any other styles
                    }} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
