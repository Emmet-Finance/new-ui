import React from 'react';
import Close from '../../assets/img/close.svg';
import Success from '../../assets/img/Success.svg';
import RightGreen from '../../assets/img/right-green.svg';
import Square from '../../assets/img/square-icon.svg';


function SwapSuccess () {
    return ( 
        <div className="swapSuccessModal">
            <div className="closeSuccess"><img src={Close} alt="Close" /></div>
            <img src={Success} alt="Success" className="successIcon" />
            <h2>Swap Successful</h2>
            <div className="successTransfer">
                <div className="tFrom"><span>0.5</span> ETH</div>
                <img src={RightGreen} alt="RightGreen" className="greenRight" />
                <div className="tTo"><span>1025</span> USDT</div>
            </div>
            <ul className="textBox">
                <li className="textLine">
                    <div className="leftText">
                        Text <img src={Square} alt="Square" />
                    </div>
                    <div className="RighttText">
                        Text <img src={Square} alt="Square" />
                    </div>
                </li>
                <li className="textLine">
                    <div className="leftText">
                        Text <img src={Square} alt="Square" />
                    </div>
                    <div className="RighttText">
                        Text <img src={Square} alt="Square" />
                    </div>
                </li>
            </ul>
            <div className="successBottomBtns">
                <a href="#" className='backTo MainYellowActionButton'>Back to swap</a>
                <a href="#" className='viewSwap'>View swap history</a>
            </div>
        </div>
     );
}

export default SwapSuccess;