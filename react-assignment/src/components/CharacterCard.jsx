import React, { useState, useEffect } from 'react'
import styles from '../styles/modules/CharacterCard.module.css';

const Card = ({ character }) => {
  const dateStr = character.created;
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateStr).toLocaleDateString(undefined, options)
  }
  const characterData = [
    { label: "ID", value: character.id },
    { label: "Status", value: character.status },
    { label: "Species", value: character.species },
    { label: "Gender", value: character.gender },
    { label: "Origin", value: character.origin.name },
    { label: "Last Location", value: character.location.name }
  ];

  const cardStyle = `card p-0 ${styles.card}`;

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
    <div className={cardStyle} style={isMobile? {width: "10rem"} : {width: "20rem"}}>
      <img src={character.image} className="card-img-top" alt="character-image" />
      <div className="card-body bg-dark text-white">
        <h5 className="card-title text-center text-warning" style={isMobile? {fontSize: "20px"} : {}}>{character.name}</h5>
        <p className="card-text m-0 text-center" style={isMobile? {fontSize: "10px"} : {}}>Created {formatDate(dateStr)}</p>
        <hr />
        {characterData.map((data, index) => (
          <div className="row" key={index} style={isMobile? {fontSize: "12px"} : {}}>
            <div className="col text-start"><p className="card-text m-0 fw-bold">{data.label}:</p></div>
            <div className="col text-end text-warning"><p className="card-text m-0">{data.value}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card