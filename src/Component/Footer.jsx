
import '../CSS/Footer.css'
const Footer = () => {
  const terms = ()=>
  {

  }
  const policy = ()=>
  {
    
  }
  return (
    <div className="footer">
     <div className=''>
        <h6 className='footer-text'>Copyright reserve @PrajaktaChiddarwar: 2023
        </h6>
          <div className='fbtn'>
          <button className='but' onClick={terms}>Terms</button>
          <button className='but'onClick={policy}>Policy</button>
        </div>
        </div>
    </div>
  )
}

export default Footer