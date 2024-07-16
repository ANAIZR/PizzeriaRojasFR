import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VerPizzaID() {
    const { id } = useParams();
    const [pizzaDetails, setPizzaDetails] = useState([]);
    const [pizzasInfo, setPizzasInfo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            // Fetch pizza details by the pizza ID
            fetch(`http://127.0.0.1:8000/pizza/v1/details/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    const pizzaDetails = data.filter(item => item.pizza === parseInt(id));
                    setPizzaDetails(pizzaDetails);
                    // Fetch the pizza info using the general pizzas endpoint
                    return fetch(`http://127.0.0.1:8000/pizza/v1/pizzas/`);
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setPizzasInfo(data);
                })
                .catch(error => {
                    setError(`Error fetching data for pizza ID ${id}: ${error.message}`);
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
                pizzaDetails.length > 0 && pizzasInfo.length > 0 && (
                    pizzaDetails.map(detail => {
                        const pizzaInfo = pizzasInfo.find(pizza => pizza.id === detail.pizza);
                        return (
                            <div key={detail.id} className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Pizza: {pizzaInfo ? pizzaInfo.name : "N/A"}
                                </label>
                                <input
                                    type="text"
                                    value={`Precio: $${detail.price}`}
                                    readOnly
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                />
                                <input
                                    type="text"
                                    value={`Stock: ${detail.stock}`}
                                    readOnly
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                />
                                <input
                                    type="text"
                                    value={`Tamaño: ${detail.size}`}
                                    readOnly
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                />
                                
                            </div>
                        );
                    })
                )
            )}
        </div>
    );
}
