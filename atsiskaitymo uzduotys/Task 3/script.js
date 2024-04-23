/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
document.addEventListener('DOMContentLoaded', function() {
    // Gaukime mygtuko elemento elementą pagal id
    const showUsersButton = document.getElementById('show-users-btn');
  
    // Gaukime output elemento elementą pagal id
    const outputElement = document.getElementById('output');
  
    // Gaukime žinutės elemento elementą pagal id
    const messageElement = document.getElementById('message');
  
    // Pridėkime mygtukui event listener'į paspaudimui
    showUsersButton.addEventListener('click', function() {
      // Paslėpkime žinutę
      messageElement.style.display = 'none';
  
      // Išvalykime output elementą
      outputElement.innerHTML = '';
  
      // Siųskime užklausą į Github API
      fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
          // Iteruojame per gautus vartotojus
          data.forEach(user => {
            // Sukurkime kortelę su vartotojo informacija
            const card = document.createElement('div');
            card.classList.add('user-card');
            card.innerHTML = `
              <div class="user-info">
                <p><strong>Login:</strong> ${user.login}</p>
                <img src="${user.avatar_url}" alt="Avatar" class="avatar">
              </div>
            `;
            // Pridėkime kortelę prie output elemento
            outputElement.appendChild(card);
          });
        })
        .catch(error => {
          // Jei įvyksta klaida, atvaizduokime pranešimą
          outputElement.innerHTML = '<p>Įvyko klaida gaunant duomenis.</p>';
        });
    });
  });
  