import { useState } from 'react'
import logo_pizza from '../../assets/logo_pizza.png'
import { Link } from "react-router-dom";


export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })


  const handleOnSubmit = (e) => {
    console.log(e)
    e.preventDefault()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <main className="flex flex-col ">
      <section className=" flex flex-col items-center justify-center p-2 ">
        <h1 className="text-2xl font-playwrite">Pizzeria Rojas</h1>
        <img className="m-5" src={logo_pizza} />
      </section>
      <section className=" p-2 flex flex-col items-center">
        <h1 className='text-2xl font-playwrite mb-5'>Iniciar sesión</h1>
        <form className="flex flex-col justify-center " onSubmit={handleOnSubmit}>
          <input name='email' onChange={handleInputChange} placeholder="Ingresa DNI" className="focus:outline-none m-2 p-1 border-2 border-green-200 hover:border-green-600 rounded-md" type="text" />
          <input name='password' onChange={handleInputChange} placeholder="*********" type="password" className='focus:outline-none border-green-200 m-2 p-1 border-2 rounded-md hover:border-green-600' />
          <button className='bg-green-600 m-2 text-white p-2 rounded-md'> <Link to={'/inicio'}> Iniciar sesión</Link></button>
        </form>

      </section>
      <div className="text-center">
        <p>
          ¿No tienes una cuenta? Registrate
        </p>
      </div>
    </main>
  )
}
