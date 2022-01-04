import React from 'react';
import { useEffect, useState } from 'react';
import DogList from '../Components/DogList';
import { fetchDogs } from '../services/service-dogs';
import './Dogs.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  // I know that we've done loading states that are way cooler than this before but I honestly didn't want to just go back and copy it from my other lab so I plan to spend more time trying to understand it a little bit later.
  return (
    <div>
      <DogList dogs={dogs} />
    </div>
  );
}
