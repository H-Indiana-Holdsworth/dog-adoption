import React, { useState } from 'react';
import DogForm from '../Components/DogForm';
import Header from '../Components/Header';
import { createDog } from '../services/service-dogs';

export default function AdminView() {
  const [dog, setDog] = useState({});

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDog(dog);
      alert(`${dog.name} was successfully created`);
    } catch (error) {
      alert(`${dog.name} was not successfully created`);
    }
  };

  return (
    <div>
      <Header />
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogState={updateDogState} />
    </div>
  );
}
