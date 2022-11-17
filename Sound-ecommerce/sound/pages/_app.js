import React from 'react';
import { Display } from '../components';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    
   <Display>
     <Component {...pageProps} />
   </Display>
   
     

  )
}

export default MyApp