import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        aliquam semper fringilla. Praesent blandit porttitor nulla. Morbi
        lobortis euismod mi, non venenatis massa blandit sed. Donec hendrerit
        tortor nec sapien mattis posuere. Sed non molestie lectus. Integer
        maximus faucibus odio, ac facilisis ligula feugiat id. Integer ac
        ultrices ante.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
