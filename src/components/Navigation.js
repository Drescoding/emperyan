import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './views/logo.png'

export default class Navigation extends React.Component {
  render() {
    return (
      <div >
        <Navbar bg="light" variant="light" fixed="top">
          <Navbar.Brand href="/">
          <img id="centered_image" src={logo} alt="logo"/>
          </Navbar.Brand>
          <div className="center-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/fundraising">
                <i class="material-icons">
                  face
                </i>
               </Nav.Link>

              <Nav.Link href="/growth_hacking">
                <i class="material-icons">
                  lock_open
                </i>
              </Nav.Link>
              <Nav.Link href="/case_studies">
                <i class="material-icons">
                  extension
                </i>
              </Nav.Link>
              <Nav.Link href="/contact_us">
                <i class="material-icons">
                  send
                </i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}
