import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from 'pages/Inicio';
import Favoritos from 'pages/Favoritos';
import Rodape from 'components/Rodape';
import Cabecalho from 'components/Cabecalho';
import Container from 'components/Container';


function AppRoutes() {
    return (
        <Router>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                </Routes>
            </Container>
            <Rodape />
        </Router >

    )
}

export default AppRoutes;