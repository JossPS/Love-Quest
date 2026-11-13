import styles from '../styles/HomeScreen.module.css'
import { GameScene } from './GameScene'

export function HomeScreen() {
    return (
        <main className={styles.home}> 
            <section className={styles.gamepanel}>
                <p className={styles.subtitle}>
                    ✦ Una aventura hecha con amor ✦
                </p>

                <h1 className={styles.title}>
                    Love Quest
                </h1>

                <p className={styles.description}>
                    Un poquito de mi amor para tu
                </p>

                <GameScene />

                <div className={styles.actions}>
                    <button type="button" className={styles.primaryButton}>
                        Jugar
                    </button>

                    <button type="button" className={styles.secondaryButton}>
                        Mis cartas
                    </button>
                </div>

                <p className={styles.progress}>
                    ♡ 0 cartas descubiertas
                </p>
            </section>
        </main>
    )
}