import { SignUp } from '@clerk/clerk-react';
import type { FC } from 'react'
import { useAuth } from '@clerk/clerk-react'

import CopyrightNotice from './Components/CopyrightNotice';

interface LoginPageProps {

}

const LoginPage: FC<LoginPageProps> = ({}) => {
    console.log( useAuth() )
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex-grow flex justify-center items-center'>
                <SignUp />
            </div>
            <CopyrightNotice className='mt-auto' />
        </div>

    )
}

export default LoginPage