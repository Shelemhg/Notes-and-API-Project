function getPerson(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
            // If you got a response return it as a JSON
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  // This functions recives the what and the ID of where to post the response
  function renderPersonList(people, peopleList) {
      //  TODO  Make sure that  the chunk of code created in this function gets to the DOM
    const list = peopleList.children[1];
    list.innerHTML = "";
    //  Iterate through the whole JSON received
    people.forEach(function (person) {
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td><a href="${person.url}">${person.name}</a></td>
          <td>${person.mass}</td>
          <td>${person.gender}</td>
          `;
          list.appendChild(listItem);
      }); 
  }
  
  
  // First function, declares the main chunk of the link and calls 
  function showPeople(url = "https://swapi.dev/api/people/"){
          getPerson(url).then(function (data){
  
              //When the request was succesful store the response
              const results = data.results;
              //  Saves the ID of the element from the DOM
              const peopleList = document.getElementById("peopletable");
  
              renderPersonList(results, peopleList)
              
            });
  }
  
  function getpersonDetails(url) {
    //call getJSON functions for the provided url
    getPerson(url).then(function (data) {
      //renderPersonDetails(data);
      //with the results populate the elements in the #detailsbox
    });
  }
  showPeople();
  