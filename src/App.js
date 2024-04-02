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
                    <div className="font-sans bg-gradient-to-r from-pink-900 via-gray-800 to-yellow-900 min-h-screen">
                        <Header />
                        <main>
                            <Hero />
                            <About />
                            <Carousel />
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
