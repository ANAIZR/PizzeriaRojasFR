import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalSuccess from '../../Components/ModalSuccess';

export default function GestionarPizza() {
    const { id } = useParams();
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/pizza/v1/sizes/')
            .then(response => response.json())
            .then(data => {
                const mappedSizes = data.map(size => ({
                    id: size.value,  
                    name: size.display_name
                }));
                setSizes(mappedSizes);
            })
            .catch(error => console.error('Error fetching sizes:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            pizza: id,  
            size: selectedSize,
            stock: parseInt(stock),
            price: parseFloat(price)
        };

        fetch(`http://127.0.0.1:8000/pizza/v1/details/`)
            .then(response => response.json())
            .then(details => {
                const existingDetail = details.find(detail => detail.pizza === parseInt(id) && detail.size === selectedSize);
                if (existingDetail) {
                    fetch(`http://127.0.0.1:8000/pizza/v1/details/${existingDetail.id}/`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            stock: existingDetail.stock + data.stock,
                            price: data.price
                        })
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Success:', data);
                            setShowModal(true);
                        })
                        .catch(error => {
                            console.error('Error:', error.message);
                        });
                } else {
                    fetch(`http://127.0.0.1:8000/pizza/v1/details/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Success:', data);
                            setShowModal(true);
                        })
                        .catch(error => {
                            console.error('Error:', error.message);
                        });
                }
            })
            .catch(error => console.error('Error fetching details:', error));
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/pizzas');
    };

    return (
        <div>
            <form className="max-w-sm mx-auto p-2 h-96 flex flex-col justify-center" onSubmit={handleSubmit}>
                <label className="block mb-2 text-sm font-medium text-gray-900">Selecciona el tamaño</label>
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                    <option value="">Selecciona un tamaño</option>
                    {sizes.map(size => (
                        <option key={size.id} value={size.name}>{size.name}</option>
                    ))}
                </select>
                <div className="mt-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                    />
                </div>
                <div className="mt-1 mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Registrar Detalle
                </button>
                <div className="flex justify-center mt-2">
                    <Link to="/pizzas">
                        <button
                            type="button"
                            className="text-white bg-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-600"
                        >
                            Cancelar
                        </button>
                    </Link>
                </div>
            </form>
            <ModalSuccess show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}
