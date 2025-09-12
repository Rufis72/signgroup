import { UserProfile } from '@clerk/clerk-react'
import TopBar from './Components/TopBar'

const AccountPage = () => <div className='cent'>
    <TopBar />
        <div className='flex justify-center items-center'>
            <UserProfile />
        </div>
    </div>

export default AccountPage