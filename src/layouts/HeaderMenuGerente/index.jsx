import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div>
            <header className="m-2">
                <nav className="bg-white border-gray-200 px-4  ">
                    <div className="flex  justify-between items-center mx-auto max-w-screen-xl">
                        <Link to={'/inicio'} className="flex items-center">
                            <span className="self-center text-sm font-semibold whitespace-nowrap ">Anaiz Rojas</span>
                        </Link>
                        <div className="flex items-center ">
                            <button type="button" className="text-white inline-flex items-center p-2 ml-1 text-sm  rounded-lg bg-red-600 " >
                                <Link to={'/'}> Cerrar sesión</Link>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}
