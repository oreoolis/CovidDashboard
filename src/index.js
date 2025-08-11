import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react'




ReactDOM.render(

  <Auth0Provider
    domain="dev-hmiufiz5.us.auth0.com"
    clientId="WnR5cyqDXsFZrfhP3DJQEyKcVG1w6mpC"
    redirectUri={window.location.origin}>
      <Main/>
    </Auth0Provider>,
  


  document.getElementById("root")
);