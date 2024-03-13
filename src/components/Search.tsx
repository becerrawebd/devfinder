import { FormEvent, useRef } from 'react'


interface SearchProps {
    fetchUser: (username: string) => Promise<void>
    error: Error | null
}

export default function Search({fetchUser, error}: SearchProps) {
    const ref = useRef<HTMLInputElement>(null)
    
    async function handleSearchUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const userToSearch = ref.current?.value
        fetchUser(userToSearch||'')
    }

    return (
        <form className='bg-white dark:bg-dark-blue p-2 sm:p-3 rounded-lg flex items-center justify-between flex-wrap gap-x-2 gap-y-4 mb-4'  onSubmit={handleSearchUser}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-light-blue" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input id="search" type="search" placeholder='Search GitHub username' className='bg-white dark:bg-dark-blue outline-none grow text-ellipsis px-2 py-2'  ref={ref}/>
            <button className=' text-white bg-light-blue px-3 py-2 rounded-md grow sm:grow-0'>Search</button>
            {error && <span className='text-red-400 grow text-center w-full'>{error.message}</span>}
        </form>
    )
}
