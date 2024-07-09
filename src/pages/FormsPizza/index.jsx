import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ModalSuccess from "../../Components/ModalSuccess";

export default function FormsPizza() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('imagen', image);

        fetch('http://127.0.0.1:8000/pizza/v1/pizzas/', {
            method: 'POST',
            body: formData
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
                console.error('Error:', error);
            });
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/pizzas');
    };

    return (
        <div>
            <form className="max-w-sm mx-auto p-2 h-96 flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Subir imagen</label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5"
                        id="photo_pizza"
                        type="file"
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nombre de la pizza</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Americana"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        id="description"
                        value={description}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Descripción"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Registrar Pizza
                </button>

                <Link to={'/pizzas'}>
                    <div className="flex justify-center mt-2">
                        <button
                            type="button"
                            className="text-white bg-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-red-600"
                        >
                            Cancelar
                        </button>
                    </div>
                </Link>
            </form>
            <ModalSuccess show={showModal} handleClose={handleCloseModal} />
        </div>
    );
}
