// import React from 'react';

// export default function BooksList() {
//   return <div></div>;
// }

import React from 'react';

export default function BooksList({ books }) {
  return (
    <section className="books">
      {books.map((books) => (
        <div className="books" key={books.title}>
          <a href={books.wikiUrl}>{books.title}</a>
        </div>
      ))}
    </section>
  );
}
