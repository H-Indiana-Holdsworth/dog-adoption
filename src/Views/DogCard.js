import React from 'react';
import { useEffect, useState } from 'react';
import { getDogsById } from '../services/service-dogs';
import DogDetail from '../Components/DogDetail';
import Header from '../Components/Header';
import { deleteDog } from '../services/service-dogs';

export default function DogCard(props) {
  const [dogCard, setDogCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDogsById(id);
      setDogCard(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(dogCard);
    alert(`${dogCard.name} was successfully deleted`);
  };

  return (
    <div>
      <DogDetail dogCard={dogCard} handleDelete={handleDelete} />
      <Header />
    </div>
  );
}
