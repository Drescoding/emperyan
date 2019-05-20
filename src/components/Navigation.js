import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" variant="light" fixed="top">
          <Navbar.Brand href="/">Empyrean Trust</Navbar.Brand>
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
        </Navbar>
      </div>
    )
  }
}
