import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import HomeScreen from './pages/HomeScreen'
import Tela2Screen from './pages/Tela2Screen'

import { Container, Menu, PageBody } from './AppStyled'

import MenuItem from './components/MenuItem'
import PrivateRoute from './components/PrivateRoute'
import Cart from './components/Cart'
import ReactTooltip from 'react-tooltip'

export default () => {
  const name = useSelector(state => state.user.name)

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem
            title="Meu Perfil"
            icon="/assets/profile.png"
            link="/profile"
          />
        </Menu>

        <PageBody>
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route path="/orders" element="ola"></Route>
            <Route path="/profile" element="ola2"></Route>
            <Route path="/tela2/:nome" element={<Tela2Screen />}></Route>
          </Routes>
        </PageBody>

        <Cart />

        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  )
}
