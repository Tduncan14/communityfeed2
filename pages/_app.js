import '../styles/globals.css'
import Header from '../components/Header';
import { createGlobalStyle } from 'styled-components';




const GlobalStyle = createGlobalStyle `
body{
  margin:0;
  padding:0;
  font-family: "Segoe UI", "Roboto", "Oxygen","Ubuntu",  
   "Cantarell", "Fira Sans", "Droid Sans",
   "Helvetica Neue", sans-serif;  
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
}

`

  function MyApp({Component,pageProps}){

    return(
      <>
      <GlobalStyle />
      <Header/>
      <Component {...pageProps} />
      
      </>
    )

  }



  export default MyApp

