import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((item) => (
        <div key={item.id}>
          <h2>Meet {item.name}</h2>
          <Link to={`/dogs/${item.id}`}>
            <p>
              <img className="dog-img" src={item.image} />
              {item.name} is a {item.age} year old {item.breed}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
