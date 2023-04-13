import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Index";

function AnimatedRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>

    )
}

export default AnimatedRoutes;