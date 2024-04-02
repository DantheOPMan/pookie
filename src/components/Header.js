import React from 'react';
import '../App.css'; // Make sure your CSS file is imported
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';


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
                    <button className="text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded">
                        Connect
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
