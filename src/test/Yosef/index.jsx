import React from 'react'
import styles from './style.module.scss'
import { useUserStore } from '../../store'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button'

export default function Yosef({ type = 'book' }) {
   const user = useUserStore(state => state.user)
   if (!user) return 'loading...'


   const activeChallenges = user?.myActivChallenge || []
   const invites = user?.member?.invites || []

   return (
      <div className={styles.all}>
         <h2>active challenges</h2>
         <ul>
            {activeChallenges.map(challenge => <li key={challenge}>
               <NavLink to={`/challenge/${challenge}`}>
                  <Button>
                     {challenge}
                  </Button>
               </NavLink>
            </li>)}
         </ul>
         <h2>invites</h2>
         <ul>
            {invites.map(challenge => <li key={challenge}>
               <NavLink to={`/invited/${challenge}`}>
                  <Button>
                     {challenge}
                  </Button>
               </NavLink>
            </li>)}
         </ul>

      </div>
   )
}
