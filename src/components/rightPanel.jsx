// RightPanel.js
import React from 'react';
import "./rightPanel.css";

const RightPanel = () => {
  return (
    <div style={{ width: '50%', float: 'left', height: '100vh', backgroundColor: '#F8FAFF' }}>
      <div>

      <div style={textStyleSignIn}>
        <h1>Sign In</h1>
      </div>

      <div style={{ fontFamily:'Lato', fontSize:"16px",fontStyle:'normal',fontWeight:'400',lineHeight:'normal',flexShrink:'0'} }>
      <h3>Sign in to your account</h3>
      </div>

      <div className="button-container">
        <button className="button-style">Button 1</button>
        <button className="button-style">Button 2</button>
      </div>

      <div className="loginContainer">
  
    <div style={{margin:'auto'}}>
        <div className="input-container">
          <label>Email address </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
         
        </div>

        <a href="#">Forgot password?</a>
        

        <button className="loginBut">
          <p>Sign In</p>
        </button>

        {/* <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign in with Google</p>
          
        </button> */}
      </div>
      </div>

      </div>
    </div>
  );
};

const textStyleSignIn = {
color: "#000",
fontFamily: "Montserrat",
fontSize: "27px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "normal",
height:'48.301px',
width:'220.806px',

}
export default RightPanel;