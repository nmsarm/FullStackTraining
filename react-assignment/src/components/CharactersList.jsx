import { React }from 'react'
import Card from './CharacterCard'
import Search from './Search'
import Sort from './Sort'
import { useSelector } from 'react-redux';
import { selectFilteredCharacters } from '../redux/selectors';

const Characters = () => {
  const characters = useSelector(selectFilteredCharacters);

  return (
    <div className="col-10 bg-light text-white py-5">
        <div className="d-flex justify-content-end mx-5">
            <Search />
            <Sort />
        </div>
       <div className="row m-3 grid gap-4 justify-content-center">
          {characters.map(character => (
            <Card key={character.id} character={character}/>
          ))}
       </div>
    </div>
  )
}

export default Characters