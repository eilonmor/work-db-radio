import React, { useState, useEffect } from 'react';
// import '../../src/App.scss'; // Import main Sass file
import DataList from '../../src/dataList';
import SearchFilter from '../../src/searchFilter';
import data from '../../src/data.json';

const HomePR = () => {
    const [filteredData, setFilteredData] = useState(data);
  
    useEffect(() => {
      setFilteredData(data);
    }, []);
  
    const handleSearch = searchTerm => {
      const filtered = data.filter(item =>
        item.siteId.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === item.siteIP || searchTerm === item.deviceId
      );
      setFilteredData(filtered);
    };
  
    return (
      <div className='container'>
        <h1>React Data App</h1>
        <SearchFilter searchData={data} onSearch={handleSearch} />
        <DataList data={filteredData} />
      </div>
    );
  };

  export default HomePR;
