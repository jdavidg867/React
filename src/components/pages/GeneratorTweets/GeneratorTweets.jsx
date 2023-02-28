import React, { useState } from 'react';


export const GeneratorTweets = () => {
  const [tweet, setTweet] = useState("");
  const [tweetsArchivados, setTweetsArchivados] = useState([]);

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleTweetSubmit = (event) => {
    event.preventDefault();
    if (tweet.length > 255) {
      alert("Tu tweet excede el límite de caracteres permitido.");
      return;
    }
    setTweetsArchivados([...tweetsArchivados, tweet]);
    setTweet("");
  };

  const handleTweetDelete = (index) => {
    const newTweets = [...tweetsArchivados];
    newTweets.splice(index, 1);
    setTweetsArchivados(newTweets);
  };

  const handleTweetShow = (index) => {
    alert(tweetsArchivados[index]);
  };

  return (
    <div className="container-todo">
      <h1>Generador de Tweets</h1>
      <form onSubmit={handleTweetSubmit}>
        <label>
          Tweet:
          <input type="text" value={tweet} onChange={handleTweetChange} />
        </label>
        <button type="submit">Publicar</button>
      </form>
      <h2>Tweets archivados</h2>
      {tweetsArchivados.length > 0 ? (
        <ul>
          {tweetsArchivados.map((tweet, index) => (
            <li key={index}>
              {tweet}{" "}
              <button onClick={() => handleTweetDelete(index)}>Eliminar</button>{" "}
              <button onClick={() => handleTweetShow(index)}>Mostrar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tweets archivados.</p>
      )}
    </div>
  );
}