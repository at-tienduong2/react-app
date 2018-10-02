import React from 'react'
import {Link } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'



export default (props) => (
  <div className='dev-nav'>
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/contact">Contact</Link>
      </Header>
    </Container>
    <hr />
  </div>
)
