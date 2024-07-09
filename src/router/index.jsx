import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, HomeGerencia, VistaPizza, FormsPizza, GestionarPizza, VerPizzaID } from "../pages";
import { HeaderMenuGerente, HeaderGestionPizza } from "../layouts";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />

                <Route element={<HeaderMenuGerente />}>
                    <Route path="/inicio" element={<HomeGerencia />} />
                   

                </Route>

                <Route element={<HeaderGestionPizza />}>
                    <Route path="/pizzas" element={<VistaPizza />} />
                    <Route path="/forms-pizza" element={<FormsPizza />} />
                    <Route path="/gestion-pizza/:id" element={<GestionarPizza />} />
                    <Route path="/ver-pizza/:id" element={<VerPizzaID />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}