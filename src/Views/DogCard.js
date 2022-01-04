import React from 'react';
import { useEffect, useState } from 'react';
import { getDogsById } from '../services/service-dogs';
import DogDetail from '../Components/DogDetail';

export default function DogCard(props) {
  const [dogCard, setDogCard] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDogsById(id);
      setDogCard(resp);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <DogDetail dogCard={dogCard} />
    </div>
  );
}
