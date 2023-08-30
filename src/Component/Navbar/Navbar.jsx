

import { useState } from 'react';
import '../../CSS/Navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLine } from 'react-icons/ri'; 
import Banner from './Banner';
import '../../CSS/SignIn.css';
import '../../CSS/Map.css';
import { MdAddHomeWork } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FcAddressBook } from 'react-icons/fc';

const Navbar = () => {
  const [showPopup, setshowPopup] = useState(false);
  const [showMap, setshowMap] = useState(false);
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Signin = () => {
    setshowPopup(true);
  };

  const MapFunction = () => {
    setshowMap(!showMap); 
  };

  

  const handleAuthToggle = () => {
    setIsSignInMode(!isSignInMode);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isSignInMode) {
      // Handle sign in logic   
       setshowPopup(false);
      console.log("Signing in with:", email, password);
    } else {
      // Handle sign up logic
      setshowPopup(false);
      console.log("Signing up with:", name, email, password);
    }
  };
  return (
    <>
      <div className='Navbar container'>
        <nav className='navbar navbar-expand-lg fixed-top'>
        <button className='Toggle1' onClick={Signin}>
            {showPopup ? (
              <RiCloseLine className='Hicon' />
            ) : (
              <RxHamburgerMenu className='Hicon' />
            )}
          </button>
          <div className='signPop'>
          {showPopup && (
        
            <div className='auth-container'>
             
              <div className="auth-form">
        <h2>{isSignInMode ? "Sign In" : "Sign Up"}</h2>
        {!isSignInMode && (
          <input
          className='inp'
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
        className='inp'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isSignInMode && (
          <input
          className='inp'
            type="email"
            placeholder="Confirm Email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        )}
        <input
        className='inp'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isSignInMode && (
          <input
          className='inp'
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button onClick={handleAuthSubmit} className='btn'>
          {isSignInMode ? "Sign In" : "Sign Up"}
        </button>
        <p id="toggle-auth" onClick={handleAuthToggle}>
          {isSignInMode
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </div>

            </div>
            
          )}

</div>

          <button className='Toggle1 ' onClick={MapFunction}>
            {showMap ? (
              <RiCloseLine className='Hiconclose Icon' />
            ) : (
              <RxHamburgerMenu className='Hicon' />
            )}
        
          </button>
       
      {showMap && (
        <div className='Map'>
          <div className='leftSide'>
            <h5 className='head' style={{marginTop:"10px"}}>
              <MdAddHomeWork />
              Company: Coders Marathon
            </h5>
            <h6 className='head'>
              <FcAddressBook />
              Address: Kalyani Nagar
            </h6>
            <h6 className='head'>
              <BiSolidPhoneCall />
              Contact No: 9175447316
            </h6>
          </div>
          <div className='rightSide head'>
            <iframe
              width='320'
              height='320'
              // frameborder='0'
              scrolling='yes'
              // marginheight='0'
              // marginwidth='0'
         
              src='https://maps.google.com/maps?width=520&amp;height=300&amp;hl=en&amp;q=Kalyani%20Nagar+(Coders%20Marathon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            ></iframe>
          </div>
        </div>
       
      )}
      </nav>
      </div>
     
      <div className='Banner'>
        <Banner />
      </div>
    </>
  );
};

export default Navbar;
