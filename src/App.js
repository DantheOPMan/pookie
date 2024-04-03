// App.js

import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
import Carousel from './components/GifCarousel'
import background from "./assets/background.png"; // Ensure the path is correct
// Import the CSS for the wallet adapter
require('@solana/wallet-adapter-react-ui/styles.css');



function App() {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = 'mainnet-beta';

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // Only include wallets you want to support
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                <div className="font-sans min-h-screen"
                        style={{
                            backgroundImage: `url(${background})`, // backgroundColor: '#D291BC'
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <Header />
                        <main>
                            <Hero />
                            <div style={{ borderTop: '0px solid #FFF', width: '100%', margin: '20px auto' }}></div>
                            <div className="parallax"><About /></div>
                            <Carousel/>
                            <HowToBuy />
                        </main>
                        <Footer />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default App;
