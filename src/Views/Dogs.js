import React from 'react';
import { useEffect, useState } from 'react';
import DogList from '../Components/DogList';
import { fetchDogs } from '../services/service-dogs';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
