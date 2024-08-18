import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignInGoogel from '../../components/SignInGoogel'

export default function index() {
    return (
    <GoogleOAuthProvider clientId="230066416380-h7fl23tu82q79ahmr9q0hnb6gj482d0g.apps.googleusercontent.com">
            <SignInGoogel/>
          
    </GoogleOAuthProvider>
  )
}
