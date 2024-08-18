import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { apiRequest } from '../../api/apiRequest';
import HeaderPhone from '../../components/HeaderPhone';
import WelcomeScreenLoading from '../../pages/WelcomeScreenLoading';
import { useUserStore } from '../../store';

export default function MainLayout() {
  const nav = useNavigate()
  const login = useUserStore(state => state.login);
  const user = useUserStore(state => state.user);
  const [loading, setLoading] = useState()


  // בדיקה אם יש טוקן
  useEffect(() => {
    if (localStorage.token && !user?.member?.email) {
      setLoading(true)
      const fetchData = async () => {
        try {
          const data = await apiRequest({ method: 'get', path: '/member/token/toMember' })
          login(data)
          if (data.myActivChallenge.length > 0) //TODO - delete this
            nav(`/challenge/${data.myActivChallenge?.[0]}`)
          if (data.invites.length > 0) {
            nav(`/invited/${data.invites?.[0]}`)
          }
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      fetchData()
    } else {
      nav('/login')
    }
  }, []);

  return (
    <div className='pageLayout'>
      <HeaderPhone />
      {loading ?
        <WelcomeScreenLoading /> :
        <Outlet />
      }
    </div>
  )
}
