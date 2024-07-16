import { useState } from 'react';
import logo_pizza from '../../assets/logo_pizza.png';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/usuario/v1/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle successful login, e.g., save token, redirect, etc.
        navigate('/inicio');
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <main className="flex flex-col ">
      <section className="flex flex-col items-center justify-center p-2 ">
        <h1 className="text-2xl font-playwrite">Pizzeria Rojas</h1>
        <img className="m-5" src={logo_pizza} alt="Pizzeria Rojas" />
      </section>
      <section className="p-2 flex flex-col items-center">
        <h1 className='text-2xl font-playwrite mb-5'>Iniciar sesión</h1>
        <form className="flex flex-col justify-center " onSubmit={handleOnSubmit}>
          <input name='email' onChange={handleInputChange} placeholder="Ingresa Email" className="focus:outline-none m-2 p-1 border-2 border-green-200 hover:border-green-600 rounded-md" type="email" />
          <input name='password' onChange={handleInputChange} placeholder="*********" type="password" className='focus:outline-none border-green-200 m-2 p-1 border-2 rounded-md hover:border-green-600' />
          <button type="submit" className='bg-green-600 m-2 text-white p-2 rounded-md'>Iniciar sesión</button>
        </form>
      </section>
      <div className="text-center">
        <p>
          ¿No tienes una cuenta? Registrate
        </p>
      </div>
    </main>
  );
}
