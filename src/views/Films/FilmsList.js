import React from 'react';

export default function FilmsList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div
          className="film"
          key={film[1]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/films/${film[1]}.jpeg` }}
        >
          <div className="content">
            <h1>{film[0]}</h1>
            <p>
              {`${film[0]} totaled $${film[2]}M at the box office and had ${film[3]} Academy Award nominations`}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
