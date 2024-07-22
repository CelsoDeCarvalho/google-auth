import GoogleLogin from 'react-google-login'
import './App.css'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import axios from 'axios';

function App() {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: "853086916587-hp13tualu1qdrdhijpbuljc2j0mrr2h4.apps.googleusercontent.com",
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  }, [])

  function responseGoogle(event: any) { console.log(event) }

  const currentUrl = window.location.href;

  console.log(currentUrl !== "http://localhost:3000/")

  function getDummyData() {
    axios.get('/custom-path/unknown')
      .then((response: unknown) => {
        console.log(response, "response")
      })
  }

  return (
    <>
      <button onClick={getDummyData}>GET DATA</button><br /><br />
      <GoogleLogin
        clientId="853086916587-hp13tualu1qdrdhijpbuljc2j0mrr2h4.apps.googleusercontent.com"
        buttonText="Login with google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  )
}

export default App
