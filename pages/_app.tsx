import '../styles/globals.css'
// import "../styles/tailwind.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <div className='h-screen text-center text-center text-black bg-gray-600'><Component {...pageProps} /></div>) 
}



