'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { User } from '@/types'
import styles from './userPage.module.css'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error))
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <p className={styles.note}>Click on a user ID to see more information.</p>
      {users ? (
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>User ID</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={styles.row}>
                <td className={styles.cell}>
                  <Link href={`/users/${user.id}`} className={styles.link}>
                    {user.id}
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
  )
}
