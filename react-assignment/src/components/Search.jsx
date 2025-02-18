import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../redux/charactersSlice'

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="col-xl-4 px-3">
        <div className="input-group mb-3">
            <input type="text" id="search" className="form-control bg-light" placeholder="Search by Name" onChange={handleSearch} />
        </div>
    </div>
  )
}

export default Search