import React from 'react'

import './Table.css';

const Table = (data) => {
  let keys = [];
  for ( var obj in data.data){
    console.log(obj);
    break;
  }
  alert(keys);

  return (
    <div>
    <h1>A Fancy Table</h1>

    <table id="customers">
      <thead>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      </thead>
      <tbody>
      {
        data.data.map((line) => 
        <tr key={line.id}>
            <td>{line.id}</td>
            <td>{line.title}</td>
            <td>{line.body}</td>
        </tr> 
        )
      }
      </tbody>
    </table></div>
  )
}

export default Table