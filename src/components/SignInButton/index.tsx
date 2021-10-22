import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button type='button' className={styles.signInButton}>
      <FaGithub size={20} color='#04d361' />
      Gabriel Bittencourt
      <FiX className={styles.close} size={20} color='#737380' />
    </button>
  ) : (
    <button type='button' className={styles.signInButton}>
      <FaGithub size={20} color='#eba417' />
      Sign In with Github
    </button>
  )
}
