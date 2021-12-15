import { render } from '@testing-library/react';
import CharactersList from './components/Characters/CharactersList';

test('renders the characters name', () => {
  const Frodo = {
    race: 'Hobbit',
  };
  const container = render(<CharactersList characters={[Frodo]} />);
  expect(container).toMatchSnapshot();
});
