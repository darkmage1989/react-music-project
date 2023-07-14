import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import Main from './pages/Main/Main'
import MyTracks from './pages/MyTracks/MyTracks'
import Indy from './pages/Indy/Indy'
import Day from './pages/Day/Day'
import Dance from './pages/Dance/Dance'
import NotFound from './pages/NotFound/NotFound'
import { ProtectedRoute } from './components/Protected-rout/ProtectedRout'
export const AppRoutes = () => {
  const [logged, setLogged] = useState(false)
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(logged)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/MyTracks" element={<MyTracks />} />
        <Route path="/Indy" element={<Indy />} />
        <Route path="/Day" element={<Day />} />
        <Route path="/Dance" element={<Dance />} />
      </Route>
    </Routes>
  )
}
