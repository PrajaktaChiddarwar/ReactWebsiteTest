import '../../CSS/Map.css'
import {MdAddHomeWork} from 'react-icons/md'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {FcAddressBook} from 'react-icons/fc'
const Map = () => {
  return (
    <div className="Map">
   <div className="leftSide">
    <h5><MdAddHomeWork/>Company: Coders Marathon</h5>
    <h6> <FcAddressBook/>Address: Kalyani Nagar</h6>
    <h6><BiSolidPhoneCall/>Contact No: 9175447316</h6>
   </div>
<div className="rightSide">
    <iframe width="220" height="320" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
    src="https://maps.google.com/maps?width=520&amp;height=300&amp;hl=en&amp;q=Kalyani%20Nagar+(Coders%20Marathon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>

</div> 

  )
}

export default Map