/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { FacebookProvider, Login, LoginButton } from 'react-facebook'

const Facebook = (): JSX.Element => {
  const [errorMsg, setErrorMsg] = useState()

  const handleResponse = (data:any):void => {
    console.log(data);
  }
 
  const handleError = (error:any):void => {
    console.log({ error });
  }
 
    return (
      <FacebookProvider
        appId="511095437173808"
        className='p-2 bg-blue rounded-xl'
      >
        <LoginButton
          className='p-2 bg-blue rounded-xl'
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
        >
          <span >Sign in via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    );
}

export default Facebook