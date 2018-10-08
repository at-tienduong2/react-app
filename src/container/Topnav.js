import React from 'react'
import {Link } from "react-router-dom"
import { Container, Header } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import Logo from './../components/PageLogo';


export default (props) => (
  <div className='dev-nav'>
    <Container>
      <Header className="header-top d-flex">
        <div className="header-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="menu-left-part main-menu justify-around d-flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/diary">Diary</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="menu-part justify-around d-flex">
            <Button.Content visible>
              <Icon name='shop' />
              <Icon name='search' />
              <Icon name='language' />
            </Button.Content>
        </div>
      </Header>
    </Container>
  </div>
)
