import React from 'react';
import { useState } from 'react/cjs/react.development';
import DogForm from '../Components/DogForm';
import { createDog } from '../services/service-dogs';

export default function AdminView() {
  const [dog, setDog] = useState({});

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(dog);
  };

  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogState={updateDogState} />
    </div>
  );
}
