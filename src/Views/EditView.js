import React from 'react';
import DogForm from '../Components/DogForm';
import Header from '../Components/Header';
import { useState, useEffect } from 'react';
import { fetchDogs, updateDog } from '../services/service-dogs';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function EditView() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogs(params);
      setDog(resp);
      setLoading(false);
    };
    fetchData();
  }, [params, loading]);

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div>
      <Header />
      <DogForm {...dog} handleSubmit={handleSubmit} />
    </div>
  );
}
