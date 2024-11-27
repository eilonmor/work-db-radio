import React from 'react';
import './DataList.scss'; // Import Sass file

const DataList = ({ data }) => {
  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.sort((itemTosortFirst,itemTosortSecond) => Number(itemTosortFirst.siteId) - Number(itemTosortSecond.siteId)).map(item => (
          <li key={item.siteId}>Site Id: {item.siteId} | Device id: {item.deviceId} | Site ip: {item.siteIP}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
