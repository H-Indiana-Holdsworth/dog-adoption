import React from 'react';

export default function DogForm({ name, image, bio, breed, age, updateDogState, handleSubmit }) {
  return (
    <div>
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
              updateDogState('text', e.target.value);
            }}
          />
        </label>
        Bio:
        <label>
          <input
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
