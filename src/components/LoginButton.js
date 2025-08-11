import {useAuth0} from '@auth0/auth0-react'
import React from 'react';
import {Button} from 'react-bootstrap'

const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();

  return(
    <Button variant ="primary" onClick={() => loginWithRedirect()}>
      <b>Admin Login</b>
    </Button>
  )
}

export default LoginButton
 