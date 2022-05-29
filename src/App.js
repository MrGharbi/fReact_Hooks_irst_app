import React, {useState, useEffect} from 'react';
import Table from './components/table/Table'
import './App.css';


function App() {
  const [endPoint, setEndPoint] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
      .then(response => response.json())
      .then(json => setData(json))
      .then(setIsLoading(true))
  },[endPoint]);
  return (
    <div className="App">
      <div className="Button">
        <button onClick={()=> setEndPoint("posts")}>posts</button>
        <button onClick={()=> setEndPoint("comments")}>comments</button>
        <button onClick={()=> setEndPoint("albums")}>albums</button>
        <button onClick={()=> setEndPoint("photos")}>photos</button>
        <button onClick={()=> setEndPoint("todos")}>todos</button>
        <button onClick={()=> setEndPoint("users")}>users</button>
      </div>
    <hr />
    {isLoading ? <Table data = {data} />: console.log("error")}
    </div>
    
  );
}

export default App;
