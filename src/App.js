import './App.css';
import { useEffect } from 'react';
function App() {
  const handleCallBack = (res) =>{
console.log("Encoded token:" +res.credential)
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"1014479172456-qmqkp28bci38tdr9hmqtv06dupd3josc.apps.googleusercontent.com",
      callback: handleCallBack
    })
    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      {theme:"outline", size:"large"}
    )
  },[])
  return (
    <>
    <div>
    <h1 className="text-3xl mt-5 py-2 text-center">08- Learn With Podcasts
      
      </h1>
      <div id="SignIn"></div>
    </div>
   
      </>
    
  );
}

export default App;
