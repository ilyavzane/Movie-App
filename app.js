let film = {};

fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301", {
  method: "GET",
  headers: {
    "X-API-KEY": "64f24d88-1ecc-4b49-b97e-d7b1644bf424",
    "Content-Type": "application/json",
  },
})
  .then((res) => (film = res.json()))
  .then((data) => (film = data))
  .catch((err) => console.log(err));

console.log(film);
