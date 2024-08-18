import React, { useEffect } from 'react'
import { apiRequest } from '../../api/apiRequest'
import { useUserStore } from '../../store'
import { Outlet, useParams } from 'react-router-dom'

export default function DeckLayout() {
   const setCurrentChallenge = useUserStore(state => state.setCurrentChallenge)
   const currentChallenge = useUserStore(state => state.currentChallenge)
   const { activeChallengeId } = useParams()
   const isDayCompleted = useUserStore(state => state.isDayCompleted)

   useEffect(() => {
      apiRequest({ method: "GET", path: `/activeChallenge/status/${activeChallengeId}` })
         .then(data => { setCurrentChallenge(data) })
         .catch(console.error)

   }, [isDayCompleted])

   return (
      <>
         {!currentChallenge?.coach ? 'loading...' : <Outlet />}
      </>
   )
}
