import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, removeFilter } from '../redux/charactersSlice'

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.characters.filters);

  const handleFilter = (event) => {
    const { name, value, checked } = event.target;
    dispatch(setFilters({ name, value, checked }));
  };

  const handleRemoveFilter = (name, value) => {
    dispatch(removeFilter({ name, value }));
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
      window.addEventListener('resize', handleResize)
  })

  return (
    <div className={isMobile? "py-4 px-5": "col-xl-2 bg-white text-start text-dark px-3 py-5"}>
      {isMobile ? (
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h4>Filters</h4>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {filterData.map((filterCategory, index) => (
                  <div className="mb-2" key={index}>
                    {/* <div className="card-body"> */}
                      <h5 className="text-start">{filterCategory.category}</h5>
                      {filterCategory.options.map((option, idx) => (
                        <div className="form-check" key={idx}>
                          <input
                            className="form-check-input border-2"
                            name={option.name}
                            type="checkbox"
                            value={option.value || ''}
                            id={option.id}
                            onChange={handleFilter}
                            checked={filters[option.name].includes(option.value)}
                          />
                          <label className="form-check-label" htmlFor={option.for}>
                            {option.value}
                          </label>
                        </div>
                      ))}
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 px-4">Filters</h2>
          {filterData.map((filterCategory, index) => (
            <div className="card p-1 m-4 border-2 border-dark" key={index}>
              <div className="card-body">
                <h5 className="text-center mb-4">{filterCategory.category}</h5>
                {filterCategory.options.map((option, idx) => (
                  <div className="form-check" key={idx}>
                    <input
                      className="form-check-input border-2"
                      name={option.name}
                      type="checkbox"
                      value={option.value}
                      id={option.id}
                      onChange={handleFilter}
                      checked={filters[option.name].includes(option.value)}
                    />
                    <label className="form-check-label" htmlFor={option.for}>
                      {option.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-4">
            <ul>
              {Object.keys(filters).map((filterKey) => (
                filters[filterKey].map((filterValue, idx) => (
                  <button 
                    key={`${filterKey}-${idx}`}
                    type="button" 
                    className="btn btn-secondary m-1"
                    onClick={() => handleRemoveFilter(filterKey, filterValue)}
                  >
                    {filterValue} X
                  </button>
                ))
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters