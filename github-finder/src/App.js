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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Profile not found!");
      })
      .then((json) => {
        // arr.push(json);
        // console.log("array", arr);
        console.log(json.blog);
        setData(json);
      })
      .catch((e) => {
        console.log("error", e);
        alert(e);
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
      <p>{data.bio}</p>
      <div className="follow">
        {(data.followers || data.followers >= 0) && (
          <h6>
            <b>{data.followers}</b> Followers .
          </h6>
        )}
        {(data.following || data.following >= 0) && (
          <h6>
            <b>{data.following}</b> Following
          </h6>
        )}
      </div>

      <p>{data.location}</p>
      <a href={`http://${data.blog}`}>{data.blog}</a>
    </section>
  );
}

export default App;
