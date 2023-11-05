import React from 'react'
import { Navigate, Outlet, Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { useEffect } from 'react'
import axiosClient from '../axios-client'
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

  return (
    <div id="defaultLayout">
      <aside>
      <Link to="/dashboard">
        <div className="icon-text-container">
          <HomeIcon />
          <span>Home</span>
        </div>
      </Link>

      <Link to="/books">
        <div className="icon-text-container">
          <LibraryBooksIcon />
          <span>Books</span>
        </div>
      </Link>

      <Link to="/notifications">
        <div className="icon-text-container">
          <NotificationsActiveIcon />
          <span>Notifications</span>
        </div>
      </Link>
      
      <Link to="/profile">
        <div className="icon-text-container">
          <AccountCircleRoundedIcon />
          <span>Profile</span>
        </div>
      </Link>
      </aside>
      <div className="content">
        <header>
          <div className='username-container'>
          {user.name} &nbsp; &nbsp;
          </div>

          <div>
            <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
        {notification &&
          <div className="notification">
            {notification}
          </div>
        }
      </div>
    </div>
  )
}
