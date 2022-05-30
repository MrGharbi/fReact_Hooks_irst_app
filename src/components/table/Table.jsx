import React from 'react'

import './Table.css';

const Table = (data) => {
  let i = 0;
  let keys = [];
  for(const ke of data.data){
    for(const k of Object.keys(ke)){
      keys.push(k);
    }
    break;
  }
  /*
  data.data.map((a) => (
    keys.push(Object.keys(a))
    ));
*/
  return (
    <div>
    <h1>A Fancy Table</h1>

    <table id="customers">
      <thead>
      <tr>
      {
        keys.map((key)=>
        (
          <th key={key}>{key}</th>
        )
        )
      }
      </tr>
      </thead>
      <tbody>
      {
        data.data.map((line) => 
        <tr key={line.id}>
        {
          keys.map((ke)=> (
            <td key={i++}>{line[ke]}</td>))}
            
        </tr> 
        )
      }
      </tbody>
    </table></div>
  )
}

export default Table