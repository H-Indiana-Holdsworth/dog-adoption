import React from 'react';
import './DogForm.css';

export default function DogForm({ name, image, bio, breed, age, updateDogState, handleSubmit }) {
  return (
    <div className="body">
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              updateDogState('name', e.target.value);
            }}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              updateDogState('image', e.target.value);
            }}
          />
        </label>
        <label>
          Bio:
          <input
            className="bio"
            type="text"
            name="bio"
            value={bio}
            onChange={(e) => {
              updateDogState('bio', e.target.value);
            }}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={(e) => {
              updateDogState('breed', e.target.value);
            }}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => {
              updateDogState('age', e.target.value);
            }}
          />
        </label>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
