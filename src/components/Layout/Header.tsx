import React from 'react'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <svg className={styles.svg} viewBox="0 0 2 3" aria-hidden="true">
          <path className={styles.path} d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul className={styles.ul}>
          <li
            className={
              (pathname === '/' ? styles.active + ' ' : '') + styles.li
            }
          >
            <a className={styles.a} href={'/'}>
              Home
            </a>
          </li>
          <li
            className={
              (pathname === '/about' ? styles.active + ' ' : '') + styles.li
            }
          >
            <a className={styles.a} href={'/about'}>
              About
            </a>
          </li>
        </ul>
        <svg className={styles.svg} viewBox="0 0 2 3" aria-hidden="true">
          <path className={styles.path} d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
      </nav>
    </header>
  )
}
