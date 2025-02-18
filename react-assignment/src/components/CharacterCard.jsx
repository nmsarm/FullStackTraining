import React from 'react'
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

  return (
    <div className={cardStyle} style={{width: "20rem"}}>
      <img src={character.image} className="card-img-top" alt="character-image" />
      <div className="card-body bg-dark text-white">
        <h5 className="card-title text-center text-warning">{character.name}</h5>
        <p className="card-text m-0 text-center">Created {formatDate(dateStr)}</p>
        <hr />
        {characterData.map((data, index) => (
          <div className="row" key={index}>
            <div className="col text-start"><p className="card-text m-0 fw-bold">{data.label}:</p></div>
            <div className="col text-end text-warning"><p className="card-text m-0">{data.value}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card