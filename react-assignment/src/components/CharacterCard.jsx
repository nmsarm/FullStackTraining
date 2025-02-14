import React from 'react'

const Card = ({ character }) => {
  const dateStr = character.created;
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateStr).toLocaleDateString(undefined, options)
  }

  return (
    <div className="card p-0" style={{width: "20rem"}}>
      <img src={character.image} className="card-img-top " alt="character-image" />
      <div className="card-body">
        <h5 className="card-title text-center">{character.name}</h5>
        <p className="card-text m-0 text-center text-muted">Created {formatDate(dateStr)} </p>
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
        <div className="row">
          <div className="col text-start"><p className="card-text m-0 fw-bold">Last Location:</p></div>
          <div className="col text-end"><p className="card-text m-0">{character.location.name}</p></div>
        </div>
      </div>
    </div>
  ) 
}

export default Card