const button = document.querySelector("button");
const jokes = document.querySelector("#joke");

async function fetchJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random", {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  console.log(data);
  jokes.innerHTML = data.value;
}
fetchJoke();

button.addEventListener("click", fetchJoke);
