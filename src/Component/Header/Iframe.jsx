import "../../CSS/Iframe.css"

import  { useState } from "react";
import TabOne from "./TabOne";
import TabTwo from './TabTwo'

export const Iframe = () => {
  const [currentTab, setCurrentTab] = useState("");

  const handleTab1Click = () => {
    setCurrentTab("tab1");
  };

  const handleTab2Click = () => {
    setCurrentTab("tab2");
  };

  const renderTabContent = () => {
    if (currentTab === "tab1") {
      return <TabOne />;
    } else if (currentTab === "tab2") {
      return <TabTwo/>;
    }
  };

  return (
    <>
      <div className="">
        <div className="iframe_div">
          <iframe
           width="300"
            height="315" 
               className="iframe if"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
        
          ></iframe>
          <iframe
            width="300"
            height="315"    
            className="iframe if"

            src="https://www.youtube.com/embed/tgbNymZ7vqY"
        
          ></iframe>
        </div>

        <div className="Tabs">
          <div className="Tab1 ">
            <button type="button" onClick={handleTab1Click} className="Tab">
              Tab 1
            </button>
          </div>
          <div className="Tab2 ">
            <button type="button" onClick={handleTab2Click} className="Tab">
              Tab 2
            </button>
          </div>
        </div>

        {renderTabContent()}
      </div>
    </>
  );
};
