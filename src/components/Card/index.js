import React, { useState } from 'react'
import styles from './Card.module.css'
import HeartIcon from './heart.svg'

function Card({ id, titulo, capa }) {

    const [favMovie, setFavMovie] = useState(false)

    return (
        <div className={styles.container}>
            <img
                src={capa}
                alt={titulo}
                className={styles.capa}
            />
            <h2>{titulo}</h2>

            <input type='checkbox' id={id} onClick={() => setFavMovie(!favMovie)} />
            <label for={id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill={favMovie ? '#000000' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </label>

        </div >
    )
}

export default Card