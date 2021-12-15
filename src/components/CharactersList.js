import React from 'react';

export default function CharactersList({ characters }) {
  return (
    <section className="characters">
      {characters.map((char) => (
        <div className="character" key={char.name}>
          <a href={char.wikiUrl}>{char.name}</a>
          <p>{char.dates}</p>
        </div>
      ))}
    </section>
  );
}
