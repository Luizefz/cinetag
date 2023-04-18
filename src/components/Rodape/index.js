import React from 'react'
import styles from './Rodape.module.css'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h2>Desenvolvido por Luiz. {Date.now}</h2>
        </footer>
    )
}

export default Rodape