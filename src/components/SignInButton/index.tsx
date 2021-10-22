import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signin, signout, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button type='button' className={styles.signInButton} onClick={() => signout()}>
      <FaGithub size={20} color='#04d361' />
      {session.user.name}
      <FiX className={styles.close} size={20} color='#737380' />
    </button>
  ) : (
    <button type='button' className={styles.signInButton} onClick={() => signin('Github')}>
      <FaGithub size={20} color='#eba417' />
      Sign In with Github
    </button>
  )
}
