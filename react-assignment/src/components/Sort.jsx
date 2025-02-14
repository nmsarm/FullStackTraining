import React from 'react'

const Sort = () => {
  return (
    <div className="col-2">
        <div className="input-group mb-3">
            <select className="form-select" aria-label="Default select example">
                <option value="1">Ascending</option>
                <option value="2">Descending</option>
            </select>
        </div>
    </div>
  )
}

export default Sort