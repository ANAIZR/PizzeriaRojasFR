import { Link } from "react-router-dom";

export default function FormsPizza() {
    return (


        <form className="max-w-sm mx-auto p-2 h-96 flex flex-col  justify-center ">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 d" >Subir imagen</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  p-2.5 " id="photo_pizza" type="file" />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Nombre de la pizza</label>
                <input type="text" id="name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   " placeholder="Americana" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Descripción</label>
                <input type="text" id="description" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Descripción" required />
            </div>
            <button type="button" className="text-white bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Registrar Pizza</button>
            <div className="flex justify-center mt-2">
                <Link to="/pizzas">
                    <button type="button" className="text-white bg-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-600">Cancelar</button>
                </Link>
            </div>

        </form>

    )
}
