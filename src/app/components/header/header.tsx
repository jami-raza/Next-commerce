import React from 'react'

const Header = () => {
  return (
    <div className='container flex justify-between'>
        <div className='logo'>
            <h2>Tees</h2>
        </div>
        <div className='nav-menu'>
            <ul className='flex justify-end gap-x-6'>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Categories</li>
            </ul>
        </div>
    </div>
  )
}

export default Header