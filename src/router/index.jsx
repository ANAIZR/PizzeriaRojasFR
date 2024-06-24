import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, InventarioPage, HomeGerencia } from "../pages";
import { Header } from "../layouts";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/inicio" element={<HomeGerencia />} />

                <Route element={<Header />}>
                    <Route path="/inventario" element={<InventarioPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}