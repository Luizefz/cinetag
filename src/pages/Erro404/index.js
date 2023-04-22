import React from 'react'
import styles from './Erro404.module.css'

function Erro404() {
    return (
        <section className={styles.container}>
            <h2>Erro 404</h2>
            <p>O conteúdo que você procura, não existe ou mudou de URL</p>
        </section>
    )
}

export default Erro404