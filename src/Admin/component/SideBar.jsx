import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <ul className='side-menu'>
        <li><Link to='/admin/products'>User</Link></li>
        <li><Link to='/admin/products/create'>Add user</Link></li>
      </ul>
    </div>
  )
}
