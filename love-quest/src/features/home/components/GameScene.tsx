
import { CatCharacter } from './CatCharacter'
import styles from '../styles/GameScene.module.css'

export function GameScene() {
  return (
    <div className={styles.scene}>
      <div className={styles.sky} aria-hidden="true">
        <span className={styles.cloudLeft} />
        <span className={styles.cloudRight} />
      </div>

      <div className={styles.decorations} aria-hidden="true">
        <span className={styles.treeLeft}>🌸</span>
        <span className={styles.treeRight}>🌸</span>
      </div>

      <div className={styles.characters}>
        <CatCharacter variant="white" name="Gatita blanca" />
        <span className={styles.heart} aria-hidden="true">
          ♥
        </span>
        <CatCharacter variant="gray" name="Gatito gris" />
      </div>

      <div className={styles.ground} aria-hidden="true" />
    </div>
  )
}
