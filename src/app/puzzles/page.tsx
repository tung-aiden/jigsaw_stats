'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { User } from '@/types'
import styles from './puzzlePage.module.css'

export default function UsersPage() {
  const [puzzles, setPuzzles] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/puzzles')
      .then((response) => response.json())
      .then((data) => setPuzzles(data))
      .catch((error) => console.error('Error fetching puzzles:', error))
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Puzzles</h1>
      <p className={styles.note}>
        Click on a puzzle ID to see more information.
      </p>
      <div className={styles.detailsBox}>
        {puzzles ? (
          <table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th className={styles.headerCell}>Puzzle ID</th>
              </tr>
            </thead>
            <tbody>
              {puzzles.map((puzzle) => (
                <tr key={puzzle.id} className={styles.row}>
                  <td className={styles.cell}>
                    <Link href={`/puzzles/${puzzle.id}`} className={styles.link}>
                      {puzzle.id}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
