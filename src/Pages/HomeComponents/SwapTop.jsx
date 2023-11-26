import React, { useState } from 'react';
import chainsData from './Chain.json';
import { useNetwork, useSwitchNetwork } from 'wagmi'

import Ethereum from '../../assets/img/Ethereum.svg';
import DownArrow from '../../assets/img/down-white.svg';

import SwapContainerMenu from './SwapContainerMenu';

const SwapTop = () => {

    const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

    const [selectedChain, setSelectedChain] = useState({
        icon: Ethereum,
        name: 'Ethereum',
    });

    const [isListVisible, setListVisible] = useState(false);

    const handleChainClick = (icon, name, id) => {
        setSelectedChain({ icon, name });
        toggleVisibility();
        switchNetwork?.(id);
    };

    const toggleVisibility = () => {
        setListVisible(!isListVisible);
    };


    return (
        <div className="swap_top_menu">
            <div className="selectCoinLeft">
                    <div
                        className="selectedCoin"
                        onClick={toggleVisibility}
                    >
                        <div className="coinNameIcon">
                            <img src={selectedChain.icon} alt={selectedChain.name}  width="30px"/>
                            <span>{selectedChain.name}</span>
                        </div>
                        <img src={DownArrow} alt="Down Arrow" />
                    </div>
                    <ul className={`selectCoinList ${isListVisible ? 'visible' : 'hidden'}`}>
                        {chainsData.map((chain) => (
                            <li className="coinItem" key={chain.id}>
                                <div
                                    className="coinNameIcon"
                                    onClick={() => handleChainClick(chain.icon, chain.name, chain.id)}
                                >
                                    <img src={chain.icon} alt={chain.name} width="30px"/>
                                    <span>{chain.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
            <div className="swap_top_menu_right">
                <SwapContainerMenu/>
            </div>
        </div>
    );
};

export default SwapTop;
