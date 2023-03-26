import React from 'react';

const Pet = ({ animal }) => {
  return (
    <a
      key={animal.id}
      href={`/${animal.type.toLowerCase()}/${animal.id}`}
      className="pet"
    >
      <article className="card">
        <div className="pet-image-container">
          {
            <img
              className="pet-image"
              src={
                animal.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
              }
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        <p><span className="breed">Breed:</span> {animal.breeds.primary}</p>
        <p><span className="breed">Color:</span> {animal.colors.primary}</p>
        <p><span className="breed">Gender:</span> {animal.gender}</p>
      </article>
    </a>
  );
};

export default Pet;
