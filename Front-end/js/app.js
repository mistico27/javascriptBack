//@ts-nocheck
console.log("que si esta leyendo el script")

const baseURL = "http://localhost:8800";
const cardsContainer = document.querySelector("#koders-container")
const pintarKoders = async () => {
  const response = await fetch(`${baseURL}/koders`, {
    method: "GET"
  });
  const data = await response.json();
  console.log("DATA", data)
  if(!data.success) alert("Hubo un error al pintar los data");
  data.data.forEach((koder) => {
    const divParent = document.createElement("div");
    const name = document.createElement("p").textContent = `Name: ${koder.name}`;
    const generation = document.createElement("p").textContent = `Gen: ${koder.generation}`;
    const age = document.createElement("p").textContent = `Age: ${koder.age}`;
    divParent.append(name, generation, age)
    cardsContainer.append(divParent);
  })
}

/**
 * innerHtml
 * createElements
 * setHTML --> sanitiza y es mas seguro
 */
pintarKoders();