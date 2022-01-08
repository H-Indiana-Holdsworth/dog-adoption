import React from 'react';
import { Link } from 'react-router-dom';
import './DogDetail.css';

export default function DogDetail({ dogCard, handleDelete }) {
  return (
    <>
      <div className="dog-card" key={dogCard.id}>
        <h2>Meet {dogCard.name}</h2>
        <p>
          <img className="dog-img" src={dogCard.image} />
        </p>
        {dogCard.name} is a {dogCard.age} year old {dogCard.breed}
        <p>{dogCard.bio}</p>
      </div>

      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>

      <Link to={`/dogs/${dogCard.id}/edit`} className="edit-link">
        Edit
      </Link>
    </>
  );
}
