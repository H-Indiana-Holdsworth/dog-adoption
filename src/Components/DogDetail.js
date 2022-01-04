import React from 'react';

export default function DogDetail({ dogCard }) {
  return (
    <div className="dog-card" key={dogCard.id}>
      <p>
        <img src={dogCard.image} />
      </p>
      {dogCard.name} is a {dogCard.age} year old {dogCard.breed}
      <p>{dogCard.bio}</p>
    </div>
  );
}
