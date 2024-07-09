import { Link } from 'react-router-dom';
import users from '../../../assets/users.png';

export default function HomeGerente() {
  return (
    <section className="border-2  flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="relative bg-cover bg-center h-40 w-40 flex items-center justify-center"
          style={{ backgroundImage: `url(${users})` }}
        >
          <button className="m-2 p-2 border-2 border-red-600 rounded-md bg-white bg-opacity-70">
            Gestionar Empleados
          </button>
        </div>
        <div
          className="relative bg-cover bg-center h-40 w-40 flex items-center justify-center"
          style={{ backgroundImage: `url(${users})` }}
        >
          <Link to={'/pizzas'}>
            <button className="m-2 p-2 border-2 border-red-600 rounded-md bg-white bg-opacity-70">
              Gestionar Pizza
            </button>
          </Link>

        </div>
        <div
          className="relative bg-cover bg-center h-40 w-40 flex items-center justify-center"
          style={{ backgroundImage: `url(${users})` }}
        >
          <button className="m-2 p-2 border-2 border-red-600 rounded-md bg-white bg-opacity-70">
            Gestionar Ventas
          </button>
        </div>
      </div>
    </section>
  );
}
