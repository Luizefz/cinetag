import React from 'react'
import styles from './Card.module.css'
import { useFavoritoContext } from 'contexts/Favoritos'
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {

    const { favorito, adicionarFavorito } = useFavoritoContext();

    const favMovie = favorito.some((fav) => fav.id === id);

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img
                    src={capa}
                    alt={titulo}
                    className={styles.capa}
                />
                <h2>{titulo}</h2>
            </Link>

            <input type='checkbox' id={id} onClick={() => adicionarFavorito({ id, titulo, capa })} />
            <label for={id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill={favMovie ? '#FFFFFF' : 'none'} stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </label>

        </div >
    )
}

export default React.memo(Card)