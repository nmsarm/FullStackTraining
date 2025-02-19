import React, { useState, useEffect } from 'react';
import Card from './CharacterCard'
import Search from './Search'
import Sort from './Sort'
import { useSelector } from 'react-redux';
import { selectFilteredCharacters } from '../redux/selectors';

const Characters = () => {
  const characters = useSelector(selectFilteredCharacters);

  const [isMobile, setIsMobile] = useState(false);

  // Mobile screen size
  const handleResize = () => {
      if (window.innerWidth < 995) {
          setIsMobile(true)
      }  else {
          setIsMobile(false)
      }
  }

  // Event listener for resize
    useEffect(() => {
      window.addEventListener("resize", handleResize)
  })
  
  return (
    <div className={isMobile? "col-sm-12 bg-white text-white px-2" : "col-xl-10 bg-white text-white py-5 p-3"}>
        <div className={isMobile? "row mx-2 justify-content-center" : "d-flex justify-content-end mx-5"}>
          {isMobile? 
            <>
              <div className="col-6"> <Search /> </div>
              <div className="col-6"> <Sort /> </div>
            </>
          :
            <>
              <Search />
              <Sort />
            </>
          }
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