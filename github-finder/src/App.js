import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [initialInput, setInput] = useState("");
  const arr = [];

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
        // arr.push(json);
        // console.log("array", arr);
        setData(json);
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
      <h5>{data.login}</h5>
      <img className="profile-pic" src={data.avatar_url} />
      <h4>{data.name}</h4>
      <h5>{data.bio}</h5>
      <div className="follow">
        {data.followers >= 0 && (
          <h6>
            <b>{data.followers}</b> Followers .
          </h6>
        )}
        {data.following >= 0 && (
          <h6>
            <b>{data.following}</b> Following
          </h6>
        )}
      </div>

      <p>{data.location}</p>
      <a href={data.blog}>{data.blog}</a>
    </section>
  );
}

export default App;
