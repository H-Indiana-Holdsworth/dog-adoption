import React from 'react';
import DogForm from '../Components/DogForm';
import Header from '../Components/Header';
import { useState, useEffect } from 'react';
import { getDogsById, updateDog } from '../services/service-dogs';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function EditView() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDogsById(params.id);
      setDog(resp);
      setLoading(false);
    };
    fetchData();
  }, [params.id, loading]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(dog);
    alert(`${dog.name} was successfully updated!`);
  };

  return (
    <div>
      <Header />
      <DogForm {...dog} updateDogState={updateDogState} handleSubmit={handleSubmit} />
    </div>
  );
}
