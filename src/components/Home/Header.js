import React from 'react'
import './Header.css';

 function Header() {
  return (
    <header>
    <div className='container'>
        <div className='col-md-6'>
            <h2>Good food choices are good investments.</h2>
            <p>you will find the best meals with the best prices</p>
            <button>order now</button>
            <button>learn more</button>
        </div>
        <div className='col-md-6'></div>
    </div>
    </header>

  )
}
export default  Header;
