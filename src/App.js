import './App.css';
import { useState,useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
function App() {
  const[user, setUser] = useState({})

  const handleCallBack = (res) => {
    console.log("Response from Google Sign-In:", res);
    setUser({}) // Clear the previous user state
    if (res && res.credential) {
      const user = jwtDecode(res.credential);
      setUser(user);
      console.log("user",user)
    } else {
      console.error("No credentials found in the response");
    }
  };

  useEffect(()=>{
    /* global google */
    if (google && !document.getElementById("SignIn").hasChildNodes()) {
    google.accounts.id.initialize({
      client_id:"1014479172456-qmqkp28bci38tdr9hmqtv06dupd3josc.apps.googleusercontent.com",
      callback: handleCallBack,
      auto_prompt: false, // Disable automatic prompts that trigger third-party cookies
    })
    // Prevent automatic account selection
  // google.accounts.id.disableAutoSelect();
  google.accounts.id.prompt(); // Explicitly trigger the prompt instead of auto-prompt

  if (!window.googleButtonRendered) {
    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      {theme:"outline", size:"large"}
    )}
  }
  },[])
  return (
    <>
    <div className='flex flex-col items-center'>
    <h1 className="text-3xl mt-5 py-2 text-center">08- Learn With Podcasts
      
      </h1>
      <div id="SignIn"></div>
      {user && user.name && user.picture && (
  <>
    <img alt="User" src={user.picture} />
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </>
)}
    </div>
   
      </>
    
  );
}

export default App;
