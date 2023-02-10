import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getCompletion } from './openai'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  return (
    <main className={styles.main}>

    </main>
  )
}
