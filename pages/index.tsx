import Head from 'next/head'
import Link from 'next/link'


import { Inter } from '@next/font/google'
import next from 'next'
// import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="">
            <p>Sign in</p>
          </div>
          <div className=" text-white round"></div>
        </div>
      </main> */}

      <div className='min-h-full flex items-center justify-center my-12 px-4 5m:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
            <p className='mt-2 text-center text-5m text-gray-600'>
              Or
              
               <a href="#" className='font-medium text-indigo-600 hover:text-indigo-500 px-2'> Sign Up</a>
               </p>
          </div>
          <form className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <input type="text" autoComplete='none' required className='appearance-none rounded-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus-outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='User name' />
              </div>
              <div>
                <input type="password" autoComplete='none' required className='appearance-none rounded-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md mb-2 focus-outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'placeholder='password' />
              </div>
            </div>
            {/* forget password */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input type="checkbox" className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded' />
                  <label className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>

                <div className='text'>
                  <a href="#" className='font-medium text-indigo-600 hover:text-indigo-500'> Forgot your password</a>
                </div>
            </div>

            {/* button code */}
            <div>
              <Link href="/Task">
              <button className='goup-relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500' >Sign in</button>
              </Link>
              
            </div>

          </form>

        </div>
      </div>
    </>
  )
}
