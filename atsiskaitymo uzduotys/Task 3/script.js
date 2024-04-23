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
    
    const showUsersButton = document.getElementById('show-users-btn');
  
    
    const outputElement = document.getElementById('output');
  
    
    const messageElement = document.getElementById('message');
  
    
    showUsersButton.addEventListener('click', function() {
      
      messageElement.style.display = 'none';
  
      
      outputElement.innerHTML = '';
  
      
      fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
          
          data.forEach(user => {
            
            const card = document.createElement('div');
            card.classList.add('user-card');
            card.innerHTML = `
              <div class="user-info">
                <p><strong>Login:</strong> ${user.login}</p>
                <img src="${user.avatar_url}" alt="Avatar" class="avatar">
              </div>
            `;
            
            outputElement.appendChild(card);
          });
        })
        .catch(error => {
          
          outputElement.innerHTML = '<p>Įvyko klaida gaunant duomenis.</p>';
        });
    });
  });
  
