import React from 'react';

export default function SearchBar(props) {
  function dataSearch(e) {
    const value = e.target.value.toLowerCase();
    let filteredData;
    switch (props.searchField) {
      case "humanName":
        filteredData = props.data.filter(elem => {
          return (elem.humanName.toLowerCase().includes(value))
        });
        break;
      case "name":
        filteredData = props.data.filter(elem => {
          return (elem.name.toLowerCase().includes(value))
        });
        break;
    }
    props.updateFunc(filteredData)


  }
  return (
    <div className="searchBar">
      <input className="form-control" type="text" placeholder="Поиск" aria-label="Search" onChange={dataSearch}/>
    </div>
  );
}
