import React, { useState, useEffect } from 'react';
import Header from '../HeaderFooterSidebar/Header';
import Footer from '../HeaderFooterSidebar/Footer';
import Sidebar from '../HeaderFooterSidebar/Sidebar';
import SwapContainer from '../BridgeComponents/SwapContainer';
import MobileHeader from '../HeaderFooterSidebar/MobileHeader';
import MainActionButton from '../BridgeComponents/MainActionButton';
import SidebarSlider from '../HeaderFooterSidebar/SidebarComponent/SidebarSlider';
// import SwapSuccess from './BridgeComponents/SwapSuccess';
// import SwapFailed from './BridgeComponents/SwapFailed';
// import SwapConfirm from './BridgeComponents/SwapConfirm';

const Bridge = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Check the window width and update state
      const updateWindowDimensions = () => {
        setIsMobile(window.innerWidth <= 1025); // You can adjust the breakpoint as needed
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', updateWindowDimensions);
  
      // Initial call to set the initial window width
      updateWindowDimensions();
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateWindowDimensions);
      };
    }, []);
  
    return (
      <>
        {isMobile ? (
            <div className="MobilePageContainer">
                <div className="mobileArea" id='mobileContainer'>
                    <MobileHeader/>
                    <SwapContainer/>
                    <SidebarSlider/>
                    <Footer/>
                    <MainActionButton/>
                    {/* <SwapSuccess/> */}
                    {/* <SwapFailed/> */}
                    {/* <SwapConfirm/> */}
                </div>
            </div>
        ) : (
            <div className="pageContainer">
                <div className="pageContentRow" id='desktopContainer'>
                    <div className="sidebarArea">
                        <Sidebar/>
                    </div>
                    <div className="mainWrap">
                        <Header/>
                        <div className="pageContent">
                            <div className="swapContainerArea">
                                <SwapContainer/>
                            </div>
                            {/* <SwapSuccess/> */}
                            {/* <SwapFailed/> */}
                            {/* <SwapConfirm/> */}
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )}
      </>
    );
  };
  
  export default Bridge;