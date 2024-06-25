import { Link } from "react-router-dom"

export default function GestionarPizza() {
    return (

        <form className="max-w-sm mx-auto p-2 h-96 flex flex-col  justify-center">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Selecciona el tamaño</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">

                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
            </select>
            <div className="mt-1">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                <input type="number" id="stock" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
            </div>
            <div className="mt-1 mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                <input type="number" id="price" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
            </div>
            <button type="button" className="text-white bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Registrar Detalle</button>
            <div className="flex justify-center mt-2">
                <Link to="/pizzas">
                    <button type="button" className="text-white bg-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-600">Cancelar</button>
                </Link>
            </div>
        </form>
    )
}
