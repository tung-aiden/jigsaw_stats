'use client'
import { Puzzle } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import styles from './puzzleId.module.css'

export default function UserPage() {
  const params = useParams()
  const { puzzleId } = params
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null)

  useEffect(() => {
    fetch(`/api/puzzles/${puzzleId}`)
      .then((response) => response.json())
      .then((data) => setPuzzle(data))
      .catch((error) => console.error('Error fetching puzzle:', error))
  }, [puzzleId])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Puzzle Details</h1>
      {puzzle ? (
        <div className={styles.details}>
          <p>
            <strong>ID:</strong> {puzzle.id}
          </p>
          <p>
            <strong>Size:</strong> {puzzle.size}
          </p>
          <p>
            <strong>Complete:</strong> {puzzle.complete ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Users:</strong> {puzzle.users.join(', ')}
          </p>
          <p>
            <strong>xDimension:</strong> {puzzle.xDimension}
          </p>
          <p>
            <strong>yDimension:</strong> {puzzle.yDimension}
          </p>
          <p>
            <strong>Pieces:</strong>{' '}
            {puzzle.pieces.length > 0 ? puzzle.pieces.join(', ') : 'None'}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
