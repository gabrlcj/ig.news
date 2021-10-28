import Image from 'next/image'

import { SignInButton } from '../SignInButton'

import logoImg from '/public/images/logo.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt='ig.news' />
        <nav>
          <a className={styles.active} href=''>
            Home
          </a>
          <a href='/posts'>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
