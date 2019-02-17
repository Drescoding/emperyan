import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends React.Component {
  render(){
    return(
    <div>
      <Navbar bg="light" expand="md" variant="light" fixed="top">
        <Navbar.Brand>Amina Bashir Memorial Trust</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/photos"> Photos </Nav.Link>
              <Nav.Link href="/facilities"> Facilities </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
  }
}
