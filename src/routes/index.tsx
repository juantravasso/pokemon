import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pokemons from "../pages/Pokemons";

const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemons" element={<Pokemons />} />
        </Routes>
    </Router>
);

export default AppRoutes;