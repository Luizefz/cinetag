import { Link } from "react-router-dom"
import Logo from "images/Fear-bro.svg"
import styles from "./Cabecalho.module.css"
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img draggable='false' src={Logo} alt="Logo do cinetag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;