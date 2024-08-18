import { create } from 'zustand'

export const useUserStore = create((set, get) => ({
   user: {}, //user from login
   currentChallenge: {}, // {cards:  [list of ICard{ done: false | true }], name: "challenge name"}
   login: (user) => set({ user }),
   logout: () => set({ user: null }),
   setCurrentChallenge: (data) => {
      // get current deck from server
      set({ currentChallenge: { ...data, cardsOfToday: data.cardsOfToday?.sort((a, b) => a.cardOrder - b.cardOrder) } })

   },
   isDayCompleted: false,
   setIsDayCompleted: () => set(!isDayCompleted),
   setDone: (id) => {
      // get current deck from server
      set((state) => ({
         currentChallenge: {
            ...state.currentChallenge,
            cardsOfToday: state.currentChallenge.cardsOfToday.map(c => c._id == id ? ({ ...c, done: true }) : c
            )
         }
      }))
   },
}))

export const useNotificationStore = create((set, get) => ({
   notifications: [],
   addNotification: (notification) => {
      set((state) => ({ notifications: [...state.notifications, notification] }))
      // set time out to remove notification after 5 seconds
      setTimeout(() => {
         set((state) => ({ notifications: state.notifications.filter((n) => n !== notification) }))
      }, 5000)
   }
}))

export const usePopupStore = create((set, get) => ({
   popup: false,
   setPopup: (popup) => set((state) => ({ popup })),
   message: '',
   setMessage: (message) => set((state) => ({ message })),
   coachMessage: '',
   setCoachMessage: (coachMessage) => set((state) => ({ coachMessage })),
   popups: [],
   pendingPopups: [],
   setPendingPopups: (pendingPopups) => set((state) => ({ pendingPopups })),
   setPopups: (popups) => set((state) => ({ popups })),

}))
