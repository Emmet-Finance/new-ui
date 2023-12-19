import React, { useState } from 'react';
import Yourliquidity from '../PoolTable/Yourliquidity';


function YourPoolTitle() {
    const [isYourLiquidityVisible, setYourLiquidityVisible] = useState(false);
    const handleAddPollClick = () => {
        setYourLiquidityVisible(!isYourLiquidityVisible);
    };
    return ( 
        <>
            <div className="yourPoolTitle">
                <div className="poolTitleLeft">
                    <h5>Your pool</h5>
                    <p>Total fee earnings: $330,843,482.47</p>
                </div>
                <div className="poolTitlerRight">
                    <button className="addLiquidity"  onClick={handleAddPollClick}>Add liquidity</button>
                </div>
            </div>
            {isYourLiquidityVisible && <Yourliquidity />}
        </>
    );
}

export default YourPoolTitle;