import React, { Component } from 'react'
import './Header.css';
export default class header extends Component {
  render() {
    return (
     <header>
         <div className='container'>
            <nav className='navbar'>
                <a href='#' className='logo'>Counter</a>
                <menu className='menu'>
                    <ul className='primary-menu'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </menu>
            </nav>
         </div>
     </header>
    )
  }
}
