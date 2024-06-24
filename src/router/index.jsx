import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, InventarioPage, HomeGerencia } from "../pages";
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
                    <Route path="/inventario" element={<InventarioPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}