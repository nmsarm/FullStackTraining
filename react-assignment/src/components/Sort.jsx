import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortOrder} from '../redux/charactersSlice'

const Sort = () => {
    const dispatch = useDispatch();
  
    const handleSort = (event) => {
      dispatch(setSortOrder(event.target.value));
    };
  
  return (
    <div className="col-xl-2">
        <div className="input-group mb-3">
            <select className="form-select bg-light border-2" aria-label="Default select example" onChange={handleSort}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    </div>
  )
}

export default Sort