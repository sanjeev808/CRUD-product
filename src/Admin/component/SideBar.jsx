import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <ul className='side-menu'>
        <li><Link to='/admin/products'>Products</Link></li>
        <li><Link to='/admin/products/create'>Add Products</Link></li>
      </ul>
    </div>
  )
}
