import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className="justify-content-center">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header