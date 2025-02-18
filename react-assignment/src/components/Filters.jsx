import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilters } from '../redux/charactersSlice'

const Filters = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const { name, value, checked } = event.target;
    dispatch(setFilters({ name, value, checked }));
  };

  const filterData = [
    {
      category: 'Species',
      options: [
        { name: "species", value: "Human", id: "speciesHuman", for: "speciesHuman" },
        { name: "species", value: "Alien", id: "speciesAlien", for: "speciesAlien" }
      ]
    },
    {
      category: 'Gender',
      options: [
        { name: "gender", value: "Male", id: "genderMale", for: "genderMale" },
        { name: "gender", value: "Female", id: "genderFemale", for: "genderFemale" },
        { name: "gender", value: "unknown", id: "genderUnknown", for: "genderUnknown" }
      ]
    },
    {
      category: 'Origin',
      options: [
        { name: "origin", value: "Earth (C-137)", id: "originEarth1", for: "originEarth1" },
        { name: "origin", value: "unknown", id: "originUnknown", for: "originUnknown" },
        { name: "origin", value: "Earth (Replacement Dimension)", id: "originEarth2", for: "originEarth2" },
        { name: "origin", value: "Abadango", id: "originAbadango", for: "originAbadango" }
      ]
    }

  ];

  return (
    <div className="col-2 bg-secondary text-start text-white py-4 min-vh-100">
      <h2 className="mb-4 px-2">Filters</h2>
      {filterData.map((filterCategory, index) => (
        <div className="card p-1 m-2" key={index}>
          <div className="card-body">
            <h5 className="text-center mb-4">{filterCategory.category}</h5>
            {filterCategory.options.map((option, idx) => (
              <div className="form-check" key={idx}>
                <input
                  className="form-check-input"
                  name={option.name}
                  type="checkbox"
                  value={option.value}
                  id={option.id}
                  onChange={handleFilter}
                />
                <label className="form-check-label" htmlFor={option.for}>
                  {option.value}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Filters