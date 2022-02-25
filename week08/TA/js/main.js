function getPlanet(url) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}


function renderPlanetList(planets, planetListElement) {
  const list = planetListElement.children[1];
  list.innerHTML = "";
  planets.forEach(function (planet) {
    let listItem = document.createElement("tr");
    listItem.innerHTML = `
        <td><a href="${planet.url}">${planet.name}</a></td>
        <td>${planet.gravity}</td>
        <td>${planet.population}</td>
        <td>${planet.diameter}</td>
        <td>${planet.climate}</td>
        <td>${planet.terrain}</td>
        `;

    listItem.addEventListener("click", function (event) {
      event.preventDefault();
      getplanetDetails(planet.url);
    });

    list.appendChild(listItem);
  });
}
function renderPlanetDetails(planetData) {
  console.log(planetData);
}

function showplanets(url = "https://swapi.dev/api/planets/") {
  getPlanet(url).then(function (data) {
    console.log(data);
    const results = data.results;
    const planetListElement = document.getElementById("planetlist");
    renderPlanetList(results, planetListElement);


    if (data.next) {
      const next = document.getElementById("next");
      next.onclick = () => {
        showplanets(data.next);
      };
    }
    if (data.previous) {
      const prev = document.getElementById("prev");

      prev.onclick = () => {
        showplanets(data.previous);
      };
    }
  });
}

function getplanetDetails(url) {
  //call getJSON functions for the provided url
  getPlanet(url).then(function (data) {
    renderPlanetDetails(data);
    //with the results populate the elements in the #detailsbox
  });
}
showplanets();