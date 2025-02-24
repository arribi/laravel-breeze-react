import { useEffect, useState } from 'react';
// import axios from 'axios';
import axios from '../lib/axios'; // Importa credenciales desde el archivo axios.js

// // Configuración global de axios para incluir credenciales y token CSRF
// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

const AsociationsList = () => {
  const [asociations, setAsociations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAsociations = async () => {
    try {
      const response = await axios.get('https://arribiapi.informaticamajada.es/api/asociations');
      console.log("API Response:", response.data);
      setAsociations(response.data.data); //Ojo porque sin Orion no devuelve data
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsociations();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <ul className="space-y-4">
        {asociations.map((association) => (
          <li key={association.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{association.name}</h2>
            <p className="mb-2">{association.description}</p>
            <p className="mb-2"><strong>Email:</strong> {association.email}</p>
            <p className="mb-2"><strong>Teléfono:</strong> {association.phone}</p>
            <p className="mb-2"><strong>Dirección:</strong> {association.address}, {association.city}, {association.country}</p>
            <hr className="mt-4" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsociationsList;