import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from 'pages/Inicio';
import Favoritos from 'pages/Favoritos';
import Player from 'pages/Player';
import Erro404 from 'pages/Erro404';
import PaginaBase from 'pages/Paginabase';
import { Analytics } from '@vercel/analytics/react';


function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<PaginaBase />}>
                        <Route index element={<Inicio />} />
                        <Route path="favoritos" element={<Favoritos />}></Route>
                        <Route path=':id' element={<Player />}></Route>
                        <Route path='*' element={<Erro404 />}></Route>
                    </Route>
                </Routes>
            </Router >
            <Analytics />
        </>
    )
}

export default AppRoutes;