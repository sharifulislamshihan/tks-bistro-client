import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
// helmet
import { HelmetProvider } from 'react-helmet-async';

// react router
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className=" relative bg-cover bg-fixed bg-center min-h-screen" style={{
          backgroundImage: `url(https://i.ibb.co/HXj3k2M/black-cracked-textured-wall-background.jpg)`
        }}>
          <div className='mx-3 md:mx-10'>
            <RouterProvider router={router} />
          </div>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
