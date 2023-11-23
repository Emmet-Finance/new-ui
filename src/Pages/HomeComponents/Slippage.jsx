import React, { useState } from 'react';
import InfoIcon from '../../assets/img/InfoIcons.svg';
import ArrowDonw from '../../assets/img/dow-Icons-s.svg';

const Slippage = () => {
    // State to manage the visibility of the modal
    const [isModalVisible, setModalVisible] = useState(false);
    
    // Function to toggle the modal visibility
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    return ( 
        <div className="slippageContainer">
            <div className="slipageTitle">
                <div className="slippageLeft">
                    Slippage
                </div>
                <div className="slippageRight">
                    <div className="slipageSelect" onClick={toggleModal}>
                        <span className="slipageSelectValue">
                            0.5%
                        </span>
                        <img src={ArrowDonw} alt="ArrowDonw" className="selectArrow" />
                    </div>
                    {isModalVisible && (
                        <div className="slipageModal">
                            <div className="slipageModalTitle">
                                Max slippage <img src={InfoIcon} title='Info' alt="InfoIcon" />
                            </div>
                            <div className="slipageValueBox">
                                <div className="slipageValue">
                                    <span className='valueItem' id='value1' onClick={toggleModal}>0.1 %</span>
                                    <span className='valueItem' id='value2' onClick={toggleModal}>0.5 %</span>
                                    <span className='valueItem' id='value3' onClick={toggleModal}>1.0 %</span>
                                </div>
                                <div className="customeValue">
                                    <input type="number" placeholder='Custom' />
                                    <span>%</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="slipageToggle">
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Minimum received</span>
                        <img src={InfoIcon} title='Info' alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight">0.003 ETH</div>
                </div>
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Price impact</span>
                        <img src={InfoIcon} title='Info' alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight"> <span className="fw6">0.5%</span></div>
                </div>
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Trading fee</span>
                        <img src={InfoIcon} title='Info' alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight"><span className="fw6">0.5%</span></div>
                </div>
                <div className="slipageList">
                    <div className="slipageListLeft">
                        <span>Route</span>
                        <img src={InfoIcon} title='Info' alt="InfoIcon" />
                    </div>
                    <div className="slipageListRight">
                        <div className="slipageSelect">
                            <select name="" id="">
                                <option value="ETH > USDT">ETH > USDT</option>
                                <option value="USDT > ETH">USDT > ETH</option>
                            </select>
                            <img src={ArrowDonw} alt="ArrowDonw" className="selectArrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Slippage;