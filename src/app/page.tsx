import Link from 'next/link'
import styles from './homePage.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jigsaw Stats</h1>
      <p className={styles.note}>
        Navigate to the Users or Puzzles section by clicking on the desired
        section:
      </p>

      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>Section</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td className={styles.cell}>
              <Link href="/users" className={styles.link}>
                Users
              </Link>
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.cell}>
              <Link href="/puzzles" className={styles.link}>
                Puzzles
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
