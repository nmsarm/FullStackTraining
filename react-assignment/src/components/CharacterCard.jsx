import React from 'react'

const Card = ({ character }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={character.image} className="card-img-top" alt="character-image" />
      <div className="card-body">
        <h5 className="card-title text-center">{character.name}</h5>
        <hr />
        <div className="row">
          <div className="col text-start"><p className="card-text m-0 fw-bold">ID:</p></div>
          <div className="col text-end"><p className="card-text m-0">{character.id}</p></div>
        </div>
        <div className="row">
          <div className="col text-start"><p className="card-text m-0 fw-bold">Status:</p></div>
          <div className="col text-end"><p className="card-text m-0">{character.status}</p></div>
        </div>
        <div className="row">
          <div className="col text-start"><p className="card-text m-0 fw-bold">Species:</p></div>
          <div className="col text-end"><p className="card-text m-0">{character.species}</p></div>
        </div>
        <div className="row">
          <div className="col text-start"><p className="card-text m-0 fw-bold">Gender:</p></div>
          <div className="col text-end"><p className="card-text m-0">{character.gender}</p></div>
        </div>
        <div className="row">
          <div className="col text-start"><p className="card-text m-0 fw-bold">Origin:</p></div>
          <div className="col text-end"><p className="card-text m-0">{character.origin.name}</p></div>
        </div>
      </div>
    </div>
  ) 
}

export default Card