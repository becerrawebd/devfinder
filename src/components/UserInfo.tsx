import { IUser } from '../types/types'
import { clsx } from "clsx"
import { formatUTCDate } from "../utils/format_date"

interface UserInfoProps {
    user: IUser | null,
    loading: boolean
}


export default function UserInfo({ user, loading }: UserInfoProps) {

    if (loading || !user) {
        return <div className='flex items-center justify-center py-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat animate-spin w-20 h-20 text-lighter-blue" viewBox="0 0 16 16">
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
            </svg>
        </div>
    }

    const { avatar_url,
        name,
        login,
        created_at,
        public_repos,
        followers,
        following,
        location,
        blog,
        twitter_username,
        company,
        bio,
        html_url
    } = user


    return (
        <div className='grid grid-rows-mobile sm:grid-rows-tablet grid-cols-mobile md:grid-cols-desktop gap-x-2 gap-y-8 bg-white dark:bg-dark-blue rounded-lg px-4 py-8'>
            <img src={avatar_url} className='h-20 sm:h-36 w-20 sm:w-36 md:row-span-2 rounded-full hover:ring hover:ring-lighter-blue hover:ring-offset-2 hover:ring-offset-transparent hover:transition-all duration-500' />
            <div className='flex flex-col justify-center'>
                <h2 className='text-lg font-bold'>{name || 'Name not available'}</h2>
                <a className='block text-light-blue mb-2 hover:text-lighter-blue' href={html_url}>@{login}</a>
                <span>Joined {formatUTCDate(created_at)} </span>
            </div>
            <div className='col-span-2 md:col-start-2'>
                {bio || 'Bio not available'}
            </div>
            <div className='col-span-2 md:col-start-2 flex justify-evenly gap-x-4 gap-y-4 flex-wrap px-6 py-4 bg-gray-100 dark:bg-darkest-blue rounded-lg'>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <span className='block font-light'>Repos</span>
                    <span className='font-bold text-base'>{public_repos}</span>
                </div>

                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <span className='block font-light'>Followers</span>
                    <span className='font-bold text-base'>{followers}</span>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <span className='block font-light'>Following</span>
                    <span className='font-bold text-base'>{following}</span>
                </div>
            </div>
            <div className='col-span-2 md:col-start-2 flex flex-col gap-y-4 flex-wrap'>
                <span className={clsx('flex items-center gap-x-2', {
                    'text-not-available': !location
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill h-6 w-6" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    {location || 'Not available'}
                </span>
                <span className={clsx('flex items-center gap-x-2', {
                    'text-not-available': !blog
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg h-6 w-6" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                    </svg>
                    {blog ? <a href={blog}>{blog}</a> : 'Not available'}
                </span>
                <span className={clsx('flex items-center gap-x-2',
                    {
                        'text-not-available': !twitter_username
                    }
                )}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter h-6 w-6" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                    {twitter_username || 'Not available'}
                </span>
                <span className={clsx('flex items-center gap-x-2', {
                    'text-not-available': !company
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings-fill h-6 w-6" viewBox="0 0 16 16">
                        <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                    </svg>
                    {company || 'Not Available'}
                </span>
            </div>
        </div>
    )
}
