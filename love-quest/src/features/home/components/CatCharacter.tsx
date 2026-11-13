
import styles from '../styles/CatCharacter.module.css'
import whiteCat from '../../../assets/sprites/cats/white-cat.png'
import grayCat from '../../../assets/sprites/cats/gray-cat.png'

type CatCharacterProps = {
  variant: 'white' | 'gray'
  name: string
}

const catImages = {
  white: whiteCat,
  gray: grayCat,
}

export function CatCharacter({
  variant,
  name,
}: CatCharacterProps) {
  return (
    <img
      src={catImages[variant]}
      alt={name}
      className={styles.character}
      width={120}
      height={120}
      draggable={false}
    />
  )
}
