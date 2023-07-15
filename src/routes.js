import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import Main from './pages/Main/Main'
import MyTracks from './pages/MyTracks/MyTracks'
import NotFound from './pages/NotFound/NotFound'
import Category from './pages/Category/Category'
import { ProtectedRoute } from './components/Protected-rout/ProtectedRout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Main />} />
        <Route path="/MyTracks" element={<MyTracks />} />
        <Route path="/Category/:url" element={<Category />} />
      </Route>
    </Routes>
  )
}
