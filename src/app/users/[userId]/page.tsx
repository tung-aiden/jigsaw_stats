'use client'
import { User } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import styles from './userId.module.css'

export default function UserPage() {
  const params = useParams()
  const { userId } = params
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user:', error))
  }, [userId])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Details</h1>
      {user ? (
        <div className={styles.details}>
          {/* Main User Information */}
          <div className={styles.primaryInfo}>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Last Login:</strong>{' '}
              {new Date(user.lastLogin).toLocaleString()}
            </p>
          </div>
          <hr className={styles.divider} />

          {/* Active Puzzles */}
          <p>
            <strong>Active Puzzles:</strong>{' '}
            {user.activePuzzles?.join(', ') || 'None'}
          </p>

          {/* Favorite Puzzles */}
          <p>
            <strong>Favorite Puzzles:</strong>
          </p>
          {user.favoritePuzzles?.map((favorite, index) => (
            <div key={index} className={styles.favoritePuzzle}>
              <p>
                <strong>Puzzle ID:</strong> {favorite.puzzleId}
              </p>
              <p>
                <strong>Rank:</strong> {favorite.rank}
              </p>
              <p>
                <strong>Times Played:</strong> {favorite.timesPlayed}
              </p>
            </div>
          )) || <p>None</p>}

          {/* Total Playing Time */}
          <hr className={styles.divider} />
          <p>
            <strong>Total Playing Time:</strong> {user.totalPlayingTime} minutes
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
