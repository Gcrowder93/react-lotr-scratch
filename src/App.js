import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import CharactersList from './views/Characters/CharactersList';
import FilmsList from './views/Films/FilmsList';
import BooksList from './views/Books/BooksList';
import { fetchBooks } from './services/books';
import { fetchCharacters } from './services/characters';

function App() {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getFilms();
    getCharacters();
    getBooks();
  }, []);

  const getBooks = async () => {
    const resp = await fetch(`&{process.env.REACT_APP_SUPABASE_URL}/rest/v1/books`, {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    });
    const data = await resp.json();
    const bookData = data.map((item) => [item.title]);
    setBooks(bookData);
    return [BooksList];
  };
  // console.log(BooksList);

  const getFilms = async () => {
    const resp = await fetch(`&{process.env.REACT_APP_SUPABASE_URL}/rest/v1/films`, {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    });

    const data = await resp.json();
    const filmData = data.map((item) => [
      item.title,
      item.title.toLowerCase().replace(/ /g, '-'),
      item.box_office_total,
      item.academy_award_nominations,
    ]);
    setFilms(filmData);
    return [FilmsList];
  };

  const getCharacters = async () => {
    const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/characters`, {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    });
    const data = await resp.json();
    const characterData = data.map((item) => ({
      name: item.name,
      birth: item.birth,
      death: item.death,
      dates: item.birth === item.death ? 'Unknown' : `${item.birth} - ${item.death}`,
    }));

    setCharacters(characterData);
    return [CharactersList];
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>
          <NavLink to="/characters" data-testid="character-link">
            Characters
          </NavLink>
          <NavLink to="/books" data-testid="book-link">
            Books
          </NavLink>
        </header>
        <Switch>
          <Route path="/characters">
            <CharactersList characters={characters} setCharacters={setCharacters} />
          </Route>
          <Route path="/films">
            <FilmsList films={films} setFilms={setFilms} />
          </Route>
          <Route path="/books">
            <BooksList books={books} setBooks={setBooks} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
