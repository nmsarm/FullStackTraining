import React from 'react'

const Search = () => {
  return (
    <div className="col-4 px-3">
        <div className="input-group mb-3">
            <input type="text" id="task-search" className="form-control" placeholder="Search by Name" />
        </div>
    </div>
  )
}

export default Search