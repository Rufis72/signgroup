import { SignIn } from '@clerk/clerk-react';
import type { FC } from 'react'

interface LoginPageProps {

}

const LoginPage: FC<LoginPageProps> = ({}) => {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <SignIn/>
            </div>
        </div>
    )
}

export default LoginPage