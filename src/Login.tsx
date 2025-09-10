import { SignIn } from '@clerk/clerk-react';
import type { FC } from 'react'

import CopyrightNotice from './Components/CopyrightNotice';

interface LoginPageProps {

}

const LoginPage: FC<LoginPageProps> = ({}) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-grow flex justify-center items-center'>
                <SignIn />
            </div>
            <CopyrightNotice className='mt-auto' />
        </div>

    )
}

export default LoginPage