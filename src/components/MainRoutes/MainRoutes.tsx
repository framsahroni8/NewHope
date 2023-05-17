import { Routes, Route, Navigate } from 'react-router-dom'

import { Contact, GoFoodPage, GrabFood, Home, LocationPage, MenuPage, NotFound, OrderPage, ShopeeFood } from 'pages'
import { Menu, PublicRoutes } from 'components'
import { ContactUs } from 'components/ContactUs'



const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='/' element={<PublicRoutes />}>
      <Route path='/' element={<Navigate to='home'replace/>} />
      <Route path='home' element={<Home />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='locations' element={<LocationPage />} />
      <Route path='order' element={<OrderPage />} />
      <Route path='GoFood' element={<GoFoodPage/> } />
      <Route path='GrabFood' element={<GrabFood/>} />
      <Route path='ShopeeFood' element={<ShopeeFood />} />
    </Route>
    {/** Permission denied route */}
    <Route path='/denied' element={<NotFound />} />
  </Routes>
)

export default MainRoutes
