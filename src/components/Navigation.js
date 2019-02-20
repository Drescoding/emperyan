import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


export default class Navigation extends React.Component {
  render(){
    return(
    <div>
    <Navbar bg="light" expand="md" variant="light" fixed="top">
      <Container fluid="true">
          <Col><Navbar.Brand>Amina Bashir Memorial Trust</Navbar.Brand></Col>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/photos"> Photos </Nav.Link>
                <Nav.Link href="/facilities"> Facilities </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col>Hello</Col>
      </Container>
    </Navbar>
    </div>
  )
  }
}
