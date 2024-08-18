import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import SocketLayout from "./layouts/SocketLayout"
import CantFindChallenge from './pages/CantFindChallenge'
import ContactUs from "./pages/ContactUs"
import Deck from "./pages/Deck"
import Home from "./pages/Home"
import Reward from "./pages/Reward/index"
import TeamScreen from "./pages/TeamScreen/index"
import TeamStore from "./pages/TeamStore"
import UserProfile from "./pages/UserProfile"
import WelcomeScreen from "./pages/WelcomeScreen"
import WelcomeScreenLoading from "./pages/WelcomeScreenLoading"
import { testRoutes } from "./test"
import Yosef from "./test/Yosef"
import DeckLayout from "./layouts/DeckLayout"
import Archive from "./pages/Archive"
import ArchiveSingleCard from "./pages/ArchiveSingleCard"



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <WelcomeScreenLoading /> },
      { path: 'invited/:activeChallengeId', element: <TeamScreen /> },
      { path: 'TeamScreen', element: <TeamScreen /> },
      { path: 'TeamStore/:activeChallengeId', element: <TeamStore /> },
      { path: 'CantFindChallenge', element: <CantFindChallenge /> },
      { path: 'login', element: <WelcomeScreen /> },
      { path: 'contact-us', element: <ContactUs /> },
      {
        path: 'archive', 
        children: [
          { index: true, element: <Archive /> },
          { path: ':challengId/:cardId', element: <ArchiveSingleCard /> },
        ]
      },
      {
        path: 'challenge',  children: [
          { index: true, element: <Yosef /> },
          {
            path: ':activeChallengeId',
            element: <DeckLayout />,
            children: [
              { path: 'reward', element: <Reward /> },
              { index: true, element: <Home /> },
              { path: ':cardId', element: <Deck /> }
            ]
          }
        ]
      },
      { path: 'welcome', element: <WelcomeScreen /> },
      { path: 'reward/:activeChallengeId', element: <Reward /> },
      { path: 'profile', element: <UserProfile /> },
      { path: 'test', element: <SocketLayout />, children: testRoutes }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
