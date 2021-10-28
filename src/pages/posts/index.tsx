import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href=''>
            <time>28 de outubro de 2021</time>
            <strong>Creating a Monorepo with Learna & Yarn Workspace</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicin.</p>
          </a>
          <a href=''>
            <time>28 de outubro de 2021</time>
            <strong>Creating a Monorepo with Learna & Yarn Workspace</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicin.</p>
          </a>
          <a href=''>
            <time>28 de outubro de 2021</time>
            <strong>Creating a Monorepo with Learna & Yarn Workspace</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicin.</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'p')],
    {
      fetch: ['p.title', 'p.content'],
      pageSize: 100,
    }
  )

  console.log(response)

  return {
    props: {},
  }
}
