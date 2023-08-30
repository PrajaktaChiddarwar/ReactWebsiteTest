// import React from 'react'
// import '../../../CSS/FourButtons.css'
const Form = () => {
  return (
    <div className='form'>
    <form >
    <input type="text" name='name' placeholder='Enter Your Name' required/>
    <input type="email" name='email' placeholder='Enter Your Email' required/>
    <textarea name='Message' rows="6" placeholder='Enter Your Message'/>
    <button type="submit" className='submit-button' >Submit</button>
  </form>
  </div>
  )
}

export default Form