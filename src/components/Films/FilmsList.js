import React from 'react';

export default function FilmsList({ films }) {
  return (
    <section className="films">
      {films.map((film) => (
        <div
          className="film"
          key={film.title}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/films/${film.title
              .toLowerCase()
              .replace(/ /g, '-')}.jpeg`,
          }}
        >
          <div className="content">
            <h1>{film.title}</h1>
            <p>
              {`${film.title} totaled $${film.box_office_total}M at the box office and had ${film.academy_award_nominations} Academy Award nominations`}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
