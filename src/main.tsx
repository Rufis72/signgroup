import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import Home from './Home.tsx'
import PageNotFound from './404.tsx'
import Login from './Login.tsx'
import Account from './Account.tsx'

// importing the Clerk publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// throwing an error if we don't have the Clerk publishable key
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <Routes>
        {/*Both / and /home go to the same spot, I just couldn't find a nice way to put it on one line*/}
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />

        <Route path='login' element={<Login />} />

        <Route path='account' element={<Account />} />

        {/* 404 page*/}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
)
