import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class Navigation extends React.Component {
  render(){
    return(
    <div>
    <Navbar bg="light" expand="lg" variant="light" fixed="top">
          <Navbar.Brand href="/">Empyrean Trust</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/fundraising"> Fundraising </Nav.Link>
                <Nav.Link href="/business_consulting"> Business Consulting </Nav.Link>
                <Nav.Link href="/case_studies"> Case studies</Nav.Link>
                <Nav.Link href="/team"> Team </Nav.Link>
                <Nav.Link href="/contact_us"> Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
    </Navbar>
    </div>
  )
  }
}
