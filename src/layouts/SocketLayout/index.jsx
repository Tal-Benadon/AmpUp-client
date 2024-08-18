import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNotificationStore } from '../../store'
import { socket } from '../../socket'
import { useEffect } from 'react'



export default function SocketLayout() {
  // מתחבר לסוקט, שולח טוקן וחדר ומקשיב לOn

  const notification = useNotificationStore(state => state.notifications)
  const addNotification = useNotificationStore(state => state.addNotification)

  // useEffect(() => {
  //   socket.connect()
  //   socket.on('connect', () => {
  //     console.log(socket.id);
  //     console.log('connect')
  //   })
  //   socket.on('notification', (data) => {
  //     addNotification(data)
  //     console.log('notification', data)
  //   })
  //   return () => {
  //     socket.off('connect')
  //     socket.off('notification')
  //   }
  // }, [])




  return (

    <Outlet />
  )
}