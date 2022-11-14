import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header>
      <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
          <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <a href={'/'}>Home</a>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <a href={'/about'}>About</a>
          </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
          <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
      </nav>
    </header>
  )
}
