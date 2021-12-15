// importing character list and exporting characters

import React from 'react';
import { useEffect, useState } from 'react';
import CharactersList from '../../components/CharactersList';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [data, setData] = useState([]);
  const [query] = useState('');
  const [race] = useState('All');
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
      <CharactersList characters={data} />
    </div>
  );
}
