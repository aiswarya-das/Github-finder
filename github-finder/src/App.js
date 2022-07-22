import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [initialInput, setInput] = useState("");
  const arr = [];
  //let tempData = {};

  /* const search = () => {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setData(json);
        console.log(json);
      });
  };*/

  const search = () => {
    fetch(`https://api.github.com/users/${initialInput}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(data);
        //  setData(data);

        // arr.push(json);
        // console.log("array", arr);
        setData(json);
        // let filtered = data.filter((item) => item.avatar_url );
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <section className="container">
      <h1>Github Finder</h1>
      <input
        type="text"
        value={initialInput}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="button" value="Search" onClick={search} />
      <p>{data.login}</p>
      <img className="profile-pic" src={data.avatar_url} />
      <p>{data.name}</p>
      <p>{data.bio}</p>
      {data.followers && <p>Followers: {data.followers}</p>}
      {data.following && <p>Following: {data.following}</p>}

      <p>{data.location}</p>
      <p>{data.blog}</p>
    </section>
  );
}

export default App;
