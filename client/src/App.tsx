import React, { useCallback, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './App.module.css'
import { ReactComponent as SeeMore } from './SeeMore.svg'

export const App = () => {
  const [dimension, setDimension] = useState<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight - 80,
  })

  const [id, setId] = useState<string | undefined>(undefined)

  const loadNext = useCallback(() => {
    setId(undefined)

    fetch('/find-random-video')
      .then((response) => response.json())
      .then((data) => setId(data.id))
      .catch((error) => {
        console.log('error', error)
        setTimeout(() => {
          loadNext()
        }, 2000)
        // location.reload()
      })
  }, [])

  useEffect(() => {
    loadNext()
  }, [loadNext])

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight - 80 })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <>
      <div className={styles.header}>unbubble</div>
      <div style={{ background: 'black', height: dimension.height }}>
        {id && (
          <ReactPlayer
            controls
            playing
            height={dimension.height}
            width={dimension.width}
            url={`https://www.youtube.com/watch?v=${id}`}
            onEnded={loadNext}
            onError={loadNext}
          />
        )}
      </div>
      <div className={styles.descriptionContainer}>
        <SeeMore className={styles.seeMore} />
        <div className={styles.description}>
          <p>This is an experiment on exploring videos you wouldn't otherwise see in YouTube.</p>
          <p>If you leave it open, you will continue to experience new content as it goes.</p>

          <p>
            Built for fun by{' '}
            <a target="_blank" href="https://paulo.ragonha.me">
              Paulo Ragonha
            </a>
            .
          </p>

          <p>
            Learn more at the{' '}
            <a target="_blank" href="https://github.com/pirelenito/unbubble">
              Project's GitHub Page
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
