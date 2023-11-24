import React, { useState } from 'react';
import Logo from '../assets/img/Emmet-logo2.svg';
import Wallet from '../assets/img/Wallet.svg';
import EthereumTop from '../assets/img/Ethereum-top.svg';
import OpenNav from '../assets/img/OpenNav.svg';
import CloseNav from '../assets/img/CloseNav.svg';
import MobileNav from './MobileNav';
import MobileFooterNav from './MobileFooterNav';

const MobileHeader = () => {

    const [isBodyClassAdded, setIsBodyClassAdded] = useState(false);

    const handleButtonClick = () => {
      // Toggle the class on the body element
      document.body.classList.toggle('activeMobileMenu');
      // Update the state to reflect the current state of the class
      setIsBodyClassAdded((prev) => !prev);
    };
    
    return ( 
        <header className="mobileHeader">
            <div className="mobileHeaderTop">
                <div className="toggleLink">
                    <a href="#" className='testnet active'>Testnet</a>
                    <a href="#" className='mainnet'>Mainnet</a>
                </div>
            </div>
            <div className="mobileHeaderCenter">
                <a href="/"><img src={Logo} alt="EmmetFinance" /></a>
                <div className="headerRightSide">
                    <div className="EthereumTop">
                        <a href="#"><img src={EthereumTop} alt="" /></a>
                    </div>
                    <div className="connectWallet">
                        <a href="#"><img src={Wallet} alt="Wallet" /> Connect</a>
                    </div>
                    <div className="mobileNavTriger" onClick={handleButtonClick}>
                        <img src={OpenNav} alt="Nav Triger" className="openNav" />
                        <img src={CloseNav} alt="Nav Triger" className="closeNav" />
                    </div>
                    <MobileNav/>
                </div>
            </div>
            <MobileFooterNav/>
        </header>
     );
}

export default MobileHeader;