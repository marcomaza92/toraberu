import Link from 'next/link'
import styles from './layout.module.css'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href={`/`}>
            Homepage
          </Link>
          <Link href={`/places-search`}>
            Places Search
          </Link>
          <Link href={`/about`}>
            What's this
          </Link>
          <Link href={`/login`}>
            Login
          </Link>
          <Link href={`/register`}>
            Register
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>By marcomaza92</footer>
    </div>
  )
}
