import React from 'react'
import styles from './Banner.module.css'
import BannerPic from 'images/banner-home.jpg'

function Banner({ imagem }) {
    return (
        <div
            className={styles.capa}
            style={{ backgroundImage: `url("${BannerPic}")` }}>
        </div>
    )
}

export default Banner