import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends React.Component {
  render(){
    return(
    <div>
    <Navbar bg="light" expand="md" variant="light" fixed="top">
          <Navbar.Brand>Empyrean Trust</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/team"> Team </Nav.Link>
                <Nav.Link href="/story"> Story </Nav.Link>
                <Nav.Link href="/fundraising"> Fundraising </Nav.Link>
                <Nav.Link href="/bd"> Business Development </Nav.Link>
                <Nav.Link href="/admin"> Administrative and Accounting </Nav.Link>

              </Nav>
            </Navbar.Collapse>
    </Navbar>
    </div>
  )
  }
}
