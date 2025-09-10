import type { FC } from 'react'

import TopBar from './Components/TopBar';
import CopyrightNotice from './Components/CopyrightNotice';

interface PageNotFoundPageProps {

}

const PageNotFoundPage: FC<PageNotFoundPageProps> = ({}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div className='flex-grow'>
        <TopBar/>
        <div className='text-center p-50'>
          <h1 className='text-8xl'>Page not found.💀</h1>
          <h3 className='p-3'>
              This page wasn't found on our server. If you encountered this while navigating through the website, go yell at Milo, email them at milo.silverstein@synapseschool.org, or{' '}
              <a href='https://github.com/Rufis72/signgroup/issues/new' className='underline'>
                  create an issue on the Github repo.
              </a>
          </h3>
        </div>
      </div>
      <CopyrightNotice />
    </div>
  )
}

export default PageNotFoundPage
