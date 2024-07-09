import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VerPizzaID() {
    const { id } = useParams();
    const [pizzaDetails, setPizzaDetails] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`http://127.0.0.1:8000/pizza/v1/details/${id}/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.pizza && data.pizza.id === parseInt(id)) {
                        setPizzaDetails(data);
                    } else {
                        throw new Error(`No se encontraron datos para la ID ${id}`);
                    }
                })
                .catch(error => {
                    setError(`Error fetching data for ID ${id}: ${error.message}`);
                })
                .finally(() => setLoading(false));
        }
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="p-4">
            {error ? (
                <p>Ocurrió un error: {error}</p>
            ) : (
                <div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Pizza: {pizzaDetails.pizza.name}
                        </label>
                        <input
                            type="text"
                            value={`Precio: $${pizzaDetails.price}`}
                            readOnly
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        />
                        <input
                            type="text"
                            value={`Stock: ${pizzaDetails.stock}`}
                            readOnly
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
