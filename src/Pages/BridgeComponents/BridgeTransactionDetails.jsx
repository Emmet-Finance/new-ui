import React from 'react';
import './BridgeTransactionDetails.css';
import useBridgeFee from '../../hooks/useBridgeFee';
import { useAppSelector } from '../../hooks/storage';
import { SUPPORTED_CHAINS, ChainNameToTypeChainName } from '../../types';
import { getDestinationFee } from '../../utils';

function BridgeTransactionDetails() {

    const { nativeCurrency, formattedFee } = useBridgeFee();
    const bridge = useAppSelector((state) => state.bridge);

    const destCurrency = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]].nativeCurrency.symbol;

    return ( 
        <ul className="bridgeTransactionDetails">
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    You will receive
                </div>
                <div className="bridgeTransDetRight">
                    {bridge.receive} {bridge.toToken}
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Bridging Fee
                </div>
                <div className="bridgeTransDetRight">
                {formattedFee && formattedFee.toFixed(6)} {nativeCurrency}
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Destination Gas Fee (Est.)
                </div>
                <div className="bridgeTransDetRight">
                    {getDestinationFee(destCurrency)} {destCurrency}
                </div>
            </li>
            <li className='bridgeTransactionDetailsList'>
                <div className="bridgeTransDetLeft">
                    Estimated waiting time 
                    {/* <img src="./img/InfoIcons.svg" alt="InfoIcons" /> */}
                </div>
                <div className="bridgeTransDetRight">
                    1 min 59 sec
                </div>
            </li>
        </ul>
     );
}

export default BridgeTransactionDetails;