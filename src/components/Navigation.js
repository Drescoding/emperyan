import React from 'react'

class Navigation extends React.Component {
  render(){
    return(
    <div id='nav-bar'>
      <h1>Amina Bashir Memorial Trust</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/photos"> Photos </a>
        <a href="/facilities"> Facilities </a>
      </nav>
    </div>)
  }
}

export default Navigation
