import GoogleLogin from 'react-google-login'
import './App.css'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

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

  return (
    <>
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
