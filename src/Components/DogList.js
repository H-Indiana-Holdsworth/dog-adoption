import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((item) => (
        <Link key={item.id} to={`/dogs/${item.id}`}>
          <p>
            <img src={item.image} />
          </p>
          {item.name} is a {item.age} year old {item.breed}
        </Link>
      ))}
    </div>
  );
}
