import React from 'react'
import Link from 'next/link'

import { menus } from '@/_variables'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {menus.map((item, index) =>
          <li key={index} className="sidebar-list__item">
            <Link href={item.href}>
              <a className="sidebar-list__link">{item.title}</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Sidebar