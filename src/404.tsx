import type { FC } from 'react'

import TopBar from './Components/TopBar';

interface PageNotFoundPageProps {

}

const PageNotFoundPage: FC<PageNotFoundPageProps> = ({}) => {
  return (
    <div>
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
  )
}

export default PageNotFoundPage
