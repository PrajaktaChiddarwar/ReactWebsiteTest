import '../../CSS/FourButtons.css'
// import '../../../CSS/Module.css'
import { useState } from 'react';
import Form from './Form';
import Text from './Text';
import Image from './Image'
import Video from './Video'

const FourButtons = () => {
  const [Click, setClick] = useState("Click On Button To See Magic");
  // const [btnColor, setbtnColor] = useState();

  const handleTab1Click = ()=>
  {

    setClick("Tab1");
  

  }
  const handleTab2Click = ()=>
  {
    setClick("Tab2");
  }
  const handleTab3Click = ()=>
  {
    setClick("Tab3");
  }
  const handleTab4Click = ()=>
  {
    setClick("Tab4"); 
  }
  const renderTabContent = () => {
    if (Click === "Tab1") {
      return <Form />;
    } 
    if (Click === "Tab2") {
      return <Text />;
    } 
    if (Click === "Tab3") {
      return <Image />;
    } 
  if (Click === "Tab4") {
      // Return content for Tab 2 here
      return <Video/>;
    }
  };
  return (
    <div className='container'>
    <div className='outerbox'>
    <div className='buttonset'>
    <button className='buttons' id='form' onClick={handleTab1Click}>Form Tab 1</button>
    <button className='buttons' id='text' onClick={handleTab2Click}>Text Tab 2</button>
    <button className='buttons' id='image' onClick={handleTab3Click}>Image Tab 3</button>
    <button className='buttons' id='video' onClick={handleTab4Click}>Video Tab 4</button>
</div>
    <div className='innerbox'>
    {/* <p>{Click}</p> */}
    {renderTabContent()}
      
    </div>
    </div>
       
    </div>
  )
}

export default FourButtons