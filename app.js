let film = {};

fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301", {
  method: "GET",
  headers: {
    "X-API-KEY": "64f24d88-1ecc-4b49-b97e-d7b1644bf424",
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (!res.ok)
      throw new Error("Network response was not ok " + res.statusText);
    return res.json();
  })
  .then((data) => {
    film = data;
     console.log(film);
  })
  .catch((err) => console.log("Fetch error: ", err));
  
  // проверяем, что данные правильно загружены