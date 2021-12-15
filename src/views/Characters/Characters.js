// importing character list and exporting characters

import React from 'react';
import { useEffect, useState } from 'react';
import CharactersList from '../../components/Characters/CharactersList';
import { fetchCharacters } from '../../services/characters';
import Controls from '../../components/Characters/Controls';

export default function Characters() {
  const [race, setRace] = useState('All');
  // const [characters, setCharacters] = useState([]);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Controls {...{ query, setQuery, race, setRace, handleClick }} />
      <CharactersList characters={data} />
    </div>
  );
}
