import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserInfo from './components/UserInfo'
import { useUser } from './hooks/useUser'
import { ThemeType } from './types/types'

function App() {
  const { user, fetchUser, loading, error } = useUser('becerrawebd')
  const [theme,setTheme] = useState<ThemeType>('dark')

  return (
    <div className='mx-auto w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-2/5 my-8'>
      <Header theme={theme} setTheme={setTheme}/>
      <Search fetchUser={fetchUser} error={error} />
      <UserInfo loading={loading} user={user} />
    </div>
  )
}

export default App
